
import getCookies from "@/app/utils/getCookies";

export function clearCart() {
  const { id } = getCookies()
  const idUsuario = id.toString()
  const cartStorageKey = "Cart" + idUsuario;
  localStorage.setItem(cartStorageKey, "");
}
