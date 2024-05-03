"use client"

import { Button } from "@/components/ui/button";
import TratamentoTable from "./components/TratamentoTable";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";

const Tratamentos = () => {

  return (
    <section className="container">
      <div className="flex flex-row items-center gap-4">
        <h1 className="font-bold text-2xl text-green-500">Tratamentos</h1>
        <Button className="bg-emerald-400 text-sm">+Novo</Button>
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
      <TratamentoTable />
    </section>
  )
}

export default Tratamentos;
