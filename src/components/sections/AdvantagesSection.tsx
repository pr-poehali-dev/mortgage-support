import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AdvantagesSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-orange-50/50 via-yellow-50/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,165,0,0.1),transparent_50%)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-full text-primary font-semibold text-sm mb-4">
            ✨ Наши преимущества
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Более 1000 довольных клиентов уже получили ипотеку с нашей помощью 🏆
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary bg-gradient-to-br from-background to-orange-50/20 backdrop-blur-sm group">
            <CardContent className="pt-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 mx-auto shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all icon-bounce">
                <Icon name="TrendingDown" className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Минимальные ставки</h3>
              <p className="text-foreground/70 text-center leading-relaxed">
                Работаем со всеми банками и подбираем программы с самыми низкими процентными ставками от 2%
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-accent bg-gradient-to-br from-background to-yellow-50/20 backdrop-blur-sm group">
            <CardContent className="pt-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 mx-auto shadow-lg shadow-accent/30 group-hover:shadow-xl group-hover:shadow-accent/50 transition-all icon-pulse">
                <Icon name="ThumbsUp" className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Высокое одобрение</h3>
              <p className="text-foreground/70 text-center leading-relaxed">
                94% заявок получают одобрение благодаря нашему опыту и знанию требований банков
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary bg-gradient-to-br from-background to-orange-50/20 backdrop-blur-sm group">
            <CardContent className="pt-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 mx-auto shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all icon-spin">
                <Icon name="Clock" className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Экономия времени</h3>
              <p className="text-foreground/70 text-center leading-relaxed">
                Берём на себя всю работу с документами и банками — вы экономите недели своего времени
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-accent bg-gradient-to-br from-background to-yellow-50/20 backdrop-blur-sm group">
            <CardContent className="pt-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 mx-auto shadow-lg shadow-accent/30 group-hover:shadow-xl group-hover:shadow-accent/50 transition-all icon-bounce">
                <Icon name="Users" className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Личный эксперт</h3>
              <p className="text-foreground/70 text-center leading-relaxed">
                Персональный менеджер сопровождает вас на каждом этапе — от консультации до получения ключей
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary bg-gradient-to-br from-background to-orange-50/20 backdrop-blur-sm group">
            <CardContent className="pt-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 mx-auto shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all icon-pulse">
                <Icon name="Shield" className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Безопасность сделки</h3>
              <p className="text-foreground/70 text-center leading-relaxed">
                Проверяем юридическую чистоту объекта и защищаем ваши интересы на всех этапах
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-accent bg-gradient-to-br from-background to-yellow-50/20 backdrop-blur-sm group">
            <CardContent className="pt-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 mx-auto shadow-lg shadow-accent/30 group-hover:shadow-xl group-hover:shadow-accent/50 transition-all icon-bounce">
                <Icon name="Gift" className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Бесплатная консультация</h3>
              <p className="text-foreground/70 text-center leading-relaxed">
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