import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('application-form');
    if (formSection) {
      const yOffset = -80;
      const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary/90 to-accent/90 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/a4a9e5b6-b1a0-494c-ad84-e97aa91e5da1.png" 
                alt="МангоДом" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm opacity-80 mb-4">Ваш надёжный партнёр в получении ипотеки</p>
            <Button
              onClick={scrollToForm}
              className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
            >
              <Icon name="FileText" size={18} className="mr-2" />
              Оставить заявку
            </Button>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79241358300" className="hover:text-accent transition-colors">8-924-135-83-00</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:amolorova@inbox.ru" className="hover:text-accent transition-colors">amolorova@inbox.ru</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Режим работы</h4>
            <p className="text-sm opacity-80">Пн-Пт: 10:00-20:00</p>
            <p className="text-sm opacity-80">Сб: 10:00-18:00</p>
            <p className="text-sm opacity-80">Вс: 12:00-15:00</p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm opacity-80">
            <p>© 2025 ИП Молорова А.А. Все права защищены.</p>
            <p className="text-xs mt-1">ИНН 250811103854 | ОГРНИП 322253600056907</p>
            <Link to="/privacy" className="text-xs hover:text-accent transition-colors underline mt-1 block">
              Политика конфиденциальности
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/79241358300" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              aria-label="WhatsApp"
            >
              <Icon name="MessageCircle" size={22} className="text-white" />
            </a>
            <a 
              href="https://t.me/nedvizimost_rf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0088cc] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              aria-label="Telegram"
            >
              <Icon name="Send" size={20} className="text-white" />
            </a>
            <a 
              href="https://www.instagram.com/mangodomm?igsh=MTQ2bmFjOGxhMnhrMA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              aria-label="Instagram"
            >
              <Icon name="Instagram" size={20} className="text-white" />
            </a>
            <a 
              href="https://youtube.com/channel/UCGsygDFJ6lQfhXoy8k3akZA?si=47hjbRRgwA9KpA9I" 
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
  );
};

export default Footer;