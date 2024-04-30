import { Card, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { EllipsisVertical, Info, Home, Users, Pill, SquareUser } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { useTotalMedicamentos } from "@/app/(home)/hooks/useTotalMedicamentos";
import { useTotalPacientes } from "@/app/(home)/hooks/useTotalPacientes";
import CardSkeleton from "../skeletons/cardSkeleton";
import CardDashboard from "./CardDashboard";

const PacientesCard = () => {

  const { data, isLoading } = useTotalPacientes();

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <CardDashboard
          title="Pacientes"
          tooltipTextHelp={"Representa a quantidade de pacientes que já foram atendidos por nossa instaituição."}
          color={"text-emerald-500"}
          description={"Pacientes que já foram atendidos"}
          dataToDisplay={data}
          icon={<><SquareUser size={35} /></>}
        >
          <Link href={"#"} >Ver pacientes</Link>
        </CardDashboard>
      )}
    </>
  )
}

export default PacientesCard
