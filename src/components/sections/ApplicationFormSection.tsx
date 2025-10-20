import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface ApplicationFormSectionProps {
  onSubmit: (name: string, phone: string) => void;
}

const ApplicationFormSection = ({ onSubmit }: ApplicationFormSectionProps) => {
  const [showConsentDialog, setShowConsentDialog] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [formElement, setFormElement] = useState<HTMLFormElement | null>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const consentChecked = data.get('consent') === 'on';

    if (!consentChecked) {
      return;
    }

    setName(data.get('name') as string);
    setPhone(data.get('phone') as string);
    setFormElement(e.currentTarget);
    setShowConsentDialog(true);
  };

  const handleConfirmConsent = () => {
    setShowConsentDialog(false);
    onSubmit(name, phone);
    if (formElement) {
      formElement.reset();
    }
    setName('');
    setPhone('');
    setFormElement(null);
  };

  const handleCancelConsent = () => {
    setShowConsentDialog(false);
    setName('');
    setPhone('');
    setFormElement(null);
  };

  return (
    <>
      <section id="application-form" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
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
                <form onSubmit={handleFormSubmit} className="space-y-6">
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
                    <Checkbox id="consent" name="consent" required className="mt-1" />
                    <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Я согласен на обработку персональных данных и принимаю условия{' '}
                      <Link to="/privacy" className="text-primary hover:underline" target="_blank">
                        политики конфиденциальности
                      </Link>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-gradient-to-r from-primary to-accent hover-gradient-shift text-lg py-6 pulse-button"
                    >
                      Отправить заявку
                      <Icon name="Send" className="ml-2" size={20} />
                    </Button>
                    
                    <Button 
                      type="button"
                      size="lg"
                      variant="outline"
                      className="text-lg py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      onClick={() => window.location.href = 'tel:+79241358300'}
                    >
                      <Icon name="Phone" className="mr-2" size={20} />
                      Позвонить
                    </Button>
                  </div>

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

      <Dialog open={showConsentDialog} onOpenChange={setShowConsentDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="Shield" size={24} className="text-primary" />
              Подтверждение согласия
            </DialogTitle>
            <DialogDescription className="text-left pt-4 space-y-3">
              <p>
                Нажимая кнопку "Подтверждаю", вы даёте согласие ИП Молоровой А.А. (ИНН 250811103854, ОГРНИП 322253600056907) 
                на обработку ваших персональных данных:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Имя: <strong>{name}</strong></li>
                <li>Телефон: <strong>{phone}</strong></li>
              </ul>
              <p className="text-sm">
                Ваши данные будут использованы исключительно для связи с вами по вопросам ипотечного 
                кредитования и не будут переданы третьим лицам без вашего согласия.
              </p>
              <p className="text-sm">
                Подробнее о защите персональных данных читайте в{' '}
                <Link to="/privacy" className="text-primary hover:underline" target="_blank">
                  политике конфиденциальности
                </Link>
                .
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancelConsent}
              className="w-full sm:w-auto"
            >
              Отменить
            </Button>
            <Button
              type="button"
              onClick={handleConfirmConsent}
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover-gradient-shift pulse-button"
            >
              <Icon name="Check" size={18} className="mr-2" />
              Подтверждаю
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ApplicationFormSection;