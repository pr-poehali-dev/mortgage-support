import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-muted-foreground">
            Ответы на популярные вопросы об ипотеке
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left hover:no-underline">
                Какие документы нужны для получения ипотеки?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Базовый пакет документов включает: паспорт, СНИЛС, справку о доходах (2-НДФЛ или по форме банка), 
                трудовую книжку или договор. Дополнительные документы зависят от выбранной программы и банка.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left hover:no-underline">
                Сколько времени занимает одобрение ипотеки?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Предварительное решение банк может принять за 1-3 дня. Полное одобрение с оценкой недвижимости 
                занимает обычно 7-14 дней. Мы помогаем ускорить этот процесс, правильно подготовив документы.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left hover:no-underline">
                Можно ли получить ипотеку с плохой кредитной историей?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, это возможно. Мы работаем с банками, которые учитывают не только кредитную историю, 
                но и текущее финансовое положение. В некоторых случаях можно улучшить условия с помощью 
                созаёмщика или увеличения первоначального взноса.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left hover:no-underline">
                Можно ли досрочно погасить ипотеку?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, по закону вы можете досрочно погасить ипотеку полностью или частично без штрафов. 
                Это позволит существенно сократить переплату по процентам. Мы поможем выбрать банк с 
                наиболее выгодными условиями досрочного погашения.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left hover:no-underline">
                Какой минимальный первоначальный взнос?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Минимальный первоначальный взнос по гос.программам от 20,1% от стоимости недвижимости. Для некоторых льготных программ требования могут быть выше. Чем больше первоначальный взнос, тем выгоднее условия кредита.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left hover:no-underline">
                Как вы помогаете с оформлением ипотеки?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Мы предоставляем полное сопровождение: консультируем по выбору программы, помогаем собрать 
                и правильно оформить документы, подаём заявки в несколько банков одновременно, сопровождаем 
                сделку до получения ключей. Наша цель - максимально упростить процесс для вас.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;