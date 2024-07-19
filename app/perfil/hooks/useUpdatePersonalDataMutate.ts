import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updatePersonalData } from "../services/updatePersonalData";

export function useUpdatePersonalDataMutate(){
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: updatePersonalData,
    onSuccess: () => {
      queryClient.invalidateQueries()
    }
  })

  return mutate;
}

