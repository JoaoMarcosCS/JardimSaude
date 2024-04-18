"use client";

import { Activity, Boxes, CircleUserRound, ClipboardPlus, Home, LineChart, LogOut, ShoppingCart, SquareUser, Stethoscope, Store, User, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { RootState } from "../app/store/root-reducer"
import ActiveLink from "./activeLink";

const takeInitialLetters = (fullName: any) => {
  const [firstName, lastName] = fullName.split(" ");
  const firstLetter = firstName?.at(0) || "U";
  const secondLetter = lastName?.at(0) || "S"

  return `${firstLetter}${secondLetter}`;
}

const SideBar = () => {

  const currentPage = usePathname();

  const isLoginPage = currentPage === "/login"

  const { nivel, nome } = useSelector((state: RootState) => state.usuarioReducer);

  const userName = nome ? takeInitialLetters(nome) : "US";



  return (
    <>
      {!isLoginPage &&
        <nav className="h-screen flex max-sm:hidden fixed flex-col border-r-2 w-[90px] ">
          <div className=" min-h-16  flex justify-center items-center bg-green-400">
            <Avatar>
              <AvatarFallback>{userName}</AvatarFallback>
            </Avatar>
          </div>

          <ul className="flex flex-col pt-3 pb-5 w-full h-screen justify-between items-center md:mr-10 overflow-hidden">
            <ActiveLink href="/" tooltipText="Home"><Home /> Home</ActiveLink>
            <ActiveLink href="/tratamentos" tooltipText="Tratamentos"><Stethoscope /> Tratamentos</ActiveLink>
            <ActiveLink href="/funcionarios" tooltipText="Funcionários"><Users /> Funcionários</ActiveLink>
            <ActiveLink href="/pacientes" tooltipText="Pacientes"><SquareUser /> Pacientes</ActiveLink>
            <ActiveLink href="/consultas" tooltipText="Consultas"><ClipboardPlus /> Consultas</ActiveLink>
            <ActiveLink href="/estoque" tooltipText="Estoque"> <Boxes /> Estoque</ActiveLink>
            <ActiveLink href="/financeiro" tooltipText="Financeiro"> <LineChart /> Financeiro</ActiveLink>
            <ActiveLink href="/shopping" tooltipText="Shopping"><Store /> Shopping</ActiveLink>
          </ul>

        </nav>
      }
    </>
  )
}


export default SideBar;
