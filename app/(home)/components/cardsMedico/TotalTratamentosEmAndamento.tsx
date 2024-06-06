import CardSkeleton from "@/app/skeletons/cardSkeleton";
import { useTotalTratamentosEmAndamentoByMedicoId } from "@/app/tratamentos/hooks/useTotalTratamentosEmAndamentoByMedicoId";
import CardDashboard from "../cardsSecretaria/CardDashboard";

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
        >
        </CardDashboard>
      )}
    </>
  )
}

export default CardTotalTratamentosEmAndamento
