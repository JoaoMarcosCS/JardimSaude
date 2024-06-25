import Cookie from "js-cookie";
import { CookiesInterface } from "../interfaces/cookiesInterface";

const getCookies = ():CookiesInterface => {
  const nivel = Number(Cookie.get("nivel"));
  const token = Cookie.get("auth_token") || "";
  const id = Number(Cookie.get("id_usuario"));
  const name = Cookie.get("nome") || "";

  return {nivel, token, id , name}
}

export default getCookies;
