"use client"

import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";
import { useEffect } from "react";
import MenuFooter from "../layout/menuFooter";
import Header from "../layout/menuHeader";
import removeAuthorizationHeaderAPI from "../utils/removeAuthorizationHeaderaAPI";
import removeCookies from "../utils/removeCookies";
import Cookie from "js-cookie";
import { reloadState } from "../states/usuarios/usuarioSlice";
import addAuthorizationHeaderAPI from "../utils/addAuthorizationHeaderAPI";

const MainContentProvider = ({ children }: { children: React.ReactNode }) => {

  const currentPage = usePathname();
  const {push}  = useRouter();
  const isLoginPage = currentPage === "/login"
  // const {nivel} = useSelector((state:RootState) => state.usuarioReducer);
  const nivel = Number(Cookie.get("nivel"));
  const dispatch = useDispatch();

  useEffect(()=>{
    const nivel = Number(Cookie.get("nivel"));
    const token = Cookie.get("auth_token");
    if(nivel === null || nivel === undefined || token === undefined){
      removeCookies();
      removeAuthorizationHeaderAPI();

      push("/login");
    }else{
      addAuthorizationHeaderAPI(token!);
      dispatch(reloadState({nivel}));
    }
  },[dispatch, nivel, push])

  return (
    <div>
      {/**precisa dessa validação para não aplicar com o margin-left */
      (isLoginPage) ?
        (
          <main className="max-sm:ml-0 bg-white">
            <Header />
            {children}
            <MenuFooter />
          </main>
        ) :
        (
          <main className="max-sm:ml-0 ml-[91px] bg-white">
            <Header />
            <div className="py-24">{children}</div>
            <MenuFooter />
          </main>
          )
      }
    </div>
  )
}

export default MainContentProvider;
