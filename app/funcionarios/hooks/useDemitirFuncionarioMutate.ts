import { useMutation, useQueryClient } from "@tanstack/react-query"
import demitirFuncionario from "../services/demitirFuncionario";

export function useDemitirFuncionarioMutate(){
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: demitirFuncionario,
    onSuccess: () => {
      queryClient.invalidateQueries()
    }
  })

  return mutate;
}


