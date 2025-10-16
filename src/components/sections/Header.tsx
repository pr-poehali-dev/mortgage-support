import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onTelegramClick: () => void;
}

const Header = ({ onTelegramClick }: HeaderProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/files/b4a79d20-e6f8-4df8-b9c3-6e18e559f10f.png" 
            alt="МангоДом" 
            className="h-12 w-auto"
          />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#mortgage-programs" className="text-sm text-foreground hover:text-primary transition-colors">Программы</a>
          <a href="#how-it-works" className="text-sm text-foreground hover:text-primary transition-colors">Как работаем</a>
          <a href="#reviews" className="text-sm text-foreground hover:text-primary transition-colors">Отзывы</a>
          <a href="#calculator" className="text-sm text-foreground hover:text-primary transition-colors">Калькулятор</a>
          <a href="tel:+79241358300" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
            <Icon name="Phone" size={16} />
            8-924-135-83-00
          </a>
          <Button onClick={onTelegramClick} size="sm" variant="outline" className="gap-2 border-border hover:bg-[#0088cc] hover:text-white hover:border-[#0088cc] transition-all">
            <Icon name="Send" size={16} />
            Telegram
          </Button>
          <Button onClick={onTelegramClick} size="sm" className="bg-gradient-to-r from-primary to-accent hover-gradient-shift">Оставить заявку</Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;