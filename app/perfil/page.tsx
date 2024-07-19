"use client";

import { useFuncionarioDetailsData } from "../funcionarios/hooks/useFuncionarioDetailsData";
import getCookies from "../utils/getCookies";
import Loading from "../laoding";
import { UserInfo } from "./components/UserInfo";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";

const Perfil = () => {
  const { id } = getCookies()

  const { data, isLoading } = useFuncionarioDetailsData(id);

  const user = data!
  
  return (
    <section className="mt-2 items-center max-sm:w-full justify-center flex-col flex">
      <h1 className="text-2xl font-semibold text-green-500">Seu perfil</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href="/perfil">Perfil</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {
        isLoading ? (
          <Loading />
        ) :  (
          <UserInfo user={user} />
        )
      }
    </section>

  )
}

export default Perfil;
