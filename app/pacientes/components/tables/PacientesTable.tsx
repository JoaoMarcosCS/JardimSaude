import TableSkeleton from "@/app/skeletons/tabelSkeleton";
import { DataTable } from "./data-table";
import { UseQueryResult } from "@tanstack/react-query";
import "aos/dist/aos.css"
import AOS from "aos"
import React, { useEffect } from "react";
import { Paciente } from "../../interfaces/Paciente";
import { columns } from "./columnsPacientes";

interface PacientesTableProps {
  hookFetchData: UseQueryResult<Paciente[]>
}

const PacientesTable = ({hookFetchData}: PacientesTableProps) => {
  const {data, isLoading} = hookFetchData;

  const pacientesData = data || [];

  useEffect(() => {
    AOS.init({});
  }, [])

  return(
    <>
    {isLoading ? (
      <TableSkeleton/>
    ) : (
      <section className="w-full" data-aos="fade-up">
        <DataTable columns={columns} data={pacientesData} />
    </section>
    )}
  </>

  )
}

export default PacientesTable;
