"use client"

import { useShoppingData } from "./hooks/useShoppingData"
import AOS from "aos"
import "aos/dist/aos.css"
import { SetStateAction, useEffect, useState } from "react"
import CardShopping from "./components/cards/CardShopping"
import { Loader2, PillIcon, Siren } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"
import useShoppingHandlers from "./hooks/useShoppingHandlers"

const Shopping = () => {

  const { filtredMedicamentos, search, handleSearchChange, isFiltring, isLoading } = useShoppingHandlers();

  useEffect(() => {
    AOS.init({});
  }, []);


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
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Pesquisar Morfina, Dopamina...."
          className="border-b outline-none border-emerald-100  px-2 py-2 rounded"
        />
      </div>

      {isLoading && (
        <div className="font-bold mt-2 text-lg text-green-500 w-full flex justify-center items-center flex-col">
          <PillIcon className="animate-spin" />
          <h1>Carregando medicamentos...</h1>
        </div>
      )}

      {filtredMedicamentos?.length === 0 && !isLoading && (
        <div className="font-bold mt-4 text-lg text-green-500 w-full flex justify-center items-center flex-col">
          <Siren />
          <h1>Nenhum medicamento encontrado com o nome
            <span className="italic">&ldquo;{search}&rdquo;</span>
          </h1>
        </div>
      )}
      {!isLoading && (
        <div className="flex w-full justify-center flex-wrap items-center gap-4 px-4 mt-4">
          {filtredMedicamentos?.map((medicamento) => (
            <CardShopping medicamento={medicamento} key={medicamento.id} />
          ))}
        </div>
      )}

    </section>
  )
}

export default Shopping;
