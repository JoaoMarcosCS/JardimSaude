import { RootState } from "@/app/store/root-reducer";
import takeInitialLetters from "@/app/utils/takeInitialLetters";
import { useSelector } from "react-redux";
import { Home, Stethoscope, Users, SquareUser, ClipboardPlus, Boxes, LineChart, Store } from "lucide-react";
import ActiveLink from "./activeLink";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";


const SheetContentMenu = () => {

  const { nome } = useSelector((state: RootState) => state.usuarioReducer);

  const userName = nome ? takeInitialLetters(nome) : "US";

  return (
    <nav className="">
      <div className="flex flex-row items-center gap-1">
        <Avatar >
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>

        <p className="font-medium text-base">{nome}</p>
      </div>
      <Separator orientation="horizontal" className="bg-green-400 mt-1" />
      <ul className="flex justify-start gap-2 mt-2 w-full items-start flex-col ">
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/" tooltipText="Home">
            <Home />
          </ActiveLink>
          <p className="text-base tracking-wide font-medium">Home</p>
        </li>
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/tratamentos" tooltipText="Tratamentos">
            <Stethoscope />
          </ActiveLink>
          <p className="text-base tracking-wide font-medium">Tratamentos</p>
        </li>
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/funcionarios" tooltipText="Funcionários">
            <Users />
          </ActiveLink>
          <p className="text-base tracking-wide font-medium">Funcionários</p>
        </li>
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/pacientes" tooltipText="Pacientes">
            <SquareUser />
          </ActiveLink>
          <p className="text-base tracking-wide font-medium">Pacientes</p>
        </li>
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/estoque" tooltipText="Estoque">
            <Boxes />
          </ActiveLink>
          <p className="text-base tracking-wide font-medium">Estoque</p>
        </li>
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/financeiro" tooltipText="Financeiro">
            <LineChart />
          </ActiveLink>
          <p className="text-base tracking-wide font-medium">Financeiro</p>
        </li>
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/shopping" tooltipText="Shopping">
            <Store />
          </ActiveLink>
          <p className="text-base tracking-wide font-medium">Shopping</p>
        </li>
      </ul>
    </nav>
  )
}

export default SheetContentMenu;
