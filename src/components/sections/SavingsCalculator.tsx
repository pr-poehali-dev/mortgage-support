import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import AnimatedSection from '@/components/AnimatedSection';

const SavingsCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [loanTerm, setLoanTerm] = useState(20);

  const marketRate = 19;
  const ourRate = 8;

  const calculateMonthlyPayment = (amount: number, rate: number, years: number) => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                    (Math.pow(1 + monthlyRate, months) - 1);
    return payment;
  };

  const calculateTotalPayment = (monthlyPayment: number, years: number) => {
    return monthlyPayment * years * 12;
  };

  const marketMonthly = calculateMonthlyPayment(loanAmount, marketRate, loanTerm);
  const ourMonthly = calculateMonthlyPayment(loanAmount, ourRate, loanTerm);
  const marketTotal = calculateTotalPayment(marketMonthly, loanTerm);
  const ourTotal = calculateTotalPayment(ourMonthly, loanTerm);

  const monthlySavings = marketMonthly - ourMonthly;
  const totalSavings = marketTotal - ourTotal;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="savings" className="py-20 px-4">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Сколько сэкономите с нами?
            </h2>
            <p className="text-lg text-muted-foreground">
              Сравните ипотеку по рыночной ставке и с нашей помощью
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Settings" size={24} className="text-primary" />
                Параметры расчёта
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base mb-3 block">
                  Сумма кредита: <span className="font-bold text-primary">{formatCurrency(loanAmount)}</span>
                </Label>
                <Slider
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  min={1000000}
                  max={20000000}
                  step={500000}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 млн ₽</span>
                  <span>20 млн ₽</span>
                </div>
              </div>

              <div>
                <Label className="text-base mb-3 block">
                  Срок кредита: <span className="font-bold text-primary">{loanTerm} лет</span>
                </Label>
                <Slider
                  value={[loanTerm]}
                  onValueChange={(value) => setLoanTerm(value[0])}
                  min={5}
                  max={30}
                  step={1}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>5 лет</span>
                  <span>30 лет</span>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Средняя ставка на рынке:</span>
                  <span className="text-lg font-bold text-destructive">{marketRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Наша средняя ставка:</span>
                  <span className="text-lg font-bold text-primary">{ourRate}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-xl border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Ваша экономия каждый месяц</p>
                    <p className="text-3xl font-bold text-primary">
                      {formatCurrency(monthlySavings)}
                    </p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="TrendingDown" size={24} className="text-primary" />
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">На рынке:</span>
                    <span className="line-through text-destructive">{formatCurrency(marketMonthly)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">С нами:</span>
                    <span className="font-bold text-primary">{formatCurrency(ourMonthly)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 border-accent/20 bg-gradient-to-br from-card to-accent/5">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Экономия за весь срок</p>
                    <p className="text-3xl font-bold text-accent">
                      {formatCurrency(totalSavings)}
                    </p>
                  </div>
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Icon name="PiggyBank" size={24} className="text-accent" />
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Переплата на рынке:</span>
                    <span className="line-through text-destructive">{formatCurrency(marketTotal - loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Переплата с нами:</span>
                    <span className="font-bold text-primary">{formatCurrency(ourTotal - loanAmount)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
              <div className="flex items-start gap-3 mb-4">
                <Icon name="Lightbulb" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2">На эти деньги вы сможете:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Купить автомобиль</li>
                    <li>• Сделать ремонт в квартире</li>
                    <li>• Оплатить образование детей</li>
                    <li>• Отложить на пенсию</li>
                  </ul>
                </div>
              </div>
              <Button
                onClick={() => {
                  const formSection = document.getElementById('contact');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full"
                size="lg"
              >
                Хочу сэкономить!
                <Icon name="ArrowRight" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
