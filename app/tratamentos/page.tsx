"use client"

import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { RootState } from "../store/root-reducer";
import { useSelector } from "react-redux";
import TratamentoSecretaria from "./components/screens/tratamentoSecretaria";
import TratamentoMedico from "./components/screens/tratamentoMedico";
import Loading from "../laoding";
import TratamentosCard from "../(home)/components/cardsSecretaria/TratamentosCard";

const Tratamentos = () => {

  const { nivel } = useSelector((state: RootState) => state.usuarioReducer);

  return (
    <section className="container">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-green-500">
            Tratamentos
          </h1>
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
        {nivel === 1 &&
          <Button className="bg-emerald-600 text-sm">
            <Link href="/tratamentos/novo">+Novo</Link>
          </Button>
        }
        <TratamentosCard/>
      </div>
      {nivel === 1 ? (
        <TratamentoSecretaria />
      ) : nivel === 2 ? (
        <TratamentoMedico />
      ) : (
        <Loading />
      )}

    </section>
  )
}

export default Tratamentos;
