import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface RegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RegistrationForm({ open, onOpenChange }: RegistrationFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    businessType: '',
    leadsPerWeek: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Сохраняем заявку в базу данных
      const response = await fetch('https://functions.poehali.dev/fe97f339-3d51-43f5-8611-2ac45f11a611', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          businessType: formData.businessType,
          monthlyLeads: parseInt(formData.leadsPerWeek) || 0,
          whatsapp: formData.whatsapp
        })
      });

      if (response.ok) {
        // Формируем сообщение для WhatsApp
        const message = `Новая заявка:%0A%0AИмя: ${formData.name}%0AВид бизнеса: ${formData.businessType}%0AЗаявок в неделю: ${formData.leadsPerWeek}%0AWhatsApp: ${formData.whatsapp}`;
        
        // Открываем WhatsApp с сообщением
        window.open(`https://wa.me/996500600150?text=${message}`, '_blank');
        
        // Перенаправляем на страницу благодарности
        onOpenChange(false);
        setFormData({ name: '', businessType: '', leadsPerWeek: '', whatsapp: '' });
        navigate('/thank-you');
      }
    } catch (error) {
      console.error('Ошибка при отправке заявки:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-background border-2 border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
            <Icon name="Rocket" size={28} className="text-primary" />
            Забронировать тест-драйв
          </DialogTitle>
          <DialogDescription className="text-base">
            Заполните форму, и мы свяжемся с вами в WhatsApp
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-semibold">
                Имя
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
                className="h-12 text-base border-2 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessType" className="text-base font-semibold">
                Вид бизнеса
              </Label>
              <Input
                id="businessType"
                type="text"
                placeholder="Например: Автосервис, Кафе, Магазин"
                value={formData.businessType}
                onChange={(e) => handleChange('businessType', e.target.value)}
                required
                className="h-12 text-base border-2 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leadsPerWeek" className="text-base font-semibold">
                Сколько заявок в неделю
              </Label>
              <Input
                id="leadsPerWeek"
                type="text"
                placeholder="Например: 10-25"
                value={formData.leadsPerWeek}
                onChange={(e) => handleChange('leadsPerWeek', e.target.value)}
                required
                className="h-12 text-base border-2 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-base font-semibold">
                Номер WhatsApp
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="+996 XXX XXX XXX"
                value={formData.whatsapp}
                onChange={(e) => handleChange('whatsapp', e.target.value)}
                required
                className="h-12 text-base border-2 focus:border-primary"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 text-lg font-bold neon-border bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </>
              )}
            </Button>
          </form>
      </DialogContent>
    </Dialog>
  );
}