import CardSkeleton from "@/app/skeletons/cardSkeleton";
import { useTotalTratamentosByMedicoId } from "@/app/tratamentos/hooks/useTotalTratamentosByMedicoId";
import CardDashboard from "../cardsSecretaria/CardDashboard";

const CardTotalTratamentosRealizados = () => {

  const { data, isLoading } = useTotalTratamentosByMedicoId();


  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <CardDashboard
          title="Tratamentos realizados"
          tooltipTextHelp={"Representa o total de tratamentos que você finalizou e cancelou."}
          color={" text-emerald-500"}
          description={"Tratamentos cancelados e finalizados"}
          dataToDisplay={data}
        >
        </CardDashboard>
      )}
    </>
  )
}

export default CardTotalTratamentosRealizados
