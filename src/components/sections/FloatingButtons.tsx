import { useState } from 'react';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const FloatingButtons = () => {
  const [showWhatsAppDialog, setShowWhatsAppDialog] = useState(false);
  const [showTelegramDialog, setShowTelegramDialog] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWhatsAppDialog(true);
  };

  const handleTelegramClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTelegramDialog(true);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/message/W5W2XWU6RXGRJ1', '_blank');
    setShowWhatsAppDialog(false);
  };

  const openTelegram = () => {
    window.open('https://t.me/nedvizimost_rf', '_blank');
    setShowTelegramDialog(false);
  };

  return (
    <>
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform shadow-2xl z-50 animate-pulse hover:animate-none group"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={28} className="text-white" />
        <span className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Онлайн-консультант
        </span>
      </button>

      <button
        onClick={handleTelegramClick}
        className="fixed bottom-6 right-24 w-16 h-16 rounded-full bg-[#0088cc] flex items-center justify-center hover:scale-110 transition-transform shadow-2xl z-50 animate-pulse hover:animate-none group"
        aria-label="Написать в Telegram"
      >
        <Icon name="Send" size={28} className="text-white" />
        <span className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Онлайн-консультант
        </span>
      </button>

      <Dialog open={showWhatsAppDialog} onOpenChange={setShowWhatsAppDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              Онлайн-консультант
            </DialogTitle>
            <DialogDescription className="text-base pt-4">
              Получите бесплатную консультацию по ипотеке в WhatsApp. Наш специалист ответит на все ваши вопросы и поможет подобрать оптимальную программу.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 pt-4">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <Icon name="Check" className="text-green-600 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-green-900">Быстрые ответы</p>
                <p className="text-sm text-green-700">Обычно отвечаем в течение 5 минут</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Icon name="Shield" className="text-blue-600 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-blue-900">Конфиденциально</p>
                <p className="text-sm text-blue-700">Ваши данные в безопасности</p>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setShowWhatsAppDialog(false)}
                className="flex-1"
              >
                Отмена
              </Button>
              <Button
                onClick={openWhatsApp}
                className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white"
              >
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Открыть WhatsApp
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showTelegramDialog} onOpenChange={setShowTelegramDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0088cc] flex items-center justify-center">
                <Icon name="Send" size={24} className="text-white" />
              </div>
              Онлайн-консультант
            </DialogTitle>
            <DialogDescription className="text-base pt-4">
              Получите бесплатную консультацию по ипотеке в Telegram. Наш специалист ответит на все ваши вопросы и поможет подобрать оптимальную программу.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 pt-4">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Icon name="Check" className="text-blue-600 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-blue-900">Быстрые ответы</p>
                <p className="text-sm text-blue-700">Обычно отвечаем в течение 5 минут</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <Icon name="Shield" className="text-purple-600 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium text-purple-900">Конфиденциально</p>
                <p className="text-sm text-purple-700">Ваши данные в безопасности</p>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setShowTelegramDialog(false)}
                className="flex-1"
              >
                Отмена
              </Button>
              <Button
                onClick={openTelegram}
                className="flex-1 bg-[#0088cc] hover:bg-[#0077b3] text-white"
              >
                <Icon name="Send" size={18} className="mr-2" />
                Открыть Telegram
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingButtons;
