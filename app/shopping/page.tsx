"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useShoppingData } from "./hooks/useShoppingData"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Shopping = () => {
  const {data, isLoading} = useShoppingData()

  useEffect(() => {
    AOS.init({});
  }, [])

  return(
    <section>
      {isLoading && (
        <h1>Carregando medicamentos</h1>
      )}
      {data && (
        <div>
          {data.map((medicamento) => (
            <div data-aos="fade-up">
            <p>{medicamento.nome}</p>
            <p>Preço: {medicamento.valor_unitario}</p>
            <Accordion type="single" collapsible className="w-full ">
              <AccordionItem value="item-1" className="">
                <AccordionTrigger>Descrição</AccordionTrigger>
                <AccordionContent className="border-2 rounded border-slate-200 p-2">
                  {medicamento.descricao}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Shopping;
