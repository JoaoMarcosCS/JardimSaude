import { useRouter } from "next/navigation";
import Cookie from "js-cookie";
import api from "./axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const useLogoutService = (router: AppRouterInstance) => {
    // const {push} = useRouter();

    Cookie.remove("auth_token");
    Cookie.remove("nivel");
    delete api.defaults.headers.Authorization;
    router.push("/login");

}

export default useLogoutService;
