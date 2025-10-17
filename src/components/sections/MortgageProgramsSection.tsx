import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import AnimatedSection from '@/components/AnimatedSection';

const MortgageProgramsSection = () => {
  return (
    <section id="mortgage-programs" className="py-20 px-4 bg-gradient-to-br from-background to-orange-50/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Программы ипотечного кредитования
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Подберём оптимальную программу с минимальной процентной ставкой специально для вас
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedSection delay={0.1}>
            <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-accent">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Icon name="MapPin" className="text-accent" size={24} />
              </div>
              <CardTitle>Дальневосточная ипотека</CardTitle>
              <CardDescription>До 2% годовых</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-accent shrink-0 mt-0.5" size={16} />
                  <span>Для жителей ДФО</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-accent shrink-0 mt-0.5" size={16} />
                  <span>До 9 млн рублей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-accent shrink-0 mt-0.5" size={16} />
                  <span>Первоначальный взнос от 20,1%</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-accent">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Icon name="GraduationCap" className="text-accent" size={24} />
              </div>
              <CardTitle>Для врачей и педагогов</CardTitle>
              <CardDescription>До 2% годовых</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-accent shrink-0 mt-0.5" size={16} />
                  <span>Для работников бюджетной сферы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-accent shrink-0 mt-0.5" size={16} />
                  <span>До 9 млн рублей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-accent shrink-0 mt-0.5" size={16} />
                  <span>Особые условия одобрения</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Home" className="text-primary" size={24} />
              </div>
              <CardTitle>Семейная ипотека</CardTitle>
              <CardDescription>6% годовых</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Для семей с детьми</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>До 12 млн рублей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Первоначальный взнос от 20,1%</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="TreePine" className="text-primary" size={24} />
              </div>
              <CardTitle>Сельская ипотека</CardTitle>
              <CardDescription>3% годовых</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Для жителей сельской местности</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>До 12 млн рублей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Строительство дома</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MortgageProgramsSection;