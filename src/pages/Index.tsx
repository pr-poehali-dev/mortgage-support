import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [propertyPrice, setPropertyPrice] = useState(5000000);
  const [downPayment, setDownPayment] = useState(20);
  const [loanTerm, setLoanTerm] = useState(20);
  const [mortgageProgram, setMortgageProgram] = useState('family');

  const programs = {
    family: { rate: 6, name: 'Семейная ипотека' },
    farEast: { rate: 2, name: 'Дальневосточная ипотека' },
    rural: { rate: 3, name: 'Сельская ипотека' },
    medical: { rate: 2, name: 'Для врачей и педагогов' },
  };

  const calculateMortgage = () => {
    const loanAmount = propertyPrice * (1 - downPayment / 100);
    const monthlyRate = programs[mortgageProgram as keyof typeof programs].rate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    const totalPayment = monthlyPayment * numberOfPayments;
    const overpayment = totalPayment - loanAmount;
    
    return {
      monthlyPayment: Math.round(monthlyPayment),
      overpayment: Math.round(overpayment),
      loanAmount: Math.round(loanAmount),
    };
  };

  const result = calculateMortgage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    
    toast({
      title: "Заявка отправлена!",
      description: `Спасибо, ${name}! Мы свяжемся с вами в течение 30 минут.`,
    });
    
    (e.target as HTMLFormElement).reset();
  };

  const openTelegram = () => {
    window.open('https://t.me/Nastasssl', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-[10%] left-[5%] float-animation-1 text-8xl">🥭</div>
        <div className="absolute top-[20%] right-[10%] float-animation-2 text-7xl">💰</div>
        <div className="absolute top-[40%] left-[15%] float-animation-3 text-6xl font-bold text-primary">2%</div>
        <div className="absolute top-[60%] right-[20%] float-animation-4 text-7xl">🏦</div>
        <div className="absolute bottom-[20%] left-[25%] float-animation-5 text-8xl">🥭</div>
        <div className="absolute bottom-[30%] right-[15%] float-animation-6 text-6xl">💳</div>
        <div className="absolute top-[70%] left-[40%] float-animation-1 text-7xl">🔑</div>
        <div className="absolute top-[15%] right-[30%] float-animation-2 text-6xl font-bold text-accent">6%</div>
        <div className="absolute bottom-[40%] left-[60%] float-animation-3 text-7xl">🥭</div>
        <div className="absolute top-[50%] right-[5%] float-animation-4 text-6xl">💵</div>
        <div className="absolute bottom-[15%] left-[70%] float-animation-5 text-7xl">🏠</div>
        <div className="absolute top-[80%] right-[40%] float-animation-6 text-6xl font-bold text-primary">3%</div>
      </div>
      <div className="relative z-10">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/a4a9e5b6-b1a0-494c-ad84-e97aa91e5da1.png" 
              alt="МангоДом" 
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#mortgage-programs" className="text-sm hover:text-primary transition-colors">Программы</a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">Как работаем</a>
            <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
            <a href="#calculator" className="text-sm hover:text-primary transition-colors">Калькулятор</a>
            <Button onClick={openTelegram} size="sm" className="bg-gradient-to-r from-primary to-accent hover-gradient-shift">Оставить заявку</Button>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4 relative overflow-hidden bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Одобрение в 96% случаев — даже после отказа банков
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Получите ипотеку под <span className="text-primary">2-6%</span> годовых
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Подбираем лучшие условия кредитования для молодых семей, медработников, учителей и участников СВО во Владивостоке и ДФО
              </p>
              <div className="grid gap-4 mb-8">
                {[
                  'Ставка от 2% по льготным программам',
                  'Работаем с любой кредитной историей',
                  'Полное сопровождение сделки',
                  'Бесплатная консультация ипотечного брокера'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Icon name="CheckCircle" className="text-accent" size={20} />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button onClick={openTelegram} size="lg" className="w-full md:w-auto bg-gradient-to-r from-primary to-accent hover-gradient-shift transition-all">
                Получить одобрение за 24 часа
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/2b431a4c-be1e-42c3-bd8e-bc644ad1fd78.jpg" 
                alt="Ипотечный брокер" 
                className="rounded-2xl shadow-2xl w-full hover-scale object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pain" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Почему банки отказывают в ипотеке — и вы продолжаете переплачивать за аренду
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Вы работаете, платите налоги, мечтаете о своей квартире. Подаете заявку на ипотеку — и получаете отказ. «Недостаточный доход», «плохая кредитная история», «не подходите под программу».
          </p>
          <Card className="bg-primary/5 border-primary/20 mb-6">
            <CardContent className="pt-6">
              <p className="text-sm italic">
                <Icon name="AlertCircle" className="inline mr-2 text-primary" size={18} />
                Семья Ивановых из Владивостока 3 года снимала двухкомнатную квартиру и переплатила арендодателю <strong>1 260 000 рублей</strong> — почти весь первоначальный взнос по ипотеке.
              </p>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: 'TrendingDown', title: 'Низкий доход', desc: 'Банки завышают требования' },
              { icon: 'FileX', title: 'Плохая КИ', desc: 'Одна просрочка блокирует одобрение' },
              { icon: 'FileQuestion', title: 'Документы', desc: 'Сложные требования к справкам' }
            ].map((item, i) => (
              <Card key={i} className="text-center hover-scale">
                <CardContent className="pt-6">
                  <Icon name={item.icon} className="mx-auto mb-4 text-primary" size={40} />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 font-semibold">
            7 из 10 заявок на ипотеку получают отказ при самостоятельном обращении.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Сколько вы теряете, откладывая решение ипотечного вопроса
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="text-purple-600">Аренда 5 лет</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4 blink-gradient">2 100 000 ₽</div>
                <p className="text-sm text-muted-foreground">И останетесь ни с чем</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="X" size={16} className="text-destructive" />
                    <span>Никакого имущества</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="X" size={16} className="text-destructive" />
                    <span>Нет накоплений</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="X" size={16} className="text-destructive" />
                    <span>Зависимость от арендодателя</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-accent/50 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-accent">Ипотека 5 лет</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4 text-accent">30% выплачено</div>
                <p className="text-sm text-muted-foreground">Вы владелец квартиры</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Своя недвижимость</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Рост стоимости жилья</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Финансовая независимость</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 font-semibold">
            Цены на жилье в ДФО растут в среднем на 8-12% ежегодно.
          </p>
        </div>
      </section>

      <section id="mortgage-programs" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Льготные программы ипотеки 2025
          </h2>
          <p className="text-center text-muted-foreground mb-12">Работаем со всеми государственными программами</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Семейная ипотека',
                rate: 'от 6%',
                icon: 'Users',
                conditions: 'Семьи с детьми до 6 лет. До 12 млн, до 30 лет.',
                savings: 'Экономия до 4 млн ₽'
              },
              {
                title: 'Дальневосточная',
                rate: '2%',
                icon: 'MapPin',
                conditions: 'Жители ДФО до 35 лет. До 6-9 млн, до 20 лет.',
                savings: 'Экономия до 6 млн ₽'
              },
              {
                title: 'Сельская ипотека',
                rate: '3%',
                icon: 'Home',
                conditions: 'Жильё в сельской местности. До 5 млн, до 25 лет.',
                savings: 'Экономия до 3 млн ₽'
              },
              {
                title: 'Врачам и педагогам',
                rate: 'от 2%',
                icon: 'GraduationCap',
                conditions: 'Медработники и учителя. Особые условия.',
                savings: 'Экономия до 5 млн ₽'
              }
            ].map((program, i) => (
              <Card key={i} className="hover-scale hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={program.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">{program.rate}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{program.conditions}</p>
                  <div className="bg-accent/10 text-accent text-xs font-semibold px-3 py-2 rounded-lg inline-block">
                    {program.savings}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 px-4 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Как мы работаем
          </h2>
          <p className="text-center text-muted-foreground mb-12">Простой процесс в 5 шагов</p>
          <div className="space-y-8">
            {[
              { icon: 'MessageSquare', title: 'Бесплатная консультация', desc: 'Анализируем вашу ситуацию и подбираем оптимальную программу' },
              { icon: 'FileText', title: 'Подготовка документов', desc: 'Собираем и проверяем все необходимые справки' },
              { icon: 'Send', title: 'Подача заявок', desc: 'Отправляем заявку одновременно в 5-10 банков' },
              { icon: 'CheckCircle', title: 'Одобрение', desc: 'Получаем одобрение и резервируем квартиру' },
              { icon: 'Key', title: 'Сделка', desc: 'Оформляем сделку и передаём ключи' }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={step.icon} className="text-primary" size={24} />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-center text-muted-foreground mb-12">2 400+ довольных семей</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                author: 'Молодая семья',
                text: 'Думали, ипотека нам не светит. Одобрение под 6% за 2 дня! Теперь у детей своя комната.',
                rating: 5
              },
              {
                author: 'Врач-терапевт, 29 лет',
                text: 'Ребята подобрали идеальные условия, ставку 2%, оформили документы. Переплата в 3 раза меньше.',
                rating: 5
              },
              {
                author: 'Участник СВО, 34 года',
                text: 'Брокер разобрался со всеми справками за неделю. Одобрили 5 млн под 2%.',
                rating: 5
              }
            ].map((review, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Icon key={j} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                    ))}
                  </div>
                  <p className="text-sm mb-4 italic">"{review.text}"</p>
                  <p className="text-sm font-semibold text-primary">— {review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16 px-4 bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Калькулятор ипотеки
          </h2>
          <p className="text-center text-muted-foreground mb-12">Рассчитайте ваш ежемесячный платёж</p>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-8">
                <div>
                  <Label className="text-base mb-4 block">Стоимость квартиры: <span className="font-bold text-primary">{propertyPrice.toLocaleString('ru-RU')} ₽</span></Label>
                  <Slider 
                    value={[propertyPrice]} 
                    onValueChange={([value]) => setPropertyPrice(value)}
                    min={2000000}
                    max={15000000}
                    step={100000}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label className="text-base mb-4 block">Первоначальный взнос: <span className="font-bold text-primary">{downPayment}%</span></Label>
                  <Slider 
                    value={[downPayment]} 
                    onValueChange={([value]) => setDownPayment(value)}
                    min={10}
                    max={50}
                    step={5}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-base mb-2 block">Программа ипотеки</Label>
                  <Select value={mortgageProgram} onValueChange={setMortgageProgram}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family">Семейная (6%)</SelectItem>
                      <SelectItem value="farEast">Дальневосточная (2%)</SelectItem>
                      <SelectItem value="rural">Сельская (3%)</SelectItem>
                      <SelectItem value="medical">Для врачей/педагогов (2%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base mb-4 block">Срок кредита: <span className="font-bold text-primary">{loanTerm} лет</span></Label>
                  <Slider 
                    value={[loanTerm]} 
                    onValueChange={([value]) => setLoanTerm(value)}
                    min={5}
                    max={30}
                    step={1}
                    className="mt-2"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4 pt-6 border-t">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Ежемесячный платёж</div>
                    <div className="text-2xl font-bold text-primary">{result.monthlyPayment.toLocaleString('ru-RU')} ₽</div>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Сумма кредита</div>
                    <div className="text-2xl font-bold text-accent">{result.loanAmount.toLocaleString('ru-RU')} ₽</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Переплата</div>
                    <div className="text-2xl font-bold">{result.overpayment.toLocaleString('ru-RU')} ₽</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Какие документы нужны для ипотеки?',
                a: 'Паспорт, СНИЛС, справка о доходах, трудовая книжка/договор, для льгот — дополнительные справки. Поможем собрать все!'
              },
              {
                q: 'Если уже был отказ, реально ли одобрение?',
                a: 'Да! Каждый банк свои критерии. 96% наших клиентов получают одобрение даже после отказа.'
              },
              {
                q: 'Сколько стоят услуги?',
                a: 'Первая консультация бесплатно. Основная оплата — только после одобрения, все условия в договоре.'
              },
              {
                q: 'Сроки одобрения?',
                a: 'Обычно 24-48 часов — предварительно; финальное одобрение — до 7 дней.'
              },
              {
                q: 'Можно ли с плохой кредитной историей?',
                a: 'Да, есть банки, работающие с неидеальной кредитной историей. Главное — отсутствие активных просрочек.'
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact-form" className="py-16 px-4 bg-gradient-to-br from-orange-100 via-yellow-100 to-orange-50">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 mx-auto shadow-md">
                Акция до конца месяца!
              </div>
              <CardTitle className="text-3xl mb-2">
                Не откладывайте мечту о своем жилье
              </CardTitle>
              <CardDescription className="text-base">
                Получите бесплатную консультацию и PDF-гайд "10 ошибок при оформлении ипотеки"
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" name="name" placeholder="Иван Иванов" required className="mt-2" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+7 (999) 123-45-67" required className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="program">Программа ипотеки</Label>
                  <Select name="program">
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Выберите программу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family">Семейная</SelectItem>
                      <SelectItem value="farEast">Дальневосточная</SelectItem>
                      <SelectItem value="rural">Сельская</SelectItem>
                      <SelectItem value="medical">Для врачей/педагогов</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox id="consent" required />
                  <Label htmlFor="consent" className="text-sm cursor-pointer leading-relaxed">
                    Я согласен на обработку персональных данных в соответствии с 152-ФЗ
                  </Label>
                </div>

                <Button type="button" onClick={openTelegram} size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover-gradient-shift transition-all">
                  Получить консультацию бесплатно
                </Button>

                <div className="flex items-center justify-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Shield" className="text-accent" size={20} />
                    <span className="text-sm">Безопасно</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" className="text-accent" size={20} />
                    <span className="text-sm">Ответ за 30 мин</span>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-lg opacity-70">Более 1200 семей уже получили ипотеку с нашей помощью</p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 mb-12 max-w-3xl mx-auto">
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-lg">
                    AP
                  </div>
                  <div>
                    <h4 className="font-semibold">Alina Perm</h4>
                    <div className="flex gap-1 text-yellow-500">
                      {'⭐'.repeat(5)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-80 mb-3">
                  "Читаю ниже столько восторженных отзывов, и это абсолютно заслужено! Наша сделка по ипотеке была не простая, и нам помогло знание своего дела Анастасии и ее желание браться за задачи со звездочками🔝
                  <br/><br/>
                  По сделке: все было структурно, сложная ипотечно-банковская информация переводилась в идеальном синхронном переводе и приятным голосом 😉
                  <br/><br/>
                  Анастасия сопровождала каждый этап сделки онлайн и офлайн, за что отдельные спасибо ☺️
                  <br/><br/>
                  Внимание к деталям - для меня это показатель профессионализма. Сервис на высоте.
                  <br/><br/>
                  Желаю всем найти такого же прекрасного помощника как Анастасия - человека, кто от и до знает свое дело и без лишних вопросов сопроводит вас на пути приобретения своей квартиры или дома 🏡
                  <br/><br/>
                  Настя, спасибо тебе большое ♥️
                  <br/><br/>
                  P.S. c Анастасией до сих пор на связи, обращаюсь к ней также по вопросам страховок."
                </p>
                <p className="text-xs opacity-60">14 октября 2024, 2ГИС</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-6">
            <p className="text-lg opacity-80">Читайте все отзывы наших клиентов на популярных платформах:</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 hover:bg-primary hover:text-white transition-all w-full sm:w-auto"
                onClick={() => window.open('https://go.2gis.com/bq5Fb', '_blank')}
              >
                <Icon name="MapPin" size={20} />
                Отзывы на 2ГИС
                <Icon name="ExternalLink" size={16} />
              </Button>

              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 hover:bg-primary hover:text-white transition-all w-full sm:w-auto"
                onClick={() => window.open('https://www.vl.ru/mango-dom', '_blank')}
              >
                <Icon name="MessageSquare" size={20} />
                Отзывы на VL.ru
                <Icon name="ExternalLink" size={16} />
              </Button>
            </div>

            <div className="inline-flex items-center gap-8 bg-card p-6 rounded-lg shadow-sm mt-8">
              <div>
                <div className="text-4xl font-bold text-primary">4.9</div>
                <div className="text-sm opacity-70">Средний рейтинг</div>
                <div className="flex gap-1 text-yellow-500 text-lg mt-1">
                  {'⭐'.repeat(5)}
                </div>
              </div>
              <div className="h-16 w-px bg-border"></div>
              <div>
                <div className="text-4xl font-bold text-accent">1247</div>
                <div className="text-sm opacity-70">Довольных клиентов</div>
              </div>
              <div className="h-16 w-px bg-border"></div>
              <div>
                <div className="text-4xl font-bold text-primary">94%</div>
                <div className="text-sm opacity-70">Одобрение ипотеки</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/a4a9e5b6-b1a0-494c-ad84-e97aa91e5da1.png" 
                  alt="МангоДом" 
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-sm opacity-80">Ваш надёжный партнёр в получении ипотеки</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+74231234567" className="hover:text-accent transition-colors">+7 (423) 123-45-67</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@mortgage-vl.ru" className="hover:text-accent transition-colors">info@mortgage-vl.ru</a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <p className="text-sm opacity-80">Пн-Пт: 9:00-20:00</p>
              <p className="text-sm opacity-80">Сб-Вс: 10:00-18:00</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Адрес</h4>
              <p className="text-sm opacity-80">Владивосток, ул. Центральная, 10</p>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80">
              <p>© 2025 ООО "Ваша Ипотека". Все права защищены.</p>
              <p className="text-xs mt-1">ОГРН 1234567890123 | Лицензия №1234567890</p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/79991234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="WhatsApp"
              >
                <Icon name="MessageCircle" size={22} className="text-white" />
              </a>
              <a 
                href="https://t.me/Nastasssl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0088cc] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Telegram"
              >
                <Icon name="Send" size={20} className="text-white" />
              </a>
              <a 
                href="https://instagram.com/mangodom_vl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} className="text-white" />
              </a>
              <a 
                href="https://youtube.com/@mangodom" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                aria-label="YouTube"
              >
                <Icon name="Youtube" size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;