import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  return (
    <section className="w-full overflow-hidden py-20 mt-[100px]" id="faq">
      <div className="max-container padding-container flex lg:flex-row flex-col justify-center gap-10">
        <div className="max-w-[500px] space-y-8">
          <h1 className="text-3xl font-bold">Perguntas Frequentes (FAQ)</h1>

          <p className="">
            Tire suas dúvidas e saiba mais sobre como nosso sistema de gestão
            pode beneficiar sua empresa.
          </p>
        </div>

        <Accordion type="single" collapsible className="lg:w-[70%] w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
