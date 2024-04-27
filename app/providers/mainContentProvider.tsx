"use client"

import MenuFooter from "@/components/menuFooter";
import Header from "@/components/menuHeader";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";
import Cookie from "js-cookie";
import api from "../services/axios";
import { useEffect } from "react";

const MainContentProvider = ({ children }: { children: React.ReactNode }) => {

  const currentPage = usePathname();
  const {push}  = useRouter();
  const isLoginPage = currentPage === "/login"
  const {nivel} = useSelector((state:RootState) => state.usuarioReducer);

  useEffect(()=>{
    console.log("Nivel value: " + nivel);
    if(nivel === null){
      console.log("Chegou no service");
      Cookie.remove("auth_token");
      Cookie.remove("nivel");
      delete api.defaults.headers.Authorization;
      push("/login");
    }
  },[nivel, push])

  return (
    <>
      {/**precisa dessa validação para não aplicar1 com o margin-left */
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
            <div className="pt-24">{children}</div>
            <MenuFooter />
          </main>
          )
      }
    </>
  )
}

export default MainContentProvider;
