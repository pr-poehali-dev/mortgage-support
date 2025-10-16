import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Как мы работаем
          </h2>
          <p className="text-lg text-muted-foreground">
            Простой и понятный процесс получения ипотеки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="relative group hover:shadow-xl transition-all">
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
              1
            </div>
            <CardContent className="pt-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="MessageSquare" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Консультация</h3>
              <p className="text-muted-foreground">
                Обсуждаем ваши потребности и подбираем оптимальную программу
              </p>
            </CardContent>
          </Card>

          <Card className="relative group hover:shadow-xl transition-all">
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
              2
            </div>
            <CardContent className="pt-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="FileText" className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Сбор документов</h3>
              <p className="text-muted-foreground">
                Помогаем собрать и правильно оформить все необходимые документы
              </p>
            </CardContent>
          </Card>

          <Card className="relative group hover:shadow-xl transition-all">
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
              3
            </div>
            <CardContent className="pt-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Building" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Подача в банк</h3>
              <p className="text-muted-foreground">
                Отправляем заявку в несколько банков для максимальных шансов одобрения
              </p>
            </CardContent>
          </Card>

          <Card className="relative group hover:shadow-xl transition-all">
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
              4
            </div>
            <CardContent className="pt-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Key" className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Получение ключей</h3>
              <p className="text-muted-foreground">
                Сопровождаем сделку до получения ключей от вашего нового жилья
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
