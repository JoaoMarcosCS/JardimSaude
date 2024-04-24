"use client";

import { CircleUserRound, ClipboardPlus, Home, LogOut, ShoppingCart, SquareUser, Stethoscope } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../app/store/root-reducer"
import ActiveLink from "./activeLink";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";

const MenuFooter = () => {

  const currentPage = usePathname();

  const isLoginPage = currentPage === "/login"

  const { nivel } = useSelector((state: RootState) => state.usuarioReducer);
  // const [nivel, setNivel] = useState(0);
  // useEffect(()=>{
  //   const _nivel = Number(Cookie.get("nivel"));
  //   setNivel(_nivel);
  // },[nivel])

  return (

    <>
    {(!isLoginPage && nivel===2) &&
    <nav className="w-full justify-between fixed bottom-0 items-center rounded-md border-t-2 border-slate-200 max-sm:flex hidden">
      <ul className="flex justify-between items-center w-full">
        <ActiveLink href="/" directionTooltip="top" tooltipText="Home"><Home /> aaa</ActiveLink>
        <ActiveLink href="/tratamentos" directionTooltip="top" tooltipText="Tratamentos"><Stethoscope /> Tratamentos</ActiveLink>
        <ActiveLink href="/pacientes" directionTooltip="top" tooltipText="Pacientes"><SquareUser /> Pacientes</ActiveLink>
        <ActiveLink href="/consultas" directionTooltip="top" tooltipText="Consultas"><ClipboardPlus /> Consultas</ActiveLink>
      </ul>
    </nav>}
  </>
  )
}


export default MenuFooter;
