import { RootState } from "@/app/store/root-reducer";
import takeInitialLetters from "@/app/utils/takeInitialLetters";
import { useSelector } from "react-redux";
import { Home, Stethoscope, Users, SquareUser, ClipboardPlus, Boxes, LineChart, Store, Phone } from "lucide-react";
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
          <ActiveLink directionTooltip="right" href="/" tooltipText="Home" >
            <p className="text-base tracking-wide font-medium">Home</p>
          </ActiveLink>
        </li>
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/tratamentos" tooltipText="Tratamentos">
            <Stethoscope />
          </ActiveLink>
          <ActiveLink directionTooltip="right" href="/tratamentos" tooltipText="Tratamentos">
            <p className="text-base tracking-wide font-medium">Tratamentos</p>
          </ActiveLink>
        </li>
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/funcionarios" tooltipText="Funcionários">
            <Users />
          </ActiveLink>
          <ActiveLink directionTooltip="right" href="/funcionarios" tooltipText="Funcionários">
            <p className="text-base tracking-wide font-medium">Funcionários</p>
          </ActiveLink>

        </li>
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/pacientes" tooltipText="Pacientes">
            <SquareUser />
          </ActiveLink>
          <ActiveLink directionTooltip="right" href="/pacientes" tooltipText="Pacientes">
            <p className="text-base tracking-wide font-medium">Pacientes</p>
          </ActiveLink>

        </li>
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/estoque" tooltipText="Estoque">
            <Boxes />
          </ActiveLink>
          <ActiveLink directionTooltip="right" href="/estoque" tooltipText="Estoque">
            <p className="text-base tracking-wide font-medium">Estoque</p>
          </ActiveLink>

        </li>
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/financeiro" tooltipText="Financeiro">
            <LineChart />
          </ActiveLink>
          <ActiveLink directionTooltip="right" href="/financeiro" tooltipText="Financeiro">
            <p className="text-base tracking-wide font-medium">Financeiro</p>
          </ActiveLink>

        </li>
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/shopping" tooltipText="Shopping">
            <Store />
          </ActiveLink>
          <ActiveLink directionTooltip="right" href="/shopping" tooltipText="Shopping">
            <p className="text-base tracking-wide font-medium">Shopping</p>
          </ActiveLink>

        </li>
        <li className="flex flex-row items-center ">
          <ActiveLink directionTooltip="right" href="/contato" tooltipText="Contato do desenvolvedor">
            <Phone />
          </ActiveLink>
          <ActiveLink directionTooltip="right" href="/contato" tooltipText="Contato do desenvolvedor">
            <p className="text-base tracking-wide font-medium">Contato</p>
          </ActiveLink>

        </li>
      </ul>
    </nav>
  )
}

export default SheetContentMenu;
