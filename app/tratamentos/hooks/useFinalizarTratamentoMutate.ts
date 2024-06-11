import { useMutation, useQueryClient } from "@tanstack/react-query"
import finalizarTratamento from "../services/finalizarTratamento"
import cancelarTratamento from "../services/cancelarTratamento"

export function useFinalizarTratamentoMutate(){
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: finalizarTratamento,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['tratamento-medico-data', "tratamentos-finalizados-data-medicoId", "tratamentos-cancelados-data-medicoId", "tratamentos-EmAndamento-data-medicoId"]})
    }
  })

  return mutate;
}

