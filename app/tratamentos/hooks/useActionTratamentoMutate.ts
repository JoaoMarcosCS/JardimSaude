import { useMutation, useQueryClient } from "@tanstack/react-query"
import actionTratamento from "../services/actionTratamento";

export function useActionTratamentoMutate(){
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: actionTratamento,
    onSuccess: () => {
      queryClient.invalidateQueries()
    }
  })

  return mutate;
}

