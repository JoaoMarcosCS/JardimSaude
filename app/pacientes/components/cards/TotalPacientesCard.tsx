import { SquareUser } from "lucide-react";
import Link from "next/link";
import CardSkeleton from "@/app/skeletons/cardSkeleton";
import { useTotalPacientesByMedicoId } from "../../hooks/useTotalPacientesByMedicoId";
import CardDashboard from "@/app/(home)/components/cardsSecretaria/CardDashboard";

const TotalPacientesCard = () => {

  const { data, isLoading } = useTotalPacientesByMedicoId();

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <CardDashboard
          title="Pacientes"
          tooltipTextHelp={"Representa a quantidade de pacientes que já você já atendeu."}
          color={"text-emerald-500"}
          description={"Pacientes que já foram atendidos"}
          dataToDisplay={data}
          icon={<><SquareUser size={35} /></>}
        >
          <Link href={"/pacientes"} >Ver pacientes</Link>
        </CardDashboard>
      )}
    </>
  )
}

export default TotalPacientesCard
