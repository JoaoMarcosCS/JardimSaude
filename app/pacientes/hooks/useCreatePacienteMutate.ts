import { useMutation, useQueryClient } from "@tanstack/react-query"
import createPaciente from "../services/createPaciente";

export function useCreatePacienteMutate(){
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: createPaciente,
    onSuccess: () => {
      queryClient.invalidateQueries()
    }
  })

  return mutate;
}

