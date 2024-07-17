import { SquareUser } from "lucide-react";
import Link from "next/link";
import { useTotalPacientes } from "@/app/(home)/hooks/useTotalPacientes";

import CardDashboard from "./CardDashboard";
import CardSkeleton from "@/app/skeletons/cardSkeleton";

const PacientesCard = () => {

  const { data, isLoading } = useTotalPacientes();

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <CardDashboard
          title="Pacientes"
          tooltipTextHelp={"Representa a quantidade de pacientes que já foram atendidos por nossa instaituição."}
          color={"text-emerald-500"}
          description={"Pacientes que já foram atendidos"}
          dataToDisplay={data}
          icon={<><SquareUser size={35} /></>}
        >
          <Link href={"/pacientes"} >Ver pacientes</Link>
          <Link href={"/pacientes/novo"}>Cadastrar</Link>
        </CardDashboard>
      )}
    </>
  )
}

export default PacientesCard
