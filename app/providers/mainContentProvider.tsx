"use client"

import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";
import { useEffect } from "react";
import MenuFooter from "../layout/menuFooter";
import Header from "../layout/menuHeader";
import removeAuthorizationHeaderAPI from "../utils/removeAuthorizationHeaderaAPI";
import removeCookies from "../utils/removeCookies";

const MainContentProvider = ({ children }: { children: React.ReactNode }) => {

  const currentPage = usePathname();
  const {push}  = useRouter();
  const isLoginPage = currentPage === "/login"
  const {nivel} = useSelector((state:RootState) => state.usuarioReducer);

  useEffect(()=>{
    if(nivel === null){
      removeCookies();
      removeAuthorizationHeaderAPI();

      push("/login");
    }
  },[nivel, push])

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
