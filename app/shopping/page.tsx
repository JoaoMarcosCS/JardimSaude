"use client"


import { useShoppingData } from "./hooks/useShoppingData"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import CardShopping from "./components/cards/CardShopping"
import { Loader2 } from "lucide-react"

const Shopping = () => {
  const {data, isLoading} = useShoppingData()

  useEffect(() => {
    AOS.init({});
  }, [])

  return(
    <section className="">
      <h1 className="font-bold text-2xl text-green-500 w-full text-center">Shopping</h1>
      {isLoading && (
        <div className="font-bold mt-2 text-lg text-green-500 w-full flex justify-center items-center flex-col">
          <Loader2 className="animate-spin"/>
          <h1>Carregando medicamentos...</h1>
        </div>
      )}
      {data && (
        <div className="flex w-full justify-center flex-wrap items-center gap-4 px-4 mt-4">
          {data.map((medicamento) => (
            <CardShopping medicamento={medicamento} key={medicamento.id}/>
          ))}
        </div>
      )}
    </section>
  )
}

export default Shopping;
