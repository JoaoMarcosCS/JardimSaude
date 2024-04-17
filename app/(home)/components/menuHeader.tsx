"use client";

import { CircleUserRound, ClipboardPlus, Home, LogOut, Menu, ShoppingCart, SquareUser, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Image from "next/image"
import { useSelector } from "react-redux";
import { RootState } from "../../store/root-reducer"

const Header = () => {

  const currentPage = usePathname();

  const isLoginPage = currentPage === "/login"

  const { nivel } = useSelector((state: RootState) => state.usuarioReducer);

  return (
    <>
      {!isLoginPage &&
        <nav className="w-full hidden justify-between items-center rounded-md py-4 shadow-md max-[480px]:flex">
          <div className=" flex justify-center items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            {(nivel === 1) ?(<Sheet>
            <SheetTrigger asChild>
              <Menu />
            </SheetTrigger>
            <SheetContent side={"left"}>
              Olá
            </SheetContent>
          </Sheet>) : (<p className="text-xl tracking-wide text-green-500 font-semibold">Jardim Saúde</p>)
             }

          </div>

          <ul className="flex justify-between items-center  px-4 gap-5">
            {(nivel === 1) && <li className="flex flex-col justify-center text-xs font-semibold items-center"><ShoppingCart />Carrinho</li>}
            <li className="flex flex-col justify-center text-xs font-semibold items-center"><LogOut /> Sair</li>
            <li className="flex flex-col justify-center text-xs font-semibold items-center"><CircleUserRound /> Você</li>
          </ul>

        </nav>
      }
    </>
  )
}


export default Header;
