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

interface TestDriveSectionProps {
  setIsFormOpen: (open: boolean) => void;
}

export function TestDriveSection({ setIsFormOpen }: TestDriveSectionProps) {
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
          <Button 
            size="lg" 
            onClick={() => setIsFormOpen(true)}
            className="text-[11px] xs:text-xs sm:text-base md:text-lg px-3 xs:px-4 sm:px-8 md:px-10 py-3 xs:py-4 sm:py-5 md:py-6 neon-border bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold w-full sm:w-auto cursor-pointer"
          >
            <Icon name="MessageCircle" className="mr-1 sm:mr-3" size={16} />
            <span className="whitespace-normal">Хочу обсудить детали</span>
          </Button>
        </Card>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
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

export function FAQSection() {
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

interface FinalCTASectionProps {
  setIsFormOpen: (open: boolean) => void;
}

export function FinalCTASection({ setIsFormOpen }: FinalCTASectionProps) {
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
        
        <Button 
          size="lg" 
          onClick={() => setIsFormOpen(true)}
          className="text-[10px] xs:text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl px-3 xs:px-4 sm:px-8 md:px-12 lg:px-16 py-3 xs:py-4 sm:py-6 md:py-8 lg:py-10 neon-border animate-glow-pulse bg-primary hover:bg-primary/90 text-primary-foreground font-black w-full sm:w-auto cursor-pointer"
        >
          <Icon name="Rocket" className="mr-1 sm:mr-3 md:mr-4" size={16} />
          <span className="leading-tight whitespace-normal">ЗАБРОНИРОВАТЬ ТЕСТ-ДРАЙВ ЗА 5000 СОМ</span>
        </Button>
        
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-muted-foreground px-4">
          <div className="flex items-center justify-center gap-2">
            <Icon name="Clock" className="text-primary" size={20} />
            <span>Быстрый запуск</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Icon name="Users" className="text-primary" size={20} />
            <span>Личная поддержка</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Icon name="Shield" className="text-primary" size={20} />
            <span>Гарантия качества</span>
          </div>
        </div>
      </div>
    </section>
  );
}
