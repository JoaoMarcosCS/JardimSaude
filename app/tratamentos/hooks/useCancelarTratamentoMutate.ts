import { useMutation, useQueryClient } from "@tanstack/react-query"
import cancelarTratamento from "../services/cancelarTratamento"

export function useCancelarTratamentoMutate(){
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: cancelarTratamento,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['tratamento-medico-data', "tratamentos-finalizados-data-medicoId", "tratamentos-cancelados-data-medicoId", "tratamentos-EmAndamento-data-medicoId"]})
    }
  })

  return mutate;
}


