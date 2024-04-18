"use client"

import MenuFooter from "@/components/menuFooter";
import Header from "@/components/menuHeader";
import { usePathname } from "next/navigation";

const MainContentProvider = ({ children }: { children: React.ReactNode }) => {

  const currentPage = usePathname();

  const isLoginPage = currentPage === "/login"

  return (
    <>
      {(isLoginPage) ?
        (
          <main className="max-sm:ml-0 ">
            <Header />
            {children}
            <MenuFooter />
          </main>
        ) :
        (
          <main className="max-sm:ml-0 ml-[91px]">
            <Header />
            {children}
            <MenuFooter />
          </main>)
      }
    </>
  )
}

export default MainContentProvider;
