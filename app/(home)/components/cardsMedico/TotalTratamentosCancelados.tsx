import CardSkeleton from "@/app/skeletons/cardSkeleton";
import { useTotalTratamentosCanceladosByMedicoId } from "@/app/tratamentos/hooks/useTotalTratamentosCanceladosByMedicoId";
import CardDashboard from "../cardsSecretaria/CardDashboard";
import { CircleX } from "lucide-react";

const CardTotalTratamentosCancelados = () => {

  const { data, isLoading } = useTotalTratamentosCanceladosByMedicoId();


  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <CardDashboard
          title="Tratamentos cancelados"
          tooltipTextHelp={"Representa o total de tratamentos que foram cancelados por você ou a pedido do paciente."}
          color={" text-red-400"}
          description={"Cancelados a pedido do paciente ou por você"}
          dataToDisplay={data}
          icon={<><CircleX size={35}/></>}
        >
        </CardDashboard>
      )}
    </>
  )
}

export default CardTotalTratamentosCancelados
