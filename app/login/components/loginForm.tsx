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
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const LoginForm = () => {

  const dispatch = useDispatch();
  const { push } = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [emailForm, setEmail] = useState("jmcsjoaomarcos@gmail.com")
  const [senhaForm, setSenha] = useState("JMCS2024")

  const handleLogin = async () => {
    setIsLoading(true);

    try {

      const payload: loginPayloadInterface = {
        email: emailForm,
        senha: senhaForm,
      }
      const response = await fetchToken(payload);

      const token = response.data.token;
      const { name, id, email, nivel } = jwtDecode.jwtDecode<UsuarioToken>(token);

      Cookie.set("auth_token", token, { expires: 1 / 24 });

      api.defaults.headers.Authorization = `Bearer ${token}`;

      dispatch(loginSuccess({ name, id, email, nivel }))

      push("/");


    } catch (error: any) {

      const errors = error.response?.data.message || "Erro do servidor, tente novamente em alguns instantes.";
      toast.error(error);
      console.log(error);
      dispatch(loginFailed({ errors }))

    } finally {
      setIsLoading(false);
    }
  }


  return (
    <div className="mt-8">
      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
      <Input type="email" id="email" value={emailForm} placeholder="jmcsjoaomarcos@gmail.com" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <Label htmlFor="senha" className="text-sm font-medium">Senha</Label>
      <Input type="password" id="senha" value={senhaForm} placeholder="JMCS2024" onChange={(e) => setSenha(e.target.value)} />
      <br />
      <Button
        onClick={handleLogin}
        className="w-full
                        bg-green-600
                        text-base
                        hover:bg-green-700
                        shadow-inner">
        {isLoading ? (
          <Loader2 className="animate-spin mr-2 h-4 w-4" />
        ) : ("Entrar")}
      </Button>
    </div>
  )
}

export default LoginForm;
