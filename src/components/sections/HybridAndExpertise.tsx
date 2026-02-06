import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export function HybridSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent via-secondary/10 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-12 md:mb-16 px-4 leading-tight">
          ИИ не заменяет людей, <br className="hidden sm:block" />он дает им <span className="gradient-text">«суперсилу»</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Card className="p-6 sm:p-8 md:p-10 bg-primary/10 border-2 border-primary">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-primary/20 rounded-full">
                <Icon name="Bot" size={36} className="text-primary sm:w-12 sm:h-12" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">ИИ (1-я линия)</h3>
              </div>
            </div>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
              <li className="flex items-start gap-3">
                <Icon name="Zap" className="mt-1 text-primary" />
                <span>Моментальный перехват</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Filter" className="mt-1 text-primary" />
                <span>Квалификация</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MessageSquare" className="mt-1 text-primary" />
                <span>Ответы на FAQ</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-6 sm:p-8 md:p-10 bg-secondary/10 border-2 border-secondary">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-secondary/20 rounded-full">
                <Icon name="User" size={36} className="text-secondary sm:w-12 sm:h-12" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">Менеджер (Закрытие)</h3>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Получает готовое досье и закрывает <span className="text-secondary font-bold text-2xl sm:text-3xl">5 сделок</span> вместо <span className="line-through text-muted-foreground">3</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function ExpertiseSection() {
  return (
    <section className="py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-left sm:text-center mb-12">
          <Badge variant="outline" className="neon-border px-4 py-1.5 text-sm sm:text-base lg:text-lg mb-6">
            Экспертность
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 md:mb-8 leading-tight">
            Автоматизация от <span className="gradient-text">бизнесмена</span>, <br className="hidden sm:block" />а не от программиста
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-primary/50 neon-border">
              <img 
                src="https://cdn.poehali.dev/files/Сжать.jpg" 
                alt="Петр — автор системы"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-card to-card/50 border-2 border-primary/50">
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
              <div>
                <p className="text-muted-foreground mb-3 sm:mb-4">
                  Меня зовут Петр. Я больше 10 лет:
                </p>
                <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Консультирую по бизнес-процессам</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Внедряю автоматизацию</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Занимаюсь отделами продаж</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 sm:p-6 bg-primary/10 rounded-lg border-2 border-primary/30">
                <p className="font-bold text-primary text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                  Я не просто настрою бота
                </p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Я проанализирую ваши процессы, покажу, как встроить ИИ в работу менеджеров 
                  и настрою систему под вашу нишу.
                </p>
              </div>
              
              <div className="p-4 sm:p-6 bg-card rounded-lg border-2 border-primary/30">
                <p className="text-muted-foreground text-sm sm:text-base">
                  <span className="text-primary neon-glow">Каждый бот</span> настроен под вашу нишу и цели
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
