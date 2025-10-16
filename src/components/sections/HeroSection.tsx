import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onTelegramClick: () => void;
}

const HeroSection = ({ onTelegramClick }: HeroSectionProps) => {
  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-50">
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in leading-tight pb-2">
            Ипотека от 2%
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Помогаем получить одобрение и оформить ипотеку на самых выгодных условиях
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={onTelegramClick} className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover-gradient-shift">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:bg-primary hover:text-white">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать ипотеку
            </Button>
          </div>
          <div className="flex flex-wrap gap-8 justify-center pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">2%</div>
              <div className="text-sm text-muted-foreground">Минимальная ставка</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">30 лет</div>
              <div className="text-sm text-muted-foreground">Срок кредита</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Одобрение заявок</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
