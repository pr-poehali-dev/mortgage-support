import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/a4a9e5b6-b1a0-494c-ad84-e97aa91e5da1.png" 
              alt="МангоДом" 
              className="h-12 w-auto"
            />
          </div>
          <Button onClick={() => navigate('/')} variant="outline" className="gap-2">
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Политика конфиденциальности
        </h1>

        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении 
              всей информации, которую ИП Молорова А.А. (ИНН 250811103854), расположенная на доменном имени данного сайта, 
              может получить о Пользователе во время использования сайта.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">2. Определения терминов</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).</li>
              <li><strong>Обработка персональных данных</strong> — любое действие (операция) или совокупность действий с использованием средств автоматизации или без использования таких средств с персональными данными.</li>
              <li><strong>Конфиденциальность персональных данных</strong> — обязательное для соблюдения требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">3. Какую информацию мы собираем</h2>
            <p className="mb-2">При использовании сайта мы можем собирать следующую информацию:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Имя и фамилия</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Информация о желаемых параметрах ипотеки</li>
              <li>Технические данные: IP-адрес, тип браузера, время доступа</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">4. Цели сбора информации</h2>
            <p className="mb-2">Мы используем ваши персональные данные для:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Предоставления консультаций по ипотечным программам</li>
              <li>Связи с вами для обсуждения условий ипотеки</li>
              <li>Подбора наиболее подходящих предложений</li>
              <li>Улучшения качества наших услуг</li>
              <li>Отправки информационных материалов (с вашего согласия)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Защита персональных данных</h2>
            <p>
              Мы принимаем необходимые организационные и технические меры для защиты персональных данных от 
              несанкционированного или случайного доступа, уничтожения, изменения, блокирования, копирования, 
              распространения, а также от иных неправомерных действий третьих лиц.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Передача данных третьим лицам</h2>
            <p>
              Мы не передаем ваши персональные данные третьим лицам без вашего явного согласия, за исключением 
              случаев, когда это необходимо для оказания услуги (например, передача данных в банки для одобрения 
              ипотеки) или требуется законодательством Российской Федерации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">7. Ваши права</h2>
            <p className="mb-2">Вы имеете право:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Получать информацию о наличии и содержании ваших персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия или бездействие в Роскомнадзоре</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">8. Использование cookies</h2>
            <p>
              Наш сайт использует файлы cookies для улучшения работы сайта и предоставления более персонализированного 
              опыта. Вы можете настроить свой браузер для отклонения всех или некоторых файлов cookie или для 
              получения уведомления при их отправке.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">9. Изменения в Политике конфиденциальности</h2>
            <p>
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
              При внесении изменений в актуальной редакции указывается дата последнего обновления. 
              Новая редакция Политики вступает в силу с момента ее размещения.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">10. Контактная информация</h2>
            <p className="mb-2">По вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:</p>
            <ul className="space-y-2">
              <li><strong>Телефон:</strong> <a href="tel:+79241358300" className="text-primary hover:underline">8-924-135-83-00</a></li>
              <li><strong>Email:</strong> <a href="mailto:amolorova@inbox.ru" className="text-primary hover:underline">amolorova@inbox.ru</a></li>
            </ul>
          </section>

          <section className="pt-4 border-t">
            <p className="text-sm">
              <strong>Дата последнего обновления:</strong> 16 октября 2025 года
            </p>
            <p className="text-sm mt-2">
              <strong>ИП Молорова А.А.</strong><br />
              ИНН: 250811103854
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Button onClick={() => navigate('/')} size="lg" className="bg-gradient-to-r from-primary to-accent hover-gradient-shift">
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
