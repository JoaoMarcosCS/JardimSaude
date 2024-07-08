"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import FuncionarioForm from "../components/forms/funcionarioForm";
import Link from "next/link";

const NovoFuncionario = () => {
  return (
    <section className="mt-2 items-center max-sm:w-full justify-center flex-col flex">
      <h1 className="text-2xl font-semibold text-green-500">Formulário de contratação</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/funcionarios">Funcionários</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/funcionarios/novo">Contratar</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <FuncionarioForm />
    </section>
  )
}

export default NovoFuncionario;
