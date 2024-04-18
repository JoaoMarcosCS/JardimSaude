"use client";

import { CircleUserRound, ClipboardPlus, Home, LogOut, Menu, ShoppingCart, SquareUser, Stethoscope } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Image from "next/image"
import { useSelector } from "react-redux";
import { RootState } from "../app/store/root-reducer"
import Link from "next/link";
import ActiveLink from "./activeLink";

const Header = () => {

  const currentPage = usePathname();

  const isLoginPage = currentPage === "/login"

  const { nivel } = useSelector((state: RootState) => state.usuarioReducer);

  return (
    <>
      {!isLoginPage &&
        <nav className="w-full flex justify-between items-center min-h-9 py-3 pl-1 shadow-md">
          <div className=" flex justify-center items-center gap-3 ">

            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <p className="text-xl tracking-wide text-green-500 font-semibold flex max-sm:hidden">Jardim Saúde</p>
            {(nivel == 1)
              ? (
                <Sheet>
                  <SheetTrigger asChild >
                    <Menu className=" max-sm:flex hidden" />
                  </SheetTrigger>
                  <SheetContent side={"left"}>
                    Olá
                  </SheetContent>
                </Sheet>
              ) :
              (<></>)}

          </div>
          <ul className="flex justify-between items-center md:mr-10 px-4 gap-8">
            {(nivel === 1) && <ActiveLink href="/cart" tooltipText="Seu carrinho"><ShoppingCart/>Carrinho</ActiveLink>}
            <ActiveLink href="/logout" tooltipText="Deslogar"><LogOut /> Sair</ActiveLink>
            <ActiveLink href="/profile" tooltipText="Seu perfil"><CircleUserRound /> Perfil</ActiveLink>
          </ul>

        </nav>
      }
    </>
  )
}


export default Header;
