
import Cookie from "js-cookie";
import { CookiesInterface } from "../interfaces/cookiesInterface";

const saveCookies = ({ token, nivel, id, name }: CookiesInterface) => {
  Cookie.set("auth_token", token, { expires: 1 / 24});
  Cookie.set("nivel", nivel.toString(), { expires: 1 / 24});
  Cookie.set("id_usuario", id.toString(), {expires: 1 / 24});
  Cookie.set("nome", name, {expires: 1 / 24});
}

export default saveCookies
