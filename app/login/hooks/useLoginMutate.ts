import { getCartItems } from "@/app/cart/storage/getCartItems";
import { reloadCartItems } from "@/app/states/cart/cartSlice";
import { loginSuccess } from "@/app/states/usuarios/usuarioSlice";
import addAuthorizationHeaderAPI from "@/app/utils/addAuthorizationHeaderAPI";
import saveCookies from "@/app/utils/saveCookies";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import getToken from "../services/getToken";
import { useRouter } from "next/navigation";


export interface ErrorResponse {
  response: {
    data: {
      message: string
    }
  }
}

export function useLoginMutate() {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: getToken,
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      const { name, id, email, nivel, token} = data;
      const cartItems = getCartItems();

      saveCookies({ token, nivel, id, name });

      addAuthorizationHeaderAPI(token);

      dispatch(loginSuccess({ name, id, email, nivel }))

      dispatch(reloadCartItems(cartItems))

      toast.loading("Redirecionando para home.");

      push("/");
    },
    onError: (error: ErrorResponse) => {
      toast.error(`${error?.response.data.message}`)
    }
  })

  return mutate;
}


