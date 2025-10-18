import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenPromoPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenPromoPopup', 'true');
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCTA = () => {
    setIsOpen(false);
    const formSection = document.getElementById('contact');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <Card className="relative max-w-lg w-full p-8 shadow-2xl border-2 border-primary/20 animate-in zoom-in duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Закрыть"
        >
          <X size={24} />
        </button>

        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
            <Icon name="Percent" size={32} className="text-primary" />
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Специальное предложение!
            </h3>
            <p className="text-lg text-muted-foreground">
              Успейте оформить ипотеку по сниженной ставке
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
            <div className="text-5xl font-bold text-primary mb-2">
              от 0.1%
            </div>
            <p className="text-sm text-muted-foreground">
              Льготная ставка на первые 3 года
            </p>
          </div>

          <div className="space-y-3 text-left">
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">Одобрение за 1 день</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">Помощь в сборе документов</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">Консультация эксперта бесплатно</span>
            </div>
          </div>

          <Button 
            onClick={handleCTA}
            size="lg" 
            className="w-full text-lg h-14 shadow-lg hover:shadow-xl transition-all"
          >
            Получить консультацию
            <Icon name="ArrowRight" size={20} />
          </Button>

          <p className="text-xs text-muted-foreground">
            Акция действует ограниченное время
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PromoPopup;
