import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor
import urllib.request
import urllib.parse


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
            
            # Отправка уведомления в Telegram
            try:
                bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
                chat_id = os.environ.get('TELEGRAM_CHAT_ID')
                
                print(f"DEBUG: bot_token present: {bool(bot_token)}, chat_id present: {bool(chat_id)}")
                
                if bot_token and chat_id:
                    chat_id_int = int(chat_id)
                    message = f"Novaya zayavka #{lead_id}\n\nImya: {name}\nBiznes: {business_type}\nZayavok/nedelyu: {monthly_leads}\nWhatsApp: {whatsapp}"
                    
                    telegram_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
                    print(f"DEBUG: Using urllib, chat_id: {chat_id_int}")
                    
                    # Используем встроенную urllib
                    data = urllib.parse.urlencode({
                        'chat_id': chat_id_int,
                        'text': message
                    }).encode('utf-8')
                    
                    req = urllib.request.Request(telegram_url, data=data, method='POST')
                    req.add_header('Content-Type', 'application/x-www-form-urlencoded')
                    
                    with urllib.request.urlopen(req, timeout=5) as response:
                        response_data = response.read().decode('utf-8')
                        print(f"DEBUG: Telegram response status: {response.status}")
                        print(f"DEBUG: Telegram response: {response_data}")
                else:
                    print(f"DEBUG: Missing Telegram credentials")
            except Exception as e:
                print(f"Telegram notification error: {e}")
                import traceback
                print(f"Traceback: {traceback.format_exc()}")
            
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