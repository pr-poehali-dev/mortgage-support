import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AdvantagesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-orange-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 1000 довольных клиентов уже получили ипотеку с нашей помощью
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary">
            <CardContent className="pt-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 mx-auto">
                <Icon name="TrendingDown" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Минимальные ставки</h3>
              <p className="text-muted-foreground text-center">
                Работаем со всеми банками и подбираем программы с самыми низкими процентными ставками от 2%
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-accent">
            <CardContent className="pt-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 mx-auto">
                <Icon name="ThumbsUp" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Высокое одобрение</h3>
              <p className="text-muted-foreground text-center">
                94% заявок получают одобрение благодаря нашему опыту и знанию требований банков
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary">
            <CardContent className="pt-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 mx-auto">
                <Icon name="Clock" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Экономия времени</h3>
              <p className="text-muted-foreground text-center">
                Берём на себя всю работу с документами и банками — вы экономите недели своего времени
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-accent">
            <CardContent className="pt-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 mx-auto">
                <Icon name="Users" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Личный эксперт</h3>
              <p className="text-muted-foreground text-center">
                Персональный менеджер сопровождает вас на каждом этапе — от консультации до получения ключей
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary">
            <CardContent className="pt-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 mx-auto">
                <Icon name="Shield" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Безопасность сделки</h3>
              <p className="text-muted-foreground text-center">
                Проверяем юридическую чистоту объекта и защищаем ваши интересы на всех этапах
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-accent">
            <CardContent className="pt-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 mx-auto">
                <Icon name="Gift" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Бесплатная консультация</h3>
              <p className="text-muted-foreground text-center">
                Первичная консультация и расчёт ипотеки абсолютно бесплатно — оцените наш сервис без рисков
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
