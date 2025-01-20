import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export default function BusinessDescription() {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 py-12 border-b border-black">
      <div className="space-y-6">
        <h2 className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl">
          Sobre Nosotros
        </h2>
        <p className="text-sm text-muted-foreground text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          illo, laudantium repellat, assumenda ullam velit magnam ab voluptatem
          mollitia accusamus alias porro non soluta laborum modi dicta et eaque
          accusantium! Voluptates exercitationem, officia veritatis incidunt
          vitae voluptatum ipsam eius eaque?
        </p>
      </div>
      <div className="space-y-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Nuestra Misión</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Nuestros valores</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. Its animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
