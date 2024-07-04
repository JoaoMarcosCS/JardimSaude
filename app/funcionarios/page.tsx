"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FuncionariosCard from "../(home)/components/cardsSecretaria/FuncionariosCard";
import FuncionariosTable from "./components/tables/FuncionariosTable";
import { useFuncionariosData } from "./hooks/useFuncionariosData";

const Funcionarios = () => {

  return (
    <section className="w-full ">
      <div className="flex flex-wrap w-full justify-start items-center gap-4">

        <div className="">
          <h1 className="text-2xl text-green-500 font-bold">Quadro de funcionários</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href="/funcionarios">Funcionários</Link>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Button className="bg-emerald-600">
          <Link href="/funcionarios/novo">+Contratar</Link>
        </Button>
        
        <FuncionariosCard/>

      </div>
      <FuncionariosTable hookFetchData={useFuncionariosData()}/>
    </section>
  )
}

export default Funcionarios;
