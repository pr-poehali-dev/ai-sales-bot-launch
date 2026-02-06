import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export function BenefitsSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-secondary/10 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-12 md:mb-16 px-4 leading-tight">
          Сколько вы теряете на <span className="gradient-text">«ручном» труде?</span>
        </h2>
        
        <div className="overflow-x-auto -mx-6 px-6">
          <div className="min-w-[600px] md:min-w-0">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="p-3 sm:p-4 md:p-6 bg-card/30 rounded-lg">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-center">Параметры</h3>
              </div>
              <div className="p-3 sm:p-4 md:p-6 bg-destructive/10 rounded-lg border-2 border-destructive/50">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-center text-destructive">Менеджер</h3>
              </div>
              <div className="p-3 sm:p-4 md:p-6 bg-primary/10 rounded-lg border-2 border-primary/50 neon-border">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-center text-primary">ИИ</h3>
              </div>
            </div>
            
            {[
              {
                param: "Расходы в месяц",
                human: "~56 000 сом (ЗП + налоги + офис)",
                ai: "~29 000 сом (сервис + поддержка)"
              },
              {
                param: "График",
                human: "10 часов, выходные, больничные",
                ai: "24/7 без пауз"
              },
              {
                param: "Скорость ответа",
                human: "5–15 минут",
                ai: "10 секунд"
              },
              {
                param: "Человеческий фактор",
                human: "Увольняется, забывает, устает",
                ai: "Неизменно вежлив и точен"
              }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-2 md:mb-3">
                <div className="p-3 sm:p-4 md:p-6 bg-card/50 rounded-lg flex items-center">
                  <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">{row.param}</p>
                </div>
                <div className="p-3 sm:p-4 md:p-6 bg-card/30 rounded-lg flex items-center">
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base">{row.human}</p>
                </div>
                <div className="p-3 sm:p-4 md:p-6 bg-primary/5 rounded-lg flex items-center border border-primary/30">
                  <p className="text-primary font-semibold text-xs sm:text-sm md:text-base">{row.ai}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 text-center px-4">
          <Card className="inline-block p-4 sm:p-6 md:p-8 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight">
              <span className="text-primary neon-glow">Нейросеть</span> в 2 раза дешевле и в 10 раз быстрее
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  return (
    <section className="py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-6 md:mb-8 px-4 leading-tight">
          Наша цена — <span className="gradient-text">От 60 тыс сом</span> в зависимости от сложности и функционала
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-muted-foreground mb-12 md:mb-16 px-4 max-w-4xl mx-auto">
          В городе вы можете сделать бота и за 30 000 сом, но почему у нас дороже?
        </p>
        
        <div className="mb-12 md:mb-16">
          <Card className="p-6 sm:p-8 md:p-10 bg-card/50 border-2 border-destructive/50">
            <p className="text-base sm:text-lg md:text-xl text-left sm:text-center mb-6 md:mb-8 font-semibold">
              На рынке полно предложений сделать бота за копейки. Но вы получите «робота», который:
            </p>
            
            <ul className="space-y-4 sm:space-y-5 max-w-3xl mx-auto">
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-2 bg-destructive/20 rounded-lg">
                  <Icon name="XCircle" size={24} className="text-destructive" />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  По два раза здоровается и общается как автоответчик, а не продавец
                </p>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-2 bg-destructive/20 rounded-lg">
                  <Icon name="XCircle" size={24} className="text-destructive" />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  Тупит на простых вопросах и бесит ваших клиентов
                </p>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-2 bg-destructive/20 rounded-lg">
                  <Icon name="XCircle" size={24} className="text-destructive" />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  Если клиент напишет чуть сложнее — бот «зависает»
                </p>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-2 bg-destructive/20 rounded-lg">
                  <Icon name="XCircle" size={24} className="text-destructive" />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  Действует по сценарию, который не заинтересовывает клиента
                </p>
              </li>
            </ul>
            
            <div className="mt-8 md:mt-10 p-4 sm:p-6 bg-destructive/10 border-2 border-destructive/50 rounded-lg">
              <p className="text-base sm:text-lg md:text-xl font-bold text-center">
                В итоге: <span className="text-destructive">Клиент видит, что с ним говорит глупая программа, и уходит.</span> Вы потеряли в разы больше, чем сэкономили.
              </p>
            </div>
          </Card>
        </div>
        
        <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/50 neon-border">
          <div className="text-left sm:text-center mb-6 md:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-3 sm:mb-4">
              <span className="text-primary neon-glow">Моя система</span>
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              это «Цифровой клон» вашего продавца, работающего по инструкции:
            </p>
          </div>
          
          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 p-3 sm:p-4 bg-primary/20 rounded-lg">
                <Icon name="MessageCircle" size={32} className="text-primary sm:w-10 sm:h-10" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3">
                  Живое общение
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Он общается максимально близко к человеческому, понимает сленг и контекст, не беся клиентов.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 p-3 sm:p-4 bg-primary/20 rounded-lg">
                <Icon name="Brain" size={32} className="text-primary sm:w-10 sm:h-10" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3">
                  Полноценный диалог
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Он <span className="font-bold text-foreground">НЕ работает</span> из серии "Здравствуйте, оставьте номер телефона, с вами свяжутся и подробно проконсультируют", а ведет полноценный диалог по скрипту продаж, даже делает просчеты и проверяет наличие товара в базе данных, если необходимо
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 p-3 sm:p-4 bg-primary/20 rounded-lg">
                <Icon name="BellRing" size={32} className="text-primary sm:w-10 sm:h-10" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3">
                  Дожим
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Он сам вежливо напомнит о себе, если клиент пропал.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 p-3 sm:p-4 bg-primary/20 rounded-lg">
                <Icon name="Network" size={32} className="text-primary sm:w-10 sm:h-10" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3">
                  Полноценная схема взаимодействия с живыми сотрудниками
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Передает уведомления через Telegram или CRM, чтобы ваши менеджеры далее связались с клиентом и закрыли сделку
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 p-3 sm:p-4 bg-primary/20 rounded-lg">
                <Icon name="Database" size={32} className="text-primary sm:w-10 sm:h-10" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3">
                  Автоматическое ведение CRM
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Заполняет поля CRM и передвигает сделку на этапы продаж без напоминаний от руководителя
                </p>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="mt-12 md:mt-16 text-center">
          <a href="#test-drive">
            <Button 
              size="lg" 
              className="text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 neon-border animate-glow-pulse bg-primary hover:bg-primary/90 text-primary-foreground font-bold w-full sm:w-auto"
            >
              <Icon name="Zap" className="mr-2 sm:mr-3" size={20} />
              Хочу протестировать
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
