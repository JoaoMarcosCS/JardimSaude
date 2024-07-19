import { useForm } from "react-hook-form";
import { PerfilFormProps, perfilFormSchema } from "../perfilFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useUpdatePersonalDataMutate } from "./useUpdatePersonalDataMutate";


export const usePerfilFormHandlers = (user:PerfilFormProps) => {
  const {
    register,
    formState:{
      errors,
      isSubmitting
    },
    handleSubmit,
    control,
    watch,
  } = useForm<PerfilFormProps>({
    resolver: zodResolver(perfilFormSchema),
    mode:"all",
    reValidateMode:"onChange",
    defaultValues:user
  })

  const {mutate, isSuccess} = useUpdatePersonalDataMutate();
  const {push} = useRouter();

  const handleEditPersonalData = async (data: PerfilFormProps) => {
    mutate(data);
    if(isSuccess){
      toast.success("Informações alteradas com sucesso");
      push('/');
    }
  }

  return {
    register,
    handleSubmit,
    handleEditPersonalData,
    errors,
    control,
    watch,
    isSubmitting
  }
}
