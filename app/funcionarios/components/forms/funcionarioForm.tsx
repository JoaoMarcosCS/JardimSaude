import { Label } from "@/components/ui/label";
import {useFuncionarioFormHandlers} from "../../hooks/useFuncionarioFormHandlers"
import { useMultiPartFormHandlers } from "../../hooks/useMultiPartFormHandlers";
import { InputField } from "../inputs/inputField";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const FuncionarioForm = () => {
  const { register, errors} = useFuncionarioFormHandlers();
  const {next, previous, currentStep} = useMultiPartFormHandlers()

  useEffect(() => {
    AOS.init({});
  }, [])


  return(
      <form action="" className="rounded p-5 max-sm:w-full w-[600px]">
      {
        currentStep === 1 && (
          <div data-aos="fade-left">
          <InputField>
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" type="text" placeholder="João Marcos" {...register("name")}/>
            <Label htmlFor="nome" className="text-red-600">{errors.name?.message}</Label>
          </InputField>
          </div>
        )
      }
      {
        currentStep === 2 && (
          <div  data-aos="fade-left">
          <InputField>
            <Label htmlFor="nome">Cargo</Label>
            <Input id="nome" type="text" placeholder="João Marcos" {...register("name")}/>
            <Label htmlFor="nome" className="text-red-600">{errors.name?.message}</Label>
          </InputField>
          </div>
        )
      }
      {
        currentStep === 3 && (
          <div data-aos="fade-left">
          <InputField>
            <Label htmlFor="nome">Senha</Label>
            <Input id="nome" type="text" placeholder="João Marcos" {...register("name")}/>
            <Label htmlFor="nome" className="text-red-600">{errors.name?.message}</Label>
          </InputField>
          </div>
        )
      }
      <Button type="button" variant={"outline"} onClick={previous}>Anterior</Button>
      <Button type="button" variant={"outline"} onClick={next}>Próximo</Button>
      </form>
  )
}

export default FuncionarioForm
