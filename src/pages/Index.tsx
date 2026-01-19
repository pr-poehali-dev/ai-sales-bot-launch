import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Index() {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      <HeroSection />
      <ProblemSection />
      <NichesSection />
      <BenefitsSection />
      <ComparisonSection />
      <HybridSection />
      <ExpertiseSection />
      <TestDriveSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <WhatsAppWidget 
        phoneNumber="+996500113974" 
        message="Здравствуйте, хотел(а) бы узнать подробнее о чат-боте." 
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://cdn.poehali.dev/projects/ba5fe4a4-8925-4895-b042-679829051f5f/files/29b020d3-7526-4efc-bb77-15e7d270fe4a.jpg" 
          alt="" 
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-left sm:text-center space-y-6 sm:space-y-8 animate-fade-in">
          <Badge variant="outline" className="neon-border px-3 py-1.5 text-xs sm:text-sm md:text-base lg:text-lg">
            Для владельцев бизнеса в Бишкеке (трафик от 50 заявок/день)
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
            Хватит выбрасывать деньги на рекламу впустую
          </h1>
          
          <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed">
              Ваши менеджеры сливают до <span className="gradient-text font-bold">40% бюджета</span>, потому что долго отвечают, забывают перезвонить или просто теряют заявки в куче чатов.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed">
              Внедрите ИИ-систему, которая подхватывает каждого клиента за <span className="text-primary font-bold">12 секунд</span>.
            </p>
          </div>
          
          <div className="pt-4 sm:pt-8">
            <a href="#problem">
              <Button 
                size="lg" 
                className="text-xs sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-8 neon-border animate-glow-pulse bg-primary hover:bg-primary/90 text-primary-foreground font-bold w-full sm:w-auto"
              >
                <Icon name="Sparkles" className="mr-1 sm:mr-3" size={18} />
                <span className="leading-tight">Узнать подробнее</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={40} className="text-primary" />
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className="py-32 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-left sm:text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 gradient-text leading-tight">
            Как работает ваш отдел продаж, когда отвечает одновременно на 50 заявок в день
          </h2>
        </div>
        
        <div className="mb-12 flex justify-center">
          <div className="relative max-w-md w-full rounded-2xl overflow-hidden border-4 border-destructive/50">
            <img 
              src="https://cdn.poehali.dev/projects/ba5fe4a4-8925-4895-b042-679829051f5f/files/74a3985c-0414-4ee7-8a48-08251955f25b.jpg" 
              alt="Уставший менеджер за компьютером" 
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <Card className="p-4 sm:p-6 bg-destructive/10 border-2 border-destructive/50 text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-destructive mb-2">80%</div>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">времени на одни и те же вопросы</p>
          </Card>
          <Card className="p-4 sm:p-6 bg-destructive/10 border-2 border-destructive/50 text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-destructive mb-2">40%</div>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">потерянных заявок</p>
          </Card>
          <Card className="p-4 sm:p-6 bg-destructive/10 border-2 border-destructive/50 text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-destructive mb-2">15 мин</div>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">среднее время ответа</p>
          </Card>
          <Card className="p-4 sm:p-6 bg-destructive/10 border-2 border-destructive/50 text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-destructive mb-2">70%</div>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">текучка кадров за полгода</p>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Card className="p-4 sm:p-6 md:p-8 bg-card/50 backdrop-blur border-2 border-destructive/50 hover:border-destructive transition-all">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-destructive/20 rounded-lg flex-shrink-0">
                <Icon name="AlertTriangle" size={24} className="text-destructive sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Реальность</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Ваш менеджер превратился в секретаря - 80% времени уходит на вопросы: 
                  «цена?», «адрес?», «есть в наличии?».
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 sm:p-6 md:p-8 bg-card/50 backdrop-blur border-2 border-accent/50 hover:border-accent transition-all">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-accent/20 rounded-lg flex-shrink-0">
                <Icon name="TrendingDown" size={24} className="text-accent sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Последствие</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  На «дожим» и реальные продажи нет сил. Клиенты злятся из-за долгих ответов. 
                  Рекламный бюджет сливается.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function NichesSection() {
  const niches = [
    {
      niche: "Застройщики",
      action: "Отвечает по ценам, планировкам и ипотеке",
      result: "Запись на показ объекта",
      icon: "Building2"
    },
    {
      niche: "Автосалоны",
      action: "Считает Трейд-ин, подбирает комплектацию",
      result: "Запись на тест-драйв",
      icon: "Car"
    },
    {
      niche: "Фитнес-центры",
      action: "Рассказывает про залы, цены и тренеров",
      result: "Запись на пробную тренировку",
      icon: "Dumbbell"
    },
    {
      niche: "Интернет-магазины",
      action: "Помогает выбрать товар и размер",
      result: "Оформленный заказ",
      icon: "ShoppingCart"
    },
    {
      niche: "Услуги (Клиники/Бьюти)",
      action: "Консультирует по услугам и окнам в графике",
      result: "Бронирование времени (запись)",
      icon: "Calendar"
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent to-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-left sm:text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 gradient-text leading-tight">
            В каких нишах бот окупается очень быстро?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Бот не просто «болтает» — он ведет клиента за руку к целевому действию, пока тот не передумал.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {niches.map((item, i) => (
            <Card key={i} className="p-4 sm:p-6 md:p-8 bg-card/50 backdrop-blur border-2 border-primary/30 hover:border-primary transition-all">
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 items-center">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-primary/20 rounded-lg flex-shrink-0">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{item.niche}</h3>
                </div>
                
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">Что делает ИИ</p>
                  <p className="text-sm sm:text-base md:text-lg">{item.action}</p>
                </div>
                
                <div className="md:text-right">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">Результат (Цель)</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-primary">{item.result}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-left sm:text-center">
          <Card className="inline-block p-6 sm:p-8 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary neon-border mb-8">
            <p className="text-lg sm:text-xl md:text-2xl font-black">
              <span className="text-primary neon-glow">Каждый бот</span> настроен под вашу нишу и цели
            </p>
          </Card>
          <div>
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
      </div>
    </section>
  );
}

function BenefitsSection() {
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

function ComparisonSection() {
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
        
        <Card className="p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary neon-border">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">
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

function HybridSection() {
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

function ExpertiseSection() {
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
                <span className="font-bold text-primary text-base sm:text-lg md:text-xl">Автор:</span>
                <span className="text-base sm:text-lg md:text-xl"> Петр, экс-руководитель «ЭСТО Консалтинг» и действующий управляющий швейной компании «Alexandra»</span>
              </div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              <p className="text-base sm:text-lg md:text-xl">
                Знаю боли бизнеса в Бишкеке изнутри: от текучки кадров до долгих ответов, когда клиент остывает, а сотрудник не понимает этого.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl font-semibold text-primary">
                Лично проектирую логику вашего ИИ-продавца.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function TestDriveSection() {
  return (
    <section id="test-drive" className="py-32 px-6 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-left sm:text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight">
            Создадим тестовую версию вашего бота - <span className="gradient-text">испытайте его в действии</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {[
            {
              step: "1",
              icon: "FileText",
              title: "Даете описание",
              desc: "Бизнес/Instagram"
            },
            {
              step: "2",
              icon: "Brain",
              title: "Обучаем нейросеть",
              desc: "Под вашу нишу"
            },
            {
              step: "3",
              icon: "TestTube",
              title: "Тестируете бота",
              desc: "По ссылке"
            }
          ].map((item) => (
            <Card key={item.step} className="p-6 sm:p-8 bg-card/50 border-2 border-primary/30 hover:border-primary transition-all text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-black text-primary">{item.step}</span>
              </div>
              <div className="flex justify-center mb-3 sm:mb-4">
                <Icon name={item.icon as any} size={36} className="text-primary sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
        
        <Card className="p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
            Цена: <span className="text-primary text-3xl sm:text-4xl md:text-5xl">5 000 сом</span>
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
            Если результат не устроит — мы не продолжаем
          </p>
          <a 
            href="https://wa.me/996500113974?text=Здравствуйте%2C%20хотел(а)%20бы%20узнать%20подробнее%20про%20работу%20чат-бота"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="text-xs sm:text-base md:text-lg px-4 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 neon-border bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold w-full sm:w-auto"
            >
              <Icon name="MessageCircle" className="mr-1 sm:mr-3" size={18} />
              Хочу обсудить детали
            </Button>
          </a>
        </Card>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Асель К.",
      company: "Салон красоты",
      text: "За месяц количество записей выросло на 40%. Бот работает круглосуточно, клиенты довольны скоростью ответа.",
      rating: 5
    },
    {
      name: "Тимур М.",
      company: "Доставка продуктов",
      text: "Раньше теряли 30% заказов из-за долгих ответов. Теперь ИИ обрабатывает все мгновенно. Прибыль выросла на 25%.",
      rating: 5
    },
    {
      name: "Гульнара Б.",
      company: "Медицинский центр",
      text: "Освободили администраторов от рутины. Теперь они занимаются пациентами, а не отвечают на одинаковые вопросы.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent to-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-12 md:mb-16 px-4 leading-tight">
          Что говорят <span className="gradient-text">клиенты</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="p-6 sm:p-8 bg-card/50 border-2 border-primary/30 hover:border-primary transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Icon key={j} name="Star" size={20} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed text-muted-foreground">"{testimonial.text}"</p>
              <div className="border-t border-primary/30 pt-3 sm:pt-4">
                <p className="font-bold text-base sm:text-lg">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Сколько времени занимает внедрение?",
      a: "Тестовая версия готова за 1-2 дня. Полное внедрение с интеграцией в CRM — 4-5 недель."
    },
    {
      q: "Что если бот не справится с нестандартным вопросом?",
      a: "ИИ автоматически переключает на менеджера и сохраняет всю историю диалога. Ни один клиент не будет потерян."
    },
    {
      q: "Нужно ли менять CRM-систему?",
      a: "Нет, мы интегрируемся с любой существующей системой: amoCRM, Bitrix24, собственные решения."
    },
    {
      q: "Как быстро окупится инвестиция?",
      a: "В среднем 2-3 месяца за счет экономии на ЗП, увеличения конверсии и скорости обработки заявок."
    },
    {
      q: "Какая техподдержка?",
      a: "Включена в стоимость: обновления базы знаний, корректировки скриптов, консультации по оптимизации."
    },
    {
      q: "Говорит ли бот на кыргызском языке?",
      a: "Да, и на английском в том числе."
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-12 md:mb-16 px-4 leading-tight">
          Частые <span className="gradient-text">вопросы</span>
        </h2>
        
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`} 
              className="border-2 border-primary/30 rounded-lg px-4 sm:px-6 bg-card/50"
            >
              <AccordionTrigger className="text-base sm:text-lg md:text-xl font-bold hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-secondary/10 to-transparent">
      <div className="container mx-auto max-w-4xl text-center">
        <Badge variant="outline" className="neon-border px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
          Ограниченное предложение
        </Badge>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 sm:mb-8 px-4 leading-tight">
          Берем только <span className="gradient-text">3 проекта</span> в месяц
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Чтобы гарантировать качество внедрения, я ограничиваю количество заказов.
        </p>
        
        <a 
          href="https://wa.me/996500113974?text=Здравствуйте%2C%20хотел(а)%20бы%20заказать%20тест-драйв%20чат-бота%20за%205000%20сом"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button 
            size="lg" 
            className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 lg:py-10 neon-border animate-glow-pulse bg-primary hover:bg-primary/90 text-primary-foreground font-black w-full sm:w-auto"
          >
            <Icon name="Rocket" className="mr-1 sm:mr-3 md:mr-4" size={20} />
            <span className="leading-tight">ЗАБРОНИРОВАТЬ ТЕСТ-ДРАЙВ ЗА 5000 СОМ</span>
          </Button>
        </a>
        
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-muted-foreground px-4">
          <div className="flex items-center justify-center gap-2">
            <Icon name="Clock" className="text-primary" size={20} />
            <span>Быстрый запуск</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Icon name="Users" className="text-primary" size={20} />
            <span>Личная поддержка</span>
          </div>
        </div>
      </div>
    </section>
  );
}