"use client";

import { Boxes, ClipboardPlus, Home, LineChart, Phone, SquareUser, Stethoscope, Store, User, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import ActiveLink from "./activeLink";
import takeInitialLetters from "@/app/utils/takeInitialLetters";
import { RootState } from "../store/root-reducer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";


const SideBar = () => {

  const currentPage = usePathname();

  const isLoginPage = currentPage === "/login"

  const { nivel, nome } = useSelector((state: RootState) => state.usuarioReducer);

  const userName = nome ? takeInitialLetters(nome) : "";



  return (
    <>
      {!isLoginPage &&
        <nav className="h-screen bg-white flex max-sm:hidden fixed flex-col border-r-2 w-[90px] ">
          <div className=" min-h-[70px]  flex justify-center items-center bg-green-400">
            <Avatar >
              <AvatarFallback>{userName}</AvatarFallback>
            </Avatar>
          </div>

          <ul className="flex flex-col pt-3 pb-5 w-full h-screen justify-start gap-2 items-center md:mr-10 overflow-hidden">
            <ActiveLink directionTooltip="right" href="/" tooltipText="Home"><Home /> Home</ActiveLink>
            <ActiveLink directionTooltip="right" href="/tratamentos" tooltipText="Tratamentos"><Stethoscope /> Tratamentos</ActiveLink>
            {(nivel == 1) && <ActiveLink directionTooltip="right" href="/funcionarios" tooltipText="Funcionários"><Users /> Funcionários</ActiveLink>}
            <ActiveLink directionTooltip="right" href="/pacientes" tooltipText="Pacientes"><SquareUser /> Pacientes</ActiveLink>
            {(nivel == 1) && <ActiveLink directionTooltip="right" href="/estoque" tooltipText="Estoque"> <Boxes /> Estoque</ActiveLink>}
            {(nivel == 1) && <ActiveLink directionTooltip="right" href="/shopping" tooltipText="Shopping"><Store /> Shopping</ActiveLink>}
            <ActiveLink directionTooltip="right" href="/contato" tooltipText="Contato do desenvolvedor"><Phone/> Contato</ActiveLink>
          </ul>

        </nav>
      }
    </>
  )
}


export default SideBar;
