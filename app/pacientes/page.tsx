"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PacientesCard from "../(home)/components/cardsSecretaria/PacientesCard";
import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";
import PacientesTable from "./components/tables/PacientesTable";
import { usePacientesByMedicoIdData } from "./hooks/usePacientesByMedicoIdData";
import { usePacientesData } from "./hooks/usePacientesData";
import TotalPacientesCard from "./components/cards/TotalPacientesCard";

const Pacientes = () => {

  const { nivel } = useSelector((state: RootState) => state.usuarioReducer);

  return (
    <section className="container ">
      <div className="flex flex-wrap w-full justify-start items-center gap-4">

        <div className="">
          <h1 className="text-2xl text-green-500 font-bold">Pacientes</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href="/pacientes">Funcionários</Link>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {nivel === 1 ? (
          <>
            <Button className="bg-emerald-600">
              <Link href="/pacientes/novo">+Cadastrar</Link>
            </Button>
            <PacientesCard/>
          </>
        ) : (
          <TotalPacientesCard />
        )

        }

      </div>
      {
        nivel === 1 ? (
          <PacientesTable hookFetchData={usePacientesData()} />
        ) : (
          <PacientesTable hookFetchData={usePacientesByMedicoIdData()} />
        )
      }
    </section>
  )
}

export default Pacientes
