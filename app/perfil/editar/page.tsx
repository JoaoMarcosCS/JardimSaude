"use client";

import { useFuncionarioDetailsData } from "@/app/funcionarios/hooks/useFuncionarioDetailsData";
import Loading from "@/app/laoding";
import getCookies from "@/app/utils/getCookies";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { UserInfo } from "../components/UserInfo";
import { UserForm } from "../components/forms/UserForm";

const EditPersonalData = () => {
  const { id } = getCookies()
  const { data, isLoading } = useFuncionarioDetailsData(id);

  const user = data!;

  return (
    <section className="mt-2 items-center max-sm:w-full justify-center flex-col flex">
      <h1 className="text-2xl font-semibold text-green-500">Editar perfil</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/perfil">Perfil</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/perfil/editar">Editar</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {
        isLoading ? (
          <Loading />
        ) : (
          <UserForm user={user} />
        )
      }
    </section>
  )
}

export default EditPersonalData;

