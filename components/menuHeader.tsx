"use client";

import { Boxes, CircleUserRound, ClipboardPlus, Home, LineChart, LogOut, Menu, ShoppingCart, SquareUser, Stethoscope, Store, Users } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image"
import { useSelector } from "react-redux";
import { RootState } from "../app/store/root-reducer"
import ActiveLink from "./activeLink";
import LogoutDialog from "./logoutDialog";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { Avatar, AvatarFallback } from "./ui/avatar";
import takeInitialLetters from "@/utils/takeInitialLetters";
import SheetContentMenu from "./SheetContentMenu";


const Header = () => {

  const currentPage = usePathname();

  const isLoginPage = currentPage === "/login"


  const { nivel, nome } = useSelector((state: RootState) => state.usuarioReducer);

  return (
    <>
      {!isLoginPage &&
        <nav className="w-full flex justify-between items-center min-h-8 py-2 pl-1 shadow-md">
          <div className=" flex justify-center items-center gap-3  ">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <p className="text-xl tracking-wide text-green-500 font-semibold flex max-sm:hidden">Jardim Saúde</p>
            {(nivel == 1)
              ? (
                <Sheet >
                  <SheetTrigger asChild >
                    <Menu className=" max-sm:flex hidden" />
                  </SheetTrigger>
                  <SheetContent side={"left"}>
                    <SheetContentMenu/>
                  </SheetContent>

                </Sheet>
              ) :
              (<p className="text-xl tracking-wide text-green-500 font-semibold hidden max-sm:flex">Jardim Saúde</p>)}
          </div>
          <ul className="flex justify-between items-center md:mr-10 px-4 gap-5">
            {(nivel === 1) && <ActiveLink directionTooltip="bottom" href="/cart" tooltipText="Seu carrinho"><ShoppingCart />Carrinho</ActiveLink>}
            <LogoutDialog />
            <ActiveLink directionTooltip="bottom" href="" tooltipText="Seu perfil"><CircleUserRound /> Perfil</ActiveLink>
          </ul>

        </nav>
      }
    </>
  )
}


export default Header;
