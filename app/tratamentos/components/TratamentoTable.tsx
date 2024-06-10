import TableSkeleton from "@/app/skeletons/tabelSkeleton";
import { useTratamentosData } from "../hooks/useTratamentosData";
import { columns } from "./columnsTratamentos";
import { DataTable } from "./data-table";
import {Tratamento} from "../interfaces/tratamentoInterface"
import { UseQueryResult } from "@tanstack/react-query";

interface TratamentoTableProps {
  hookFetchData: UseQueryResult<Tratamento[]>
}

const TratamentoTable = ({hookFetchData}: TratamentoTableProps) => {
  const {data, isLoading} = hookFetchData;

  const tratamentoData = data || [];

  return(
    <>
    {isLoading ? (
      <TableSkeleton/>
    ) : (
      <section className="w-full" data-aos="fade-up">
        <DataTable columns={columns} data={tratamentoData} />
    </section>
    )}
  </>

  )
}

export default TratamentoTable;
