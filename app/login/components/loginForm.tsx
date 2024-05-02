import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormProps, schemaLoginForm } from "../types/formProps";
import { useAuth } from "../hooks/useAuth";

const LoginForm = () => {

  const { handleLogin, isLoading } = useAuth();

  const { handleSubmit, register, formState:{errors} } = useForm<LoginFormProps>({
    mode: 'all',
    reValidateMode: "onChange",
    resolver: zodResolver(schemaLoginForm)
  });

  return (
    <div className="mt-8">
      <form action="" onSubmit={handleSubmit(handleLogin)}>
        <Label htmlFor="email" className="text-sm font-medium">Email</Label>
        <Input type="email" id="email" {...register("email")} placeholder="jmcsjoaomarcos@gmail.com" />
        <Label htmlFor="email" className="text-red-600">{errors.email?.message}</Label>
        <br />
        <Label htmlFor="senha" className="text-sm font-medium">Senha</Label>
        <Input type="password" {...register("senha")} id="senha" placeholder="JMCS2024" />
        <Label htmlFor="senha" className="text-red-600">{errors.senha?.message}</Label>
        <br />
        <br />
        <Button
          type="submit"
          className="w-full
                        bg-green-600
                        text-base
                        hover:bg-green-700
                        shadow-inner">
          {isLoading ? (
            <Loader2 className="animate-spin mr-2 h-4 w-4" />
          ) : ("Entrar")}
        </Button>
      </form>
    </div>
  )
}

export default LoginForm;
