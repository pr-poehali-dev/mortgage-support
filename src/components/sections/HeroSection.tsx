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
    <section className="pt-32 pb-24 px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,107,0,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,200,87,0.2),transparent_50%),radial-gradient(circle_at_40%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-full text-white font-semibold text-sm tracking-wide animate-fade-in backdrop-blur-sm shadow-lg shadow-primary/20">
              ✨ Ваш путь к собственному жилью
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent animate-fade-in leading-tight pb-2 drop-shadow-[0_0_30px_rgba(255,165,0,0.3)]">
            Ипотека от 2%
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-lg">
            Помогаем получить одобрение и оформить ипотеку на самых выгодных условиях 🏡
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" onClick={onTelegramClick} className="text-xl px-10 py-7 bg-gradient-to-r from-primary to-accent hover-gradient-shift pulse-button shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all">
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-10 py-7 border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 transition-all shadow-lg text-white">
              <Icon name="Calculator" className="mr-2" size={24} />
              Рассчитать ипотеку
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border-2 border-primary/40 hover:border-primary/70 transition-all shadow-2xl shadow-black/20 hover:shadow-primary/30 hover:-translate-y-2 duration-300">
              <div className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent mb-3">
                <AnimatedCounter target={2} suffix="%" />
              </div>
              <div className="text-base text-white font-semibold">Минимальная ставка</div>
              <div className="mt-2 text-sm text-white/70">От ведущих банков</div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border-2 border-accent/40 hover:border-accent/70 transition-all shadow-2xl shadow-black/20 hover:shadow-accent/30 hover:-translate-y-2 duration-300">
              <div className="text-6xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-3">
                <AnimatedCounter target={20} suffix=" лет" />
              </div>
              <div className="text-base text-white font-semibold">Срок кредита</div>
              <div className="mt-2 text-sm text-white/70">Максимальный период</div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border-2 border-primary/40 hover:border-primary/70 transition-all shadow-2xl shadow-black/20 hover:shadow-primary/30 hover:-translate-y-2 duration-300">
              <div className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent mb-3">
                <AnimatedCounter target={96} suffix="%" />
              </div>
              <div className="text-base text-white font-semibold">Одобрение заявок</div>
              <div className="mt-2 text-sm text-white/70">Высокий процент успеха</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;