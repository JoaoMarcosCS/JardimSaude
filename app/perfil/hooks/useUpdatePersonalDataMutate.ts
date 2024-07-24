import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updatePersonalData } from "../services/updatePersonalData";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function useUpdatePersonalDataMutate(){
  const queryClient = useQueryClient()
  const { push } = useRouter();
  const mutate = useMutation({
    mutationFn: updatePersonalData,
    onSuccess: () => {
      queryClient.invalidateQueries(),
      toast.success("Informações alteradas com sucesso");
      push("/perfil");
    }
  })

  return mutate;
}

