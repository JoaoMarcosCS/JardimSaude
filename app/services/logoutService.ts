import { useRouter } from "next/navigation";
import Cookie from "js-cookie";
import api from "./axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import removeAuthorizationHeaderAPI from "@utils/removeAuthorizationHeaderaAPI"
import removeCookies from "../utils/removeCookies";

const useLogoutService = (router: AppRouterInstance) => {
    // const {push} = useRouter();

    removeCookies();
    removeAuthorizationHeaderAPI();
    router.push("/login");

}

export default useLogoutService;
