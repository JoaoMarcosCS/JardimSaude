import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { useTratamentosData } from "./useTratamentosData";
import CardSkeleton from "../../skeletons/cardSkeleton";

const TratamentoTable = () => {
  const {data, isLoading} = useTratamentosData();

  return(
    <>
    {isLoading ? (
      <CardSkeleton />
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
