import { useMutation, useQueryClient } from "@tanstack/react-query";
import purchaseMedicamento from "../services/purchaseMedicamento";

export function usePurchaseMedicamento(){
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: purchaseMedicamento,
    onSuccess:() => {
      queryClient.invalidateQueries();
    }
  })

  return mutate;
}
