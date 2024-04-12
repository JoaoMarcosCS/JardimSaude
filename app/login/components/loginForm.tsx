import { loginRequest } from "@/app/states/usuarios/usuarioSlice";
import { IRootState } from "@/app/store/root-reducer";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {

  const dispatch = useDispatch();
  const { isLoading, isLoggedIn } = useSelector((state: IRootState) => state.usuarioReducer);

  const history = useRouter();
  const [email, setEmail] = useState("jmcsjoaomarcos@gmail.com")
  const [senha, setSenha] = useState("JMCS2024")

  if (isLoggedIn) {
    history.push("/");
  }

  const handleLogin = () => {
    dispatch(loginRequest({ email, senha }));
  }

  return (
    <div className="mt-8">
      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
      <Input type="email" id="email" value={email} placeholder="jmcsjoaomarcos@gmail.com" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <Label htmlFor="senha" className="text-sm font-medium">Senha</Label>
      <Input type="password" id="senha" value={senha} placeholder="JMCS2024" onChange={(e) => setSenha(e.target.value)} />
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
