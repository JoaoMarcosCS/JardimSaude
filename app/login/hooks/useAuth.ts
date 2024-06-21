import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginSuccess } from "@/app/states/usuarios/usuarioSlice";
import getToken  from "../services/getToken";
import { loginPayloadInterface } from "../interfaces/loginPayload";
import addAuthorizationHeaderAPI from "@/app/utils/addAuthorizationHeaderAPI";
import saveCookies from "@/app/utils/saveCookies";
import { createShoppingCart } from "@/app/cart/cookies/createShoppingCart";

export const useAuth = () => {

  const dispatch = useDispatch();
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  const handleLogin = async (data: loginPayloadInterface) => {
    setIsLoading(true);
    try {

      const { name, id, email, nivel, token} = await getToken(data);

      saveCookies({token, nivel, id, name});

      createShoppingCart(id, []);

      addAuthorizationHeaderAPI(token);

      dispatch(loginSuccess({ name, id, email, nivel }))

      toast.loading("Redirecionando para home.");

      push("/");

    } catch (error: any) {

      const errorMessage = error.response?.data.message || "Ops! Ocorreu um erro, por favor, recarregue a página";
      toast.error(errorMessage);

    } finally {
      setIsLoading(false);
    }
  }

  return { handleLogin, isLoading };
};
