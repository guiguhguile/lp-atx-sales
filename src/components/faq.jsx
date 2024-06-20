import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  return (
    <section className="w-full overflow-hidden py-20 mt-[200px]" id="faq">
      <div className="max-container padding-container flex justify-center gap-10">
        <div className="max-w-[500px] space-y-8">
          <h1 className="text-3xl font-bold">
            Lorem ipsum dolor, sit amet consectetur a
          </h1>

          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            doloremque reiciendis pariatur non saepe illum repellendus,
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
