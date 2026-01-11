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

export default function Index() {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <ComparisonSection />
      <HybridSection />
      <ExpertiseSection />
      <TestDriveSection />
      <InvestmentSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://cdn.poehali.dev/projects/ba5fe4a4-8925-4895-b042-679829051f5f/files/29b020d3-7526-4efc-bb77-15e7d270fe4a.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <Badge variant="outline" className="neon-border px-6 py-2 text-lg">
            Для владельцев бизнеса в Бишкеке (трафик от 50 заявок/день)
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Перестаньте платить менеджерам за{" "}
            <span className="gradient-text">«работу автоответчиком»</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto">
            Платите за <span className="text-primary font-bold">ПРОДАЖИ</span>
          </p>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
            Внедрите ИИ-ассистента для первичной обработки 100% обращений. 
            Ваша команда работает только с «горячими» клиентами.
          </p>
          
          <div className="pt-8">
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 neon-border animate-glow-pulse bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
            >
              <Icon name="Sparkles" className="mr-3" size={28} />
              Получить тестовую версию за 5 000 сом
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

function ProblemSection() {
  return (
    <section className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 gradient-text">
            Почему 50 заявок в день — это ловушка, съедающая прибыль?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/50 backdrop-blur border-2 border-destructive/50 hover:border-destructive transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-destructive/20 rounded-lg">
                <Icon name="AlertTriangle" size={32} className="text-destructive" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Реальность</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Топ-менеджеры превратились в секретарей. 80% времени уходит на вопросы: 
                  «цена?», «адрес?», «есть в наличии?».
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 bg-card/50 backdrop-blur border-2 border-accent/50 hover:border-accent transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/20 rounded-lg">
                <Icon name="TrendingDown" size={32} className="text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Последствие</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
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

function BenefitsSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-secondary/10 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
          Сколько вы теряете на <span className="gradient-text">«ручном» труде?</span>
        </h2>
        
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="p-6 bg-card/30 rounded-lg">
                <h3 className="text-xl font-bold text-center">Параметры</h3>
              </div>
              <div className="p-6 bg-destructive/10 rounded-lg border-2 border-destructive/50">
                <h3 className="text-xl font-bold text-center text-destructive">Менеджер (человек)</h3>
              </div>
              <div className="p-6 bg-primary/10 rounded-lg border-2 border-primary/50 neon-border">
                <h3 className="text-xl font-bold text-center text-primary">ИИ-помощник</h3>
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
              <div key={i} className="grid grid-cols-3 gap-4 mb-3">
                <div className="p-6 bg-card/50 rounded-lg flex items-center">
                  <p className="font-semibold text-lg">{row.param}</p>
                </div>
                <div className="p-6 bg-card/30 rounded-lg flex items-center">
                  <p className="text-muted-foreground">{row.human}</p>
                </div>
                <div className="p-6 bg-primary/5 rounded-lg flex items-center border border-primary/30">
                  <p className="text-primary font-semibold">{row.ai}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary">
            <p className="text-3xl font-black">
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
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-8">
          Почему наше решение стоит <span className="gradient-text">85 000 сом</span>
        </h2>
        <p className="text-2xl text-center text-muted-foreground mb-16">(а не 30 000)</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-10 bg-card/30 border-2 border-muted hover:border-muted/50 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <Icon name="XCircle" size={40} className="text-destructive" />
              <h3 className="text-3xl font-bold">Дешевый бот (30к)</h3>
            </div>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <Icon name="Minus" className="mt-1 text-destructive" />
                <span>Шаблонные фразы</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Minus" className="mt-1 text-destructive" />
                <span>Тупит на сложных вопросах</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Minus" className="mt-1 text-destructive" />
                <span>Бесит клиентов фразой «оставьте номер, вам перезвонят»</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-10 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary neon-border">
            <div className="flex items-center gap-4 mb-6">
              <Icon name="CheckCircle2" size={40} className="text-primary" />
              <h3 className="text-3xl font-bold text-primary">Наш ИИ-клон (85к)</h3>
            </div>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <Icon name="Check" className="mt-1 text-primary" />
                <div>
                  <span className="font-bold text-primary">Живой диалог:</span>
                  <span className="text-muted-foreground"> Понимает контекст и сленг</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="mt-1 text-primary" />
                <div>
                  <span className="font-bold text-primary">Экспертность:</span>
                  <span className="text-muted-foreground"> Считает сметы, проверяет остатки в базе, ведет клиента по скрипту до сделки</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="mt-1 text-primary" />
                <div>
                  <span className="font-bold text-primary">Автономность:</span>
                  <span className="text-muted-foreground"> Сам «дожимает» пропавших клиентов и заполняет CRM без участия человека</span>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

function HybridSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent via-secondary/10 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
          ИИ не заменяет людей, <br />он дает им <span className="gradient-text">«суперсилу»</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="p-10 bg-primary/10 border-2 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/20 rounded-full">
                <Icon name="Bot" size={48} className="text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">ИИ (1-я линия)</h3>
              </div>
            </div>
            <ul className="space-y-4 text-lg">
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
          
          <Card className="p-10 bg-secondary/10 border-2 border-secondary">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-secondary/20 rounded-full">
                <Icon name="User" size={48} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-secondary">Менеджер (Закрытие)</h3>
              </div>
            </div>
            <p className="text-xl leading-relaxed">
              Получает готовое досье и закрывает <span className="text-secondary font-bold text-3xl">5 сделок</span> вместо <span className="line-through text-muted-foreground">3</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="neon-border px-6 py-2 text-lg mb-6">
            Экспертность
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Автоматизация от <span className="gradient-text">бизнесмена</span>, <br />а не от программиста
          </h2>
        </div>
        
        <Card className="p-12 bg-gradient-to-br from-card to-card/50 border-2 border-primary/50">
          <div className="space-y-6 text-lg leading-relaxed">
            <div>
              <span className="font-bold text-primary text-xl">Автор:</span>
              <span className="text-xl"> Петр, экс-руководитель «ЭСТО Консалтинг» и «Alexandra»</span>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <p className="text-xl">
              <span className="font-bold text-secondary">Подход:</span> Я внедряю не код, а систему продаж. 
              Знаю боли бизнеса в Бишкеке изнутри: от текучки кадров до слива лидов.
            </p>
            
            <p className="text-xl font-semibold text-primary">
              Лично проектирую логику вашего ИИ-продавца.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function TestDriveSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Посмотрите на своего <span className="gradient-text">«Цифрового двойника»</span> <br />в деле до основной оплаты
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
            <Card key={item.step} className="p-8 bg-card/50 border-2 border-primary/30 hover:border-primary transition-all text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                <span className="text-3xl font-black text-primary">{item.step}</span>
              </div>
              <div className="flex justify-center mb-4">
                <Icon name={item.icon as any} size={48} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-lg text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
        
        <Card className="p-12 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary text-center">
          <p className="text-3xl font-bold mb-6">
            Цена: <span className="text-primary text-5xl">5 000 сом</span>
          </p>
          <p className="text-xl text-muted-foreground">
            Если результат не устроит — мы не продолжаем
          </p>
        </Card>
      </div>
    </section>
  );
}

function InvestmentSection() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-12">
          Инвестиция в <span className="gradient-text">актив</span>
        </h2>
        
        <Card className="p-12 bg-card/50 border-2 border-secondary/50">
          <h3 className="text-3xl font-bold mb-8 text-secondary">Окупаемость за 3 месяца</h3>
          
          <div className="space-y-6 text-xl leading-relaxed">
            <p>
              Вы платите <span className="text-primary font-bold text-3xl">85 000 сом</span> один раз 
              за бессмертного сотрудника.
            </p>
            
            <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
            
            <p className="text-2xl font-semibold">
              Он не унесет базу, не попросит отпуск и будет приносить деньги <span className="text-secondary">годами</span>.
            </p>
          </div>
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
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
          Что говорят <span className="gradient-text">клиенты</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="p-8 bg-card/50 border-2 border-primary/30 hover:border-primary transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Icon key={j} name="Star" size={20} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed text-muted-foreground">"{testimonial.text}"</p>
              <div className="border-t border-primary/30 pt-4">
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
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
      a: "Тестовая версия готова за 3-5 дней. Полное внедрение с интеграцией в CRM — 2-3 недели."
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
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
          Частые <span className="gradient-text">вопросы</span>
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`} 
              className="border-2 border-primary/30 rounded-lg px-6 bg-card/50"
            >
              <AccordionTrigger className="text-xl font-bold hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
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
        <Badge variant="outline" className="neon-border px-6 py-3 text-xl mb-8">
          Ограниченное предложение
        </Badge>
        
        <h2 className="text-4xl md:text-6xl font-black mb-8">
          Берем только <span className="gradient-text">3 проекта</span> в месяц
        </h2>
        
        <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Чтобы гарантировать качество внедрения, я ограничиваю количество заказов.
        </p>
        
        <Button 
          size="lg" 
          className="text-2xl px-16 py-10 neon-border animate-glow-pulse bg-primary hover:bg-primary/90 text-primary-foreground font-black"
        >
          <Icon name="Rocket" className="mr-4" size={32} />
          ЗАБРОНИРОВАТЬ ТЕСТ-ДРАЙВ ЗА 5000 СОМ
        </Button>
        
        <div className="mt-16 flex justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" />
            <span>Гарантия возврата</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Clock" className="text-primary" />
            <span>Быстрый запуск</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Users" className="text-primary" />
            <span>Личная поддержка</span>
          </div>
        </div>
      </div>
    </section>
  );
}