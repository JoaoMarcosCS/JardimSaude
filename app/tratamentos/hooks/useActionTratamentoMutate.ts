import { useMutation, useQueryClient } from "@tanstack/react-query"
import actionTratamento from "../services/actionTratamento";

export function useActionTratamentoMutate(){
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: actionTratamento,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['tratamento-medico-data', "tratamentos-finalizados-data-medicoId", "tratamentos-cancelados-data-medicoId", "tratamentos-EmAndamento-data-medicoId"]})
    }
  })

  return mutate;
}

