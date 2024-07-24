import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginSuccess } from "@/app/states/usuarios/usuarioSlice";
import getToken from "../services/getToken";
import { loginPayloadInterface } from "../interfaces/loginPayload";
import addAuthorizationHeaderAPI from "@/app/utils/addAuthorizationHeaderAPI";
import saveCookies from "@/app/utils/saveCookies";
import { createCartItem } from "@/app/cart/storage/createCartItem";
import { reloadCartItems } from "@/app/states/cart/cartSlice";
import { getCartItems } from "@/app/cart/storage/getCartItems";
import { useLoginMutate } from "./useLoginMutate";

export const useAuth = () => {

  const dispatch = useDispatch();
  const { push } = useRouter();
  // const [isPending, setIsPending] = useState(false);
  const { mutate, error, isPending, isError, isSuccess, data } = useLoginMutate()


  const handleLogin = async (payload: loginPayloadInterface) => {
    // setIsLoading(true);
    mutate(payload);
  //  if (isSuccess) {

  //     const { name, id, email, nivel, token} = data;
  //     const cartItems = getCartItems();

  //     saveCookies({ token, nivel, id, name });

  //     addAuthorizationHeaderAPI(token);

  //     dispatch(loginSuccess({ name, id, email, nivel }))

  //     dispatch(reloadCartItems(cartItems))

  //     toast.loading("Redirecionando para home.");

  //     push("/");
  //   }
    // try {

    //   const { name, id, email, nivel, token} = await getToken(data);
    //   const cartItems = getCartItems();

    //   saveCookies({token, nivel, id, name});

    //   addAuthorizationHeaderAPI(token);

    //   dispatch(loginSuccess({ name, id, email, nivel }))

    //   dispatch(reloadCartItems(cartItems))

    //   toast.loading("Redirecionando para home.");

    //   push("/");

    // } catch (error: any) {

    //   const errorMessage = error.response?.data.message || "Ops! Ocorreu um erro, por favor, recarregue a página";
    //   toast.error(errorMessage);

    // } finally {
    //   // setIsLoading(false);
    // }
  }

  return { handleLogin, isPending };
};
