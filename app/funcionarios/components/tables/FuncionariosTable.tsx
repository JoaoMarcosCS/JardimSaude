import TableSkeleton from "@/app/skeletons/tabelSkeleton";
import { DataTable } from "./data-table";
import { UseQueryResult } from "@tanstack/react-query";
import "aos/dist/aos.css"
import AOS from "aos"
import React, { useEffect } from "react";
import { FuncionarioInterface } from "../../interfaces/funcionarioInterface";
import { columns } from "./columnsFuncionarios";

interface FuncionariosTableProps {
  hookFetchData: UseQueryResult<FuncionarioInterface[]>
}

const FuncionariosTable = ({hookFetchData}: FuncionariosTableProps) => {
  const {data, isLoading} = hookFetchData;

  const funcionariosData = data || [];

  useEffect(() => {
    AOS.init({});
  }, [])

  return(
    <>
    {isLoading ? (
      <TableSkeleton/>
    ) : (
      <section className="w-full" data-aos="fade-up">
        <DataTable columns={columns} data={funcionariosData} />
    </section>
    )}
  </>

  )
}

export default FuncionariosTable;
