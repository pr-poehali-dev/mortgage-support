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
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ApplicationFormSection = ({ onSubmit }: ApplicationFormSectionProps) => {
  const [showConsentDialog, setShowConsentDialog] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [pendingEvent, setPendingEvent] = useState<React.FormEvent<HTMLFormElement> | null>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const consentChecked = data.get('consent') === 'on';

    if (!consentChecked) {
      return;
    }

    setFormData(data);
    setPendingEvent(e);
    setShowConsentDialog(true);
  };

  const handleConfirmConsent = () => {
    if (pendingEvent) {
      setShowConsentDialog(false);
      onSubmit(pendingEvent);
      setFormData(null);
      setPendingEvent(null);
    }
  };

  const handleCancelConsent = () => {
    setShowConsentDialog(false);
    setFormData(null);
    setPendingEvent(null);
  };

  return (
    <>
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

      <Dialog open={showConsentDialog} onOpenChange={setShowConsentDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="Shield" size={24} className="text-primary" />
              Подтверждение согласия
            </DialogTitle>
            <DialogDescription className="text-left pt-4 space-y-3">
              <p>
                Нажимая кнопку "Подтверждаю", вы даёте согласие ИП Молоровой А.А. (ИНН 250811103854) 
                на обработку ваших персональных данных:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Имя: <strong>{formData?.get('name')}</strong></li>
                <li>Телефон: <strong>{formData?.get('phone')}</strong></li>
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
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover-gradient-shift"
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
