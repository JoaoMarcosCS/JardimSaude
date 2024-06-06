import { Stethoscope } from "lucide-react";
import Link from "next/link";
import { useTotalTratamentos } from "@/app/(home)/hooks/useTotalTratamentos";
import CardDashboard from "./CardDashboard";
import CardSkeleton from "@/app/skeletons/cardSkeleton";

const TratamentosCard = () => {

  const { data, isLoading } = useTotalTratamentos();

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <CardDashboard
          title="Tratamentos realizados"
          tooltipTextHelp={"Essa é a quantidade de tratamentos realizados pelo Jardim Saúde desde o seu início, em 31/12/2022."}
          color={"text-cyan-500"}
          description={"Tratamentos realizados desde 31/12/2022"}
          dataToDisplay={data}
          icon={<><Stethoscope size={35} /></>}
        >
          <Link href={"#"} >Ver tratamentos</Link>
        </CardDashboard>
      )}
    </>
  )
}

export default TratamentosCard
