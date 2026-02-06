import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  setIsFormOpen: (open: boolean) => void;
}

export function HeroSection({ setIsFormOpen }: HeroSectionProps) {
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
            <Button 
              size="lg" 
              onClick={() => setIsFormOpen(true)}
              className="text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-xl px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 py-3 xs:py-4 sm:py-5 md:py-6 lg:py-8 neon-border animate-glow-pulse bg-primary hover:bg-primary/90 text-primary-foreground font-bold w-full sm:w-auto cursor-pointer"
            >
              <Icon name="Sparkles" className="mr-1 sm:mr-3" size={16} />
              <span className="leading-tight whitespace-normal">Узнать подробнее</span>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={40} className="text-primary" />
      </div>
    </section>
  );
}

export function ProblemSection() {
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

export function NichesSection() {
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
      niche: "Медицинские центры",
      action: "Отвечает по услугам и ценам",
      result: "Запись к врачу",
      icon: "Stethoscope"
    },
    {
      niche: "Салоны красоты",
      action: "Консультирует по процедурам и свободному времени",
      result: "Онлайн-запись",
      icon: "Sparkles"
    },
    {
      niche: "Рестораны/Кафе",
      action: "Принимает заказы, консультирует по меню",
      result: "Бронь столика",
      icon: "Utensils"
    },
    {
      niche: "Фитнес-клубы",
      action: "Рассказывает про абонементы и график",
      result: "Пробная тренировка",
      icon: "Dumbbell"
    }
  ];

  return (
    <section id="niches" className="py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-12 md:mb-16 px-4 leading-tight">
          Для каких <span className="gradient-text">ниш</span> это подходит?
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {niches.map((niche, index) => (
            <Card key={index} className="p-6 sm:p-8 bg-card/50 backdrop-blur border-2 border-primary/30 hover:border-primary transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Icon name={niche.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{niche.niche}</h3>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{niche.action}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="ArrowRight" size={18} className="text-secondary mt-1 flex-shrink-0" />
                  <p className="font-semibold text-secondary">{niche.result}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
