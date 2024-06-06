import CardSkeleton from "@/app/skeletons/cardSkeleton";
import { useTotalTratamentosFinalizadosByMedicoId } from "@/app/tratamentos/hooks/useTotalTratamentosFinalizadosByMedicoId";
import CardDashboard from "../cardsSecretaria/CardDashboard";

const CardTotalTratamentosFinalizados = () => {

  const { data, isLoading } = useTotalTratamentosFinalizadosByMedicoId();


  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <CardDashboard
          title="Tratamentos finalizados"
          tooltipTextHelp={"Representa o total de tratamentos que você foram bem-sucedidos e você os finalizou."}
          color={" text-green-500"}
          description={"Finalizados de forma bem-sucedida"}
          dataToDisplay={data}
        >
        </CardDashboard>
      )}
    </>
  )
}

export default CardTotalTratamentosFinalizados
