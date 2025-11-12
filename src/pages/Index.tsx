import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import MortgageProgramsSection from '@/components/sections/MortgageProgramsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import ApplicationFormSection from '@/components/sections/ApplicationFormSection';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/sections/Footer';
import FloatingButtons from '@/components/sections/FloatingButtons';
import PromoPopup from '@/components/PromoPopup';
import ScrollToTop from '@/components/ScrollToTop';
import QuizSection from '@/components/QuizSection';

import BudgetCalculatorSection from '@/components/sections/BudgetCalculatorSection';

const Index = () => {
  const { toast } = useToast();
  const [propertyPrice, setPropertyPrice] = useState(5000000);
  const [downPayment, setDownPayment] = useState(20);
  const [loanTerm, setLoanTerm] = useState(20);
  const [mortgageProgram, setMortgageProgram] = useState('family');

  const reviews = [
    {
      id: 'review1',
      name: 'Alina Perm',
      initials: 'AP',
      rating: 5,
      date: '14 октября 2024',
      preview: 'Читаю ниже столько восторженных отзывов, и это абсолютно заслужено! Наша сделка по ипотеке была не простая, и нам помогло знание своего дела Анастасии...',
      full: 'Читаю ниже столько восторженных отзывов, и это абсолютно заслужено! Наша сделка по ипотеке была не простая, и нам помогло знание своего дела Анастасии и ее желание браться за задачи со звездочками🔝\n\nПо сделке: все было структурно, сложная ипотечно-банковская информация переводилась в идеальном синхронном переводе и приятным голосом 😉\n\nАнастасия сопровождала каждый этап сделки онлайн и офлайн, за что отдельные спасибо ☺️\n\nВнимание к деталям - для меня это показатель профессионализма. Сервис на высоте.\n\nЖелаю всем найти такого же прекрасного помощника как Анастасия - человека, кто от и до знает свое дело и без лишних вопросов сопроводит вас на пути приобретения своей квартиры или дома 🏡\n\nНастя, спасибо тебе большое ♥️\n\nP.S. c Анастасией до сих пор на связи, обращаюсь к ней также по вопросам страховок.'
    },
    {
      id: 'review2',
      name: 'Клиент МангоДом',
      initials: 'КЛ',
      rating: 5,
      date: '2ГИС',
      preview: 'Анастасия, спасибо Вам за ваш труд! Благодаря Вам мы с семьей теперь будем жить в собственном доме!...',
      full: 'Анастасия, спасибо Вам за ваш труд!\n\nБлагодаря Вам мы с семьей теперь будем жить в собственном доме! Вы помогли оперативно выбрать надежного застройщика и оформить ипотеку в очень сжатые сроки))) 🫣\n\nВаш профессионализм, ответственность и готовность работать в нерабочее время дорогого стоит! На тысячу моих вопросов всегда спокойные ответы и разъяснения. В общем, всё прошло максимально быстро, гладко и без неврозов!\n\nВсем, кто сомневается — очень рекомендую обратиться к Анастасии. Лучшего эксперта вам не найти!'
    },
    {
      id: 'review3',
      name: 'Александра Ильина',
      initials: 'АИ',
      rating: 5,
      date: '13 февраля 2025',
      preview: 'Тот редкий случай, когда прекрасно ВСЕ! Анастасия поможет с выбором и возьмет на себя решение тонких вопросов, если таковые возникнут в процессе оформления сделки с недвижимостью. Всегда на связи и буквально получаете ответ на любой возникающий вопрос👍🏼',
      full: 'Тот редкий случай, когда прекрасно ВСЕ! Анастасия поможет с выбором и возьмет на себя решение тонких вопросов, если таковые возникнут в процессе оформления сделки с недвижимостью. Всегда на связи и буквально получаете ответ на любой возникающий вопрос👍🏼'
    },
    {
      id: 'review4',
      name: 'Галина Соколова',
      initials: 'ГС',
      rating: 5,
      date: '8 ноября 2024',
      preview: 'Хочу выразить огромную благодарность компании МангоДом. И отдельное спасибо Анастасии, очень помогла 🙏🏻 в выборе будущей квартиры...',
      full: 'Хочу выразить огромную благодарность компании МангоДом. И отдельное спасибо Анастасии, очень помогла 🙏🏻 в выборе будущей квартиры. Обратная связь просто 24/7 💫 сопровождение до самой сделки по максимуму. Ответила на все мои порой «странные» вопросы, всё рассказала, показала, объяснила. Договаривалась даже на просмотр квартиры в строящемся доме 👍🏻\n\nДа ещё и отчасти психологическая поддержка ✨ было мне очень тяжело сделать выбор квартиры в пользу одной. На что Анастасия с чувством, с поддержкой всегда выслушивала и давала свои рекомендации с заботой. Всегда находила нужные слова, это очень ценно ✨'
    }
  ];

  const programs = {
    family: { rate: 6, name: 'Семейная ипотека' },
    farEast: { rate: 2, name: 'Дальневосточная ипотека' },
    rural: { rate: 3, name: 'Сельская ипотека' },
    medical: { rate: 2, name: 'Для врачей и педагогов' },
  };

  const calculateMortgage = () => {
    const loanAmount = propertyPrice * (1 - downPayment / 100);
    const monthlyRate = programs[mortgageProgram as keyof typeof programs].rate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    const totalPayment = monthlyPayment * numberOfPayments;
    const overpayment = totalPayment - loanAmount;
    
    return {
      monthlyPayment: Math.round(monthlyPayment),
      overpayment: Math.round(overpayment),
      loanAmount: Math.round(loanAmount),
    };
  };

  const result = calculateMortgage();

  const handleSubmit = async (name: string, phone: string) => {
    try {
      const response = await fetch('https://functions.poehali.dev/ea5f6b22-33d4-4e01-9d42-d558eef5c089', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: `Спасибо, ${name}! Мы свяжемся с вами в течение 30 минут.`,
        });
      } else {
        toast({
          title: "Ошибка",
          description: `Не удалось отправить заявку: ${responseData.error || 'Неизвестная ошибка'}`,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Проверьте подключение к интернету.",
        variant: "destructive",
      });
    }
  };

  const openTelegram = () => {
    window.open('https://t.me/nedvizimost_rf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Header onTelegramClick={openTelegram} />
        <HeroSection onTelegramClick={openTelegram} />
        <ApplicationFormSection onSubmit={handleSubmit} />
        <BudgetCalculatorSection />
        <AdvantagesSection />
        <MortgageProgramsSection />
        <HowItWorksSection />
        <QuizSection />
        <CalculatorSection
          propertyPrice={propertyPrice}
          downPayment={downPayment}
          loanTerm={loanTerm}
          mortgageProgram={mortgageProgram}
          result={result}
          onPropertyPriceChange={setPropertyPrice}
          onDownPaymentChange={setDownPayment}
          onLoanTermChange={setLoanTerm}
          onMortgageProgramChange={setMortgageProgram}
          onTelegramClick={openTelegram}
        />
        <ReviewsSection reviews={reviews} />
        <FAQSection />
        <Footer />
      </div>
      <FloatingButtons />
      <PromoPopup />
      <ScrollToTop />
    </div>
  );
};

export default Index;