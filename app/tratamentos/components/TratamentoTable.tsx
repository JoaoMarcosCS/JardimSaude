import TableSkeleton from "@/app/skeletons/tabelSkeleton";
import { useTratamentosData } from "../hooks/useTratamentosData";
import { columns } from "./columnsTratamentos";
import { DataTable } from "./data-table";


const TratamentoTable = () => {
  const {data, isLoading} = useTratamentosData();

  return(
    <>
    {isLoading ? (
      <TableSkeleton/>
    ) : (
      <section className="w-full">
      <div className="container">
        <h1 className="font-bold text-2xl">Tratamentos</h1>
        <DataTable columns={columns} data={data!} />
      </div>
    </section>
    )}
  </>

  )
}

export default TratamentoTable;
