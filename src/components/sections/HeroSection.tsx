import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  onTelegramClick: () => void;
}

const AnimatedCounter = ({ target, suffix = '', duration = 4000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuad = 1 - Math.pow(1 - percentage, 3);
      const current = Math.floor(easeOutQuad * target);
      
      setCount(current);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

const HeroSection = ({ onTelegramClick }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-24 px-4 relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,165,0,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(255,200,87,0.15),transparent_50%)]" />
      
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-full text-primary font-semibold text-sm tracking-wide animate-fade-in">
              ✨ Ваш путь к собственному жилью
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in leading-tight pb-2">
            Ипотека от 2%
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground/80 font-medium max-w-2xl mx-auto">
            Помогаем получить одобрение и оформить ипотеку на самых выгодных условиях 🏡
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" onClick={onTelegramClick} className="text-xl px-10 py-7 bg-gradient-to-r from-primary to-accent hover-gradient-shift pulse-button shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all">
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-10 py-7 border-2 border-primary/40 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all shadow-lg">
              <Icon name="Calculator" className="mr-2" size={24} />
              Рассчитать ипотеку
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/30 hover:border-primary/50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                <AnimatedCounter target={2} suffix="%" />
              </div>
              <div className="text-base text-foreground/70 font-medium">Минимальная ставка</div>
              <div className="mt-2 text-sm text-foreground/50">От ведущих банков</div>
            </div>
            
            <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-accent/30 hover:border-accent/50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className="text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3">
                <AnimatedCounter target={20} suffix=" лет" />
              </div>
              <div className="text-base text-foreground/70 font-medium">Срок кредита</div>
              <div className="mt-2 text-sm text-foreground/50">Максимальный период</div>
            </div>
            
            <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/30 hover:border-primary/50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                <AnimatedCounter target={96} suffix="%" />
              </div>
              <div className="text-base text-foreground/70 font-medium">Одобрение заявок</div>
              <div className="mt-2 text-sm text-foreground/50">Высокий процент успеха</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;