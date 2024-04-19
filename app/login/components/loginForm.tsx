import { loginPayloadInterface } from "@/app/interfaces/login/loginPayload";
import UsuarioToken from "@/app/interfaces/token/tokenInterface";
import api from "@/app/services/axios";
import fetchToken from "@/app/services/fetchToken";
import { loginFailed, loginSuccess } from "@/app/states/usuarios/usuarioSlice";
import { RootState } from "@/app/store/root-reducer";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Cookie from "js-cookie"
import * as jwtDecode from "jwt-decode";
import { Loader2 } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { secretToken } from "@/app/constants/secretCookie";

const schema = z.object({
  email: z.string().email("Informe um email válido"),
  senha: z.string().min(8, "A senha deve conter no mínimo 8 caracteres")
})

type FormProps = z.infer<typeof schema>;

const LoginForm = () => {

  const dispatch = useDispatch();
  const { push } = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, register, formState: { errors } } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: "onChange",
    resolver: zodResolver(schema)
  })

  const handleLogin = async (data: FormProps) => {
    setIsLoading(true);
    try {

      const payload: loginPayloadInterface = {
        email: data.email,
        senha: data.senha,
      }

      console.log(payload)

      const response = await fetchToken(payload);

      const token = response.data.token;
      const { name, id, email, nivel } = jwtDecode.jwtDecode<UsuarioToken>(token);

      Cookie.set("auth_token", token, { expires: 1 / 24, signed: true, secret: secretToken });
      Cookie.set("nivel", nivel.toString(), { expires: 1 / 24, signed: true, secret: secretToken });
      api.defaults.headers.Authorization = `Bearer ${token}`;

      dispatch(loginSuccess({ name, id, email, nivel }))

      push("/");


    } catch (error: any) {

      const errors = error.response?.data.message || "Erro do servidor, tente novamente em alguns instantes.";
      toast.error(errors);
      dispatch(loginFailed({ errors }))

    } finally {
      setIsLoading(false);
    }
  }


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
