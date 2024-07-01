"use client";

import { ClipboardPlus, Home, Phone, SquareUser, Stethoscope } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import ActiveLink from "./activeLink";
import { RootState } from "../store/root-reducer";

const MenuFooter = () => {

  const currentPage = usePathname();

  const isLoginPage = currentPage === "/login"

  const { nivel } = useSelector((state: RootState) => state.usuarioReducer);


  return (
    <>
      {(!isLoginPage && nivel === 2) &&
        <nav className="w-full justify-center mb-5 fixed bottom-0 items-center z-50  max-sm:flex hidden">
          <ul className="flex justify-between items-center w-11/12 py-1 px-3 shadow rounded-full border-t-2 border-slate-200 bg-white">
            <ActiveLink href="/" directionTooltip="top" tooltipText="Home"><Home /> Home</ActiveLink>
            <ActiveLink href="/tratamentos" directionTooltip="top" tooltipText="Tratamentos"><Stethoscope /> Tratamentos</ActiveLink>
            <ActiveLink href="/pacientes" directionTooltip="top" tooltipText="Pacientes"><SquareUser /> Pacientes</ActiveLink>
            <ActiveLink directionTooltip="top" href="/contato" tooltipText="Contato do desenvolvedor"><Phone /> Contato</ActiveLink>
          </ul>
        </nav>
      }
    </>
  )
}


export default MenuFooter;
