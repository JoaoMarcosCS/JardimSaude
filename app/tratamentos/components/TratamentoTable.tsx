import TableSkeleton from "@/app/skeletons/tabelSkeleton";
import { useTratamentosData } from "../hooks/useTratamentosData";
import { columns } from "./columnsTratamentos";
import { DataTable } from "./data-table";


const TratamentoTable = () => {
  const {data, isLoading} = useTratamentosData();

  const tratamentoData = data || [];

  return(
    <>
    {isLoading ? (
      <TableSkeleton/>
    ) : (
      <section className="w-full">
        <DataTable columns={columns} data={tratamentoData} />
    </section>
    )}
  </>

  )
}

export default TratamentoTable;
