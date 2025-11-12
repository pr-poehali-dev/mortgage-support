import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import AnimatedSection from '@/components/AnimatedSection';

const BudgetCalculatorSection = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(80000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(40000);
  const [hasCoDebtor, setHasCoDebtor] = useState(false);

  const availableForPayment = monthlyIncome - monthlyExpenses;
  const maxMonthlyPayment = Math.floor(availableForPayment * 0.5);
  const maxLoanAmount = Math.floor(maxMonthlyPayment * 12 * 20 * 0.7);
  const recommendedDownPayment = Math.floor(maxLoanAmount * 0.20);
  const totalBudget = maxLoanAmount + recommendedDownPayment;

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Рассчитай свой бюджет
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Узнайте, какую недвижимость вы можете приобрести прямо сейчас
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Calculator" className="text-primary" size={24} />
                  Ваши данные
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Ежемесячный доход</label>
                    <span className="text-sm font-bold text-primary">{formatNumber(monthlyIncome)} ₽</span>
                  </div>
                  <Slider
                    value={[monthlyIncome]}
                    onValueChange={(value) => setMonthlyIncome(value[0])}
                    min={30000}
                    max={1000000}
                    step={10000}
                    className="mb-1"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>30 000 ₽</span>
                    <span>1 000 000 ₽</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Ежемесячные расходы</label>
                    <span className="text-sm font-bold text-accent">{formatNumber(monthlyExpenses)} ₽</span>
                  </div>
                  <Slider
                    value={[monthlyExpenses]}
                    onValueChange={(value) => setMonthlyExpenses(value[0])}
                    min={10000}
                    max={1000000}
                    step={10000}
                    className="mb-1"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>10 000 ₽</span>
                    <span>1 000 000 ₽</span>
                  </div>
                </div>

                <div 
                  className="flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-primary"
                  onClick={() => setHasCoDebtor(!hasCoDebtor)}
                >
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${hasCoDebtor ? 'bg-primary border-primary' : 'border-muted-foreground'}`}>
                    {hasCoDebtor && <Icon name="Check" className="text-white" size={16} />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Есть созаемщик</p>
                    <p className="text-sm text-muted-foreground">Увеличивает сумму кредита до 2х раз</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Остается после расходов</span>
                    <span className="text-lg font-bold text-green-600">{formatNumber(availableForPayment)} ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Home" className="text-primary" size={24} />
                  Ваши возможности
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Wallet" className="text-primary" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Максимальный платеж</p>
                      <p className="text-2xl font-bold text-primary">{formatNumber(maxMonthlyPayment)} ₽/мес</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">50% от свободных средств</p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="Banknote" className="text-accent" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Сумма кредита</p>
                      <p className="text-2xl font-bold text-accent">{formatNumber(hasCoDebtor ? maxLoanAmount * 2 : maxLoanAmount)} ₽</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">На 20 лет под 6% годовых</p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Icon name="TrendingUp" className="text-green-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Первоначальный взнос</p>
                      <p className="text-2xl font-bold text-green-600">{formatNumber(hasCoDebtor ? recommendedDownPayment * 2 : recommendedDownPayment)} ₽</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Рекомендуемые 20%</p>
                </div>

                <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-6 shadow-lg mt-4">
                  <div className="text-center text-white">
                    <p className="text-sm opacity-90 mb-2">Ваш бюджет на покупку</p>
                    <p className="text-4xl font-bold mb-1">{formatNumber(hasCoDebtor ? totalBudget * 2 : totalBudget)} ₽</p>
                    <div className="flex items-center justify-center gap-2 mt-3">
                      <Icon name="Home" size={16} />
                      <p className="text-sm opacity-90">Квартиры в этом диапазоне</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                  <Icon name="Info" className="text-blue-600 shrink-0 mt-0.5" size={16} />
                  <p className="text-xs text-blue-900">
                    Расчёт приблизительный. Точную сумму одобрения определит банк после анализа всех документов.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-8 text-center">
            <a 
              href="#application-form"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 pulse-button"
            >
              <Icon name="Send" size={20} />
              Узнать точную сумму одобрения
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BudgetCalculatorSection;