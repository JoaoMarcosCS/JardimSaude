import { CookiesInterface } from "../interfaces/cookiesInterface"
import Cookie from "js-cookie";

const saveCookies = ({ token, nivel }: CookiesInterface) => {
  Cookie.set("auth_token", token, { expires: 1 / 24});
  Cookie.set("nivel", nivel.toString(), { expires: 1 / 24});
}

export default saveCookies
