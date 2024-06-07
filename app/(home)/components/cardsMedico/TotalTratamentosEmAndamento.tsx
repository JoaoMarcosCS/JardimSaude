import CardSkeleton from "@/app/skeletons/cardSkeleton";
import { useTotalTratamentosEmAndamentoByMedicoId } from "@/app/tratamentos/hooks/useTotalTratamentosEmAndamentoByMedicoId";
import CardDashboard from "../cardsSecretaria/CardDashboard";
import { Activity } from "lucide-react";

const CardTotalTratamentosEmAndamento = () => {

  const { data, isLoading } = useTotalTratamentosEmAndamentoByMedicoId();


  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <CardDashboard
          title="Tratamentos em andamento"
          tooltipTextHelp={"Representa o total de tratamentos que você ainda não finalizou ou cancelou."}
          color={" text-yellow-400"}
          description={"Tratamentos que ainda estão em andamento"}
          dataToDisplay={data}
          icon={<><Activity size={35}/></>}
        >
        </CardDashboard>
      )}
    </>
  )
}

export default CardTotalTratamentosEmAndamento
