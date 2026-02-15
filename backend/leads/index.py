import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor
import requests


def handler(event: dict, context) -> dict:
    """API для работы с заявками: сохранение и получение списка"""
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'DATABASE_URL not configured'})
        }
    
    conn = psycopg2.connect(dsn)
    
    try:
        if method == 'POST':
            data = json.loads(event.get('body', '{}'))
            
            name = data.get('name', '').strip()
            business_type = data.get('businessType', '').strip()
            monthly_leads = data.get('monthlyLeads', 0)
            whatsapp = data.get('whatsapp', '').strip()
            
            if not all([name, business_type, whatsapp]) or monthly_leads <= 0:
                return {
                    'statusCode': 400,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'All fields are required'})
                }
            
            with conn.cursor() as cur:
                cur.execute(
                    "INSERT INTO leads (name, business_type, monthly_leads, whatsapp) VALUES (%s, %s, %s, %s) RETURNING id",
                    (name, business_type, monthly_leads, whatsapp)
                )
                lead_id = cur.fetchone()[0]
                conn.commit()
            
            try:
                bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
                chat_id = os.environ.get('TELEGRAM_CHAT_ID')
                
                if bot_token and chat_id:
                    message = f"🆕 Новая заявка #{lead_id}\n\n👤 Имя: {name}\n💼 Бизнес: {business_type}\n📊 Заявок/неделю: {monthly_leads}\n📱 WhatsApp: {whatsapp}"
                    
                    requests.post(
                        f"https://api.telegram.org/bot{bot_token}/sendMessage",
                        json={"chat_id": chat_id, "text": message},
                        timeout=5
                    )
            except Exception as e:
                print(f"Telegram notification error: {e}")
            
            return {
                'statusCode': 201,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'leadId': lead_id,
                    'message': 'Lead saved successfully'
                })
            }
        
        elif method == 'GET':
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute(
                    "SELECT id, name, business_type, monthly_leads, whatsapp, created_at, status FROM leads ORDER BY created_at DESC"
                )
                leads = cur.fetchall()
                
                for lead in leads:
                    if lead['created_at']:
                        lead['created_at'] = lead['created_at'].isoformat()
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'leads': leads})
            }
        
        else:
            return {
                'statusCode': 405,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Method not allowed'})
            }
    
    finally:
        conn.close()