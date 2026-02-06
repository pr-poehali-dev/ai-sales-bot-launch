import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Lead {
  id: number;
  name: string;
  business_type: string;
  monthly_leads: number;
  whatsapp: string;
  created_at: string;
  status: string;
}

export default function Admin() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://functions.poehali.dev/fe97f339-3d51-43f5-8611-2ac45f11a611');
      
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
      }
      
      const data = await response.json();
      setLeads(data.leads || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const openWhatsApp = (phone: string, name: string) => {
    const message = `Здравствуйте, ${name}! Благодарю за заявку на тест-драйв чат-бота.`;
    window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary flex items-center gap-3">
              <Icon name="Users" size={36} />
              Панель управления заявками
            </h1>
            <p className="text-muted-foreground mt-2">
              Все заявки на тест-драйв чат-бота
            </p>
          </div>
          <Button
            onClick={fetchLeads}
            variant="outline"
            className="border-2 border-primary/30 hover:bg-primary/10"
          >
            <Icon name="RefreshCw" className="mr-2" size={18} />
            Обновить
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <Icon name="Loader2" className="animate-spin text-primary" size={48} />
          </div>
        ) : error ? (
          <div className="bg-destructive/10 border-2 border-destructive/30 rounded-xl p-8 text-center">
            <Icon name="AlertCircle" className="mx-auto text-destructive mb-4" size={48} />
            <p className="text-destructive font-semibold text-lg">{error}</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="bg-card border-2 border-primary/30 rounded-xl p-12 text-center">
            <Icon name="Inbox" className="mx-auto text-muted-foreground mb-4" size={64} />
            <p className="text-xl text-muted-foreground">Пока нет заявок</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-card border-2 border-primary/30 rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="User" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-sm text-muted-foreground">Имя</p>
                        <p className="font-bold text-lg">{lead.name}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-start gap-3">
                        <Icon name="Briefcase" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Бизнес</p>
                          <p className="font-semibold">{lead.business_type}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Icon name="TrendingUp" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Заявок/месяц</p>
                          <p className="font-semibold">{lead.monthly_leads}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Icon name="Calendar" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="text-sm text-muted-foreground">Дата</p>
                          <p className="font-semibold text-sm">{formatDate(lead.created_at)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 lg:flex-col">
                    <Button
                      onClick={() => openWhatsApp(lead.whatsapp, lead.name)}
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold neon-border"
                    >
                      <Icon name="MessageCircle" className="mr-2" size={18} />
                      {lead.whatsapp}
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 rounded-lg border border-primary/30">
                      <Icon name="Circle" className="text-yellow-500 fill-yellow-500" size={12} />
                      <span className="text-sm font-semibold capitalize">{lead.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
