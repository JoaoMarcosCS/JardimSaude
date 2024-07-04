"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import FuncionariosCard from "../(home)/components/cardsSecretaria/FuncionariosCard";
import MedicamentosTable from "./components/tables/MedicamentosTable";
import { useMedicamentosData } from "./hooks/useMedicamentosData";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Estoque = () => {
  return (
    <section className="container ">
      <div className="flex flex-wrap w-full justify-start items-center gap-4">

        <div className="">
          <h1 className="text-2xl text-green-500 font-bold">Estoque de medicamentos</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href="/estoque">Estoque</Link>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Button className="bg-emerald-600">
          <Link href="/shopping">+Comprar</Link>
        </Button>

      </div>
      <MedicamentosTable hookFetchData={useMedicamentosData()}/>
    </section>
  )
}

export default Estoque;
