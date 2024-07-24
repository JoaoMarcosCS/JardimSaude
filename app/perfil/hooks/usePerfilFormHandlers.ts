import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useUpdatePersonalDataMutate } from "./useUpdatePersonalDataMutate";
import { PerfilFormProps, perfilFormSchema } from "../schemas/perfilFormSchema";


export const usePerfilFormHandlers = (user: PerfilFormProps) => {
  const {
    register,
    formState: {
      errors,
      isSubmitting
    },
    handleSubmit,
    control,
    watch,
  } = useForm<PerfilFormProps>({
    resolver: zodResolver(perfilFormSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: user
  })

  const { mutate, isPending } = useUpdatePersonalDataMutate();
  const { push } = useRouter();

  const handleEditPersonalData = async (data: PerfilFormProps) => {

    mutate(data);
    console.log("estou aqui")
    toast.success("Informações alteradas com sucesso");
    push("/perfil");
  }

  return {
    register,
    handleSubmit,
    handleEditPersonalData,
    errors,
    isPending,
    control,
    watch,
    isSubmitting
  }
}
