
import Cookie from "js-cookie";

const removeCookies = () => {
  Cookie.remove("auth_token");
  Cookie.remove("nivel");
}

export default removeCookies
