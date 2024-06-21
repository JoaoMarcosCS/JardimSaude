"use client"

import { useShoppingData } from "./hooks/useShoppingData"
import AOS from "aos"
import "aos/dist/aos.css"
import { SetStateAction, useEffect, useState } from "react"
import CardShopping from "./components/cards/CardShopping"
import { Loader2 } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"
import useShoppingHandlers from "./hooks/useShoppingHandlers"

const Shopping = () => {
  const { shoppingData, isLoading, searchMedicamentos, defaultShopping } = useShoppingHandlers()

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      searchMedicamentos(search);
    } else {
      defaultShopping();
    }
  }, [search]);

  useEffect(() => {
    AOS.init({});
  }, []);

  const handleInputChange = (event:any) => {
    setSearch(event.target.value);
  };

  return (
    <section className="">
      <h1 className="font-bold text-2xl text-green-500 w-full text-center">Shopping</h1>
      <div className="py-1 w-full flex justify-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href="/shopping">Shopping</Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex w-full justify-center items-center gap-2">
      <label htmlFor="" className="">Pesquisar medicamento: </label>
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Morfina, dopamina...."
        className="border-b border-r border-emerald-100  px-2 py-2 rounded"
      />
      </div>

      {isLoading && (
        <div className="font-bold mt-2 text-lg text-green-500 w-full flex justify-center items-center flex-col">
          <Loader2 className="animate-spin" />
          <h1>Carregando medicamentos...</h1>
        </div>
      )}
      {!isLoading && shoppingData && (
        <div className="flex w-full justify-center flex-wrap items-center gap-4 px-4 mt-4">
          {shoppingData.map((medicamento) => (
            <CardShopping medicamento={medicamento} key={medicamento.id} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Shopping;
