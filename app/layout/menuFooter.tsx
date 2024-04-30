"use client";

import { ClipboardPlus, Home, SquareUser, Stethoscope } from "lucide-react";
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
    {(!isLoginPage && nivel===2) &&
    <nav className="w-full justify-between fixed bottom-0 items-center rounded-md border-t-2 bg-slate-50 border-slate-200 max-sm:flex hidden">
      <ul className="flex justify-between items-center w-full px-2">
        <ActiveLink href="/" directionTooltip="top" tooltipText="Home"><Home /> Home</ActiveLink>
        <ActiveLink href="/tratamentos" directionTooltip="top" tooltipText="Tratamentos"><Stethoscope /> Tratamentos</ActiveLink>
        <ActiveLink href="/pacientes" directionTooltip="top" tooltipText="Pacientes"><SquareUser /> Pacientes</ActiveLink>
        <ActiveLink href="/consultas" directionTooltip="top" tooltipText="Consultas"><ClipboardPlus /> Consultas</ActiveLink>
      </ul>
    </nav>}
  </>
  )
}


export default MenuFooter;
