import { useMutation, useQueryClient } from "@tanstack/react-query"
import cancelarTratamento from "../services/cancelarTratamento"

export function useCancelarTratamentoMutate(){
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: cancelarTratamento,
    onSuccess: () => {
      queryClient.invalidateQueries()
    }
  })

  return mutate;
}


