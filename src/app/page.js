import Image from "next/image";
import {Accordion, AccordionContent, AccordionTrigger, AccordionItem} from "@/components/ui/accordion";

export default function Home() {
  return (
      <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
              <AccordionTrigger>Item 1</AccordionTrigger>
              <AccordionContent>
                  Aqui está o conteúdo do item 1.
              </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
              <AccordionTrigger>Item 2</AccordionTrigger>
              <AccordionContent>
                  Aqui está o conteúdo do item 2.
              </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
              <AccordionTrigger>Item 3</AccordionTrigger>
              <AccordionContent>
                  Aqui está o conteúdo do item 3.
              </AccordionContent>
          </AccordionItem>
      </Accordion>
  );
}
