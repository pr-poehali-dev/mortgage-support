import Icon from '@/components/ui/icon';

const FloatingButtons = () => {
  return (
    <>
      <a
        href="https://wa.me/message/W5W2XWU6RXGRJ1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform shadow-2xl z-50 animate-pulse hover:animate-none group"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={28} className="text-white" />
        <span className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Написать в WhatsApp
        </span>
      </a>

      <a
        href="https://t.me/nedvizimost_rf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-24 w-16 h-16 rounded-full bg-[#0088cc] flex items-center justify-center hover:scale-110 transition-transform shadow-2xl z-50 animate-pulse hover:animate-none group"
        aria-label="Написать в Telegram"
      >
        <Icon name="Send" size={28} className="text-white" />
        <span className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Написать в Telegram
        </span>
      </a>
    </>
  );
};

export default FloatingButtons;
