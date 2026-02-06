import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function ThankYou() {
  const handleTestBot = () => {
    window.open('https://api.whatsapp.com/send/?phone=996500113974&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%85%D0%BE%D1%82%D0%B5%D0%BB%28%D0%B0%29+%D0%B1%D1%8B+%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C+%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5+%D0%BE+%D1%87%D0%B0%D1%82-%D0%B1%D0%BE%D1%82%D0%B5.&type=phone_number&app_absent=0', '_blank');
  };

  return (
    <div className="min-h-screen bg-background cyber-grid flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 sm:p-12 md:p-16 bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/50 neon-border text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-primary/20 rounded-full mb-6 animate-pulse">
              <Icon name="CheckCircle" size={48} className="text-primary sm:w-16 sm:h-16" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 gradient-text leading-tight">
              Спасибо за заявку!
            </h1>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-primary/30 mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Icon name="Sparkles" size={32} className="text-primary" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Пока вы ждете...
              </h2>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Протестируйте моего <span className="text-primary font-bold">виртуального ассистента на практике</span>, чтобы понять, что вы получите у себя в бизнесе
            </p>

            <div className="space-y-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-start gap-3 text-left">
                <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg">
                  Пообщайтесь с реальным ИИ-ботом в WhatsApp
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg">
                  Посмотрите, как он отвечает на вопросы
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg">
                  Оцените скорость и качество работы
                </p>
              </div>
            </div>

            <Button 
              onClick={handleTestBot}
              size="lg" 
              className="text-base sm:text-lg md:text-xl px-8 sm:px-12 py-6 sm:py-8 neon-border animate-glow-pulse bg-[#25D366] hover:bg-[#20BA5A] text-white font-black w-full sm:w-auto"
            >
              <Icon name="MessageCircle" className="mr-3" size={24} />
              Протестировать ассистента в WhatsApp
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm sm:text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Clock" className="text-primary" size={20} />
              <span>Доступен 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={20} />
              <span>Мгновенные ответы</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={20} />
              <span>Полностью бесплатно</span>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <a href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Icon name="ArrowLeft" size={20} />
            <span className="text-base sm:text-lg">Вернуться на главную</span>
          </a>
        </div>
      </div>
    </div>
  );
}