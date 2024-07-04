import TableSkeleton from "@/app/skeletons/tabelSkeleton";
import { DataTable } from "./data-table";
import { UseQueryResult } from "@tanstack/react-query";
import "aos/dist/aos.css"
import AOS from "aos"
import React, { useEffect } from "react";
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import { columns } from "./columnsMedicamentos";

interface MedicamentosTableProps {
  hookFetchData: UseQueryResult<Medicamento[]>
}

const MedicamentosTable = ({hookFetchData}: MedicamentosTableProps) => {
  const {data, isLoading} = hookFetchData;

  const medicamentosData = data || [];

  useEffect(() => {
    AOS.init({});
  }, [])

  return(
    <>
    {isLoading ? (
      <TableSkeleton/>
    ) : (
      <section className="w-full" data-aos="fade-up">
        <DataTable columns={columns} data={medicamentosData} />
    </section>
    )}
  </>

  )
}

export default MedicamentosTable;
