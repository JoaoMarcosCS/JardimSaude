import { useMutation, useQueryClient } from "@tanstack/react-query"
import finalizarTratamento from "../services/finalizarTratamento"
import cancelarTratamento from "../services/cancelarTratamento"

export function useFinalizarTratamentoMutate(){
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: finalizarTratamento,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['tratamento-medico-data']})
    }
  })

  return mutate;
}

