"use client"

import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";
import Cookie from "js-cookie";
import api from "../services/axios";
import { useEffect } from "react";
import MenuFooter from "../layout/menuFooter";
import Header from "../layout/menuHeader";

const MainContentProvider = ({ children }: { children: React.ReactNode }) => {

  const currentPage = usePathname();
  const {push}  = useRouter();
  const isLoginPage = currentPage === "/login"
  const {nivel} = useSelector((state:RootState) => state.usuarioReducer);

  useEffect(()=>{
    if(nivel === null){
      Cookie.remove("auth_token");
      Cookie.remove("nivel");
      delete api.defaults.headers.Authorization;
      push("/login");
    }
  },[nivel, push])

  return (
    <div>
      {/**precisa dessa validação para não aplicar com o margin-left */
      (isLoginPage) ?
        (
          <main className="max-sm:ml-0">
            <Header />
            {children}
            <MenuFooter />
          </main>
        ) :
        (
          <main className="max-sm:ml-0 ml-[91px]">
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
