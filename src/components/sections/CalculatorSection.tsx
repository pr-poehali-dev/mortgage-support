import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CalculatorSectionProps {
  propertyPrice: number;
  downPayment: number;
  loanTerm: number;
  mortgageProgram: string;
  result: {
    monthlyPayment: number;
    overpayment: number;
    loanAmount: number;
  };
  onPropertyPriceChange: (value: number) => void;
  onDownPaymentChange: (value: number) => void;
  onLoanTermChange: (value: number) => void;
  onMortgageProgramChange: (value: string) => void;
  onTelegramClick: () => void;
}

const CalculatorSection = ({
  propertyPrice,
  downPayment,
  loanTerm,
  mortgageProgram,
  result,
  onPropertyPriceChange,
  onDownPaymentChange,
  onLoanTermChange,
  onMortgageProgramChange,
  onTelegramClick,
}: CalculatorSectionProps) => {
  const programs = {
    family: { rate: 6, name: 'Семейная ипотека' },
    farEast: { rate: 2, name: 'Дальневосточная ипотека' },
    rural: { rate: 3, name: 'Сельская ипотека' },
    medical: { rate: 2, name: 'Для врачей и педагогов' },
  };

  return (
    <section id="calculator" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Калькулятор ипотеки
          </h2>
          <p className="text-lg text-muted-foreground">
            Рассчитайте примерный ежемесячный платёж
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Параметры кредита</CardTitle>
              <CardDescription>Укажите желаемые условия ипотеки</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>Стоимость недвижимости</Label>
                  <span className="text-2xl font-bold text-primary">
                    {propertyPrice.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Slider
                  value={[propertyPrice]}
                  onValueChange={(value) => onPropertyPriceChange(value[0])}
                  min={1000000}
                  max={20000000}
                  step={100000}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 млн ₽</span>
                  <span>20 млн ₽</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>Первоначальный взнос</Label>
                  <span className="text-2xl font-bold text-accent">
                    {downPayment}%
                  </span>
                </div>
                <Slider
                  value={[downPayment]}
                  onValueChange={(value) => onDownPaymentChange(value[0])}
                  min={10}
                  max={90}
                  step={5}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10%</span>
                  <span>90%</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label>Срок кредита</Label>
                  <span className="text-2xl font-bold text-primary">
                    {loanTerm} лет
                  </span>
                </div>
                <Slider
                  value={[loanTerm]}
                  onValueChange={(value) => onLoanTermChange(value[0])}
                  min={1}
                  max={30}
                  step={1}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 год</span>
                  <span>30 лет</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Программа ипотеки</Label>
                <Select value={mortgageProgram} onValueChange={onMortgageProgramChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family">Семейная ипотека (6%)</SelectItem>
                    <SelectItem value="farEast">Дальневосточная ипотека (2%)</SelectItem>
                    <SelectItem value="rural">Сельская ипотека (3%)</SelectItem>
                    <SelectItem value="medical">Для врачей и педагогов (2%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle>Результат расчёта</CardTitle>
              <CardDescription>Примерные условия кредита</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-sm space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Ежемесячный платёж</div>
                  <div className="text-4xl font-bold text-primary">
                    {result.monthlyPayment.toLocaleString('ru-RU')} ₽
                  </div>
                </div>

                <div className="h-px bg-border"></div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Сумма кредита</div>
                    <div className="text-xl font-semibold">
                      {result.loanAmount.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Переплата</div>
                    <div className="text-xl font-semibold">
                      {result.overpayment.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border"></div>

                <div>
                  <div className="text-sm text-muted-foreground mb-1">Процентная ставка</div>
                  <div className="text-2xl font-bold text-accent">
                    {programs[mortgageProgram as keyof typeof programs].rate}%
                  </div>
                </div>
              </div>

              <div className="space-y-3 p-4 bg-white rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Info" size={16} className="text-primary" />
                  <span className="text-muted-foreground">
                    Это предварительный расчёт. Точные условия зависят от банка.
                  </span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-accent hover-gradient-shift text-lg py-6"
                onClick={onTelegramClick}
              >
                Получить одобрение
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
