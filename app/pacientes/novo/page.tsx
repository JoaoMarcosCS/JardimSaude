"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { PacienteForm } from "../components/forms/pacienteForm";
import Link from "next/link";

const NovoPaciente = () => {
  return(
    <section className="mt-2 items-center max-sm:w-full justify-center flex-col flex">
      <h1 className="text-2xl font-semibold text-green-500">Formulário de cadastro</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/pacientes">Pacientes</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/pacientes/novo">Cadastrar</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <PacienteForm/>
    </section>
  )
}

export default NovoPaciente;
