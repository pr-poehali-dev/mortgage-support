import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface ApplicationFormSectionProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ApplicationFormSection = ({ onSubmit }: ApplicationFormSectionProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Оставьте заявку
              </CardTitle>
              <CardDescription className="text-base">
                Мы перезвоним в течение 30 минут и подберём лучшие условия
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Анна" 
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67" 
                    required
                    className="h-12"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox id="consent" required className="mt-1" />
                  <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    Я согласен на обработку персональных данных и принимаю условия политики конфиденциальности
                  </label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover-gradient-shift text-lg py-6"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>

                <div className="flex items-center justify-center gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Shield" size={16} className="text-primary" />
                    <span>Безопасно</span>
                  </div>
                  <div className="h-4 w-px bg-border"></div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Lock" size={16} className="text-primary" />
                    <span>Конфиденциально</span>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationFormSection;
