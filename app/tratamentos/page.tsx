"use client"

import { Button } from "@/components/ui/button";
import TratamentoTable from "./components/TratamentoTable";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useTratamentosData } from "./hooks/useTratamentosData";
import { RootState } from "../store/root-reducer";
import { useSelector } from "react-redux";
import { useMedicoTratamentoData } from "./hooks/useMedicoTratamentoData";

const Tratamentos = () => {

  const { nivel } = useSelector((state: RootState) => state.usuarioReducer);

  return (
    <section className="container">
      <div className="flex flex-row items-center gap-4">
        <h1 className="font-bold text-2xl text-green-500">Tratamentos</h1>
        <Button className="bg-emerald-400 text-sm">
        <Link href="/tratamentos/novoTratamento">+Novo</Link>
        </Button>

      </div>
      <div className="py-1">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href="/tratamentos">Tratamentos</Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {
        (nivel===1) ? (
          <TratamentoTable hookFetchData={useTratamentosData()} />
        ) : (
          <TratamentoTable hookFetchData={useMedicoTratamentoData()} />
        )
      }

    </section>
  )
}

export default Tratamentos;
