import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import AnimatedSection from '@/components/AnimatedSection';

interface QuizQuestion {
  id: string;
  question: string;
  options: { value: string; label: string; icon: string }[];
}

const questions: QuizQuestion[] = [
  {
    id: 'property',
    question: 'Какую недвижимость планируете приобрести?',
    options: [
      { value: 'new', label: 'Новостройку', icon: 'Building2' },
      { value: 'secondary', label: 'Вторичное жильё', icon: 'Home' },
      { value: 'house', label: 'Дом или участок', icon: 'TreePine' },
    ],
  },
  {
    id: 'family',
    question: 'У вас есть дети?',
    options: [
      { value: 'yes', label: 'Да, есть', icon: 'Users' },
      { value: 'expecting', label: 'Ожидаем', icon: 'Baby' },
      { value: 'no', label: 'Нет', icon: 'User' },
    ],
  },
  {
    id: 'profession',
    question: 'Ваша профессия',
    options: [
      { value: 'it', label: 'IT-специалист', icon: 'Code' },
      { value: 'medical', label: 'Врач/педагог', icon: 'GraduationCap' },
      { value: 'military', label: 'Военнослужащий', icon: 'Shield' },
      { value: 'other', label: 'Другая', icon: 'Briefcase' },
    ],
  },
];

const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const getRecommendation = () => {
    const { property, family, profession } = answers;
    
    if (family === 'yes' || family === 'expecting') {
      return {
        program: 'Семейная ипотека',
        rate: 'от 0.1%',
        description: 'Льготная программа для семей с детьми',
        benefits: [
          'Ставка от 0.1% на весь срок',
          'До 12 млн рублей в Москве',
          'Первоначальный взнос от 15%',
        ],
      };
    }
    
    if (profession === 'it') {
      return {
        program: 'IT-ипотека',
        rate: 'от 4%',
        description: 'Специальная программа для IT-специалистов',
        benefits: [
          'Ставка от 4% годовых',
          'До 18 млн рублей',
          'Справка 2-НДФЛ не требуется',
        ],
      };
    }
    
    if (profession === 'medical') {
      return {
        program: 'Для врачей и педагогов',
        rate: 'от 2%',
        description: 'Льготная ипотека для медиков и учителей',
        benefits: [
          'Сниженная ставка от 2%',
          'Господдержка до 5 млн',
          'Упрощённое оформление',
        ],
      };
    }

    if (property === 'new') {
      return {
        program: 'На новостройку',
        rate: 'от 5%',
        description: 'Выгодные условия на покупку новостройки',
        benefits: [
          'Ставка от 5% годовых',
          'Первоначальный взнос от 15%',
          'Рассрочка от застройщика',
        ],
      };
    }

    return {
      program: 'Стандартная ипотека',
      rate: 'от 6%',
      description: 'Классические условия на вторичное жильё',
      benefits: [
        'Гибкие условия',
        'Быстрое одобрение',
        'Широкий выбор объектов',
      ],
    };
  };

  const recommendation = getRecommendation();

  if (showResult) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <Card className="shadow-2xl border-2 border-primary/20">
              <CardContent className="p-8 text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <Icon name="Check" size={40} className="text-primary" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Вам подходит:
                  </h3>
                  <p className="text-2xl font-bold text-foreground mb-2">
                    {recommendation.program}
                  </p>
                  <p className="text-muted-foreground">
                    {recommendation.description}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {recommendation.rate}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Процентная ставка
                  </p>
                </div>

                <div className="text-left space-y-3">
                  {recommendation.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    onClick={() => {
                      const formSection = document.getElementById('contact');
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    size="lg"
                    className="flex-1"
                  >
                    Получить консультацию
                    <Icon name="ArrowRight" size={20} />
                  </Button>
                  <Button
                    onClick={handleReset}
                    size="lg"
                    variant="outline"
                    className="flex-1"
                  >
                    Пройти заново
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Подберём программу за 1 минуту
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответьте на 3 вопроса и узнайте оптимальные условия
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Вопрос {currentStep + 1} из {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6">
                {currentQuestion.question}
              </h3>

              <RadioGroup
                value={answers[currentQuestion.id] || ''}
                onValueChange={handleAnswer}
                className="space-y-3"
              >
                {currentQuestion.options.map((option) => (
                  <Label
                    key={option.value}
                    htmlFor={option.value}
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      answers[currentQuestion.id] === option.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Icon name={option.icon} size={24} className="text-primary" />
                    <span className="text-lg">{option.label}</span>
                  </Label>
                ))}
              </RadioGroup>

              <div className="flex gap-3 mt-8">
                {currentStep > 0 && (
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    size="lg"
                    className="flex-1"
                  >
                    <Icon name="ArrowLeft" size={20} />
                    Назад
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  disabled={!answers[currentQuestion.id]}
                  size="lg"
                  className="flex-1"
                >
                  {currentStep < questions.length - 1 ? 'Далее' : 'Узнать результат'}
                  <Icon name="ArrowRight" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default QuizSection;
