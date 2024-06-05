import { useMutation, useQueryClient } from "@tanstack/react-query";
import createAplicacao from "../services/createAplicacao";

export function useCriarAplicacaoMutate(){
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn:createAplicacao,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['tratamento-medico-data']})
    }
  })

  return mutate;
}
