import { Card, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { EllipsisVertical, Info, Home, Users, Stethoscope } from "lucide-react";
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
import { useTotalFuncionarios } from "@/app/(home)/hooks/useTotalFuncionarios";
import CardSkeleton from "../skeletons/cardSkeleton";
import { useTotalTratamentos } from "@/app/(home)/hooks/useTotalTratamentos";
import CardDashboard from "./CardDashboard";

const TratamentosCard = () => {

  const { data, isLoading } = useTotalTratamentos();

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <CardDashboard
          title="Tratamentos realizados"
          tooltipTextHelp={"Essa é a quantidade de tratamentos realizados pelo Jardim Saúde desde o seu início, em 01/01/2023."}
          color={"text-cyan-500"}
          description={"Tratamentos realizados desde 01/01/2023"}
          dataToDisplay={data}
          icon={<><Stethoscope size={35} /></>}
        >
          <Link href={"#"} >Ver tratamentos</Link>
        </CardDashboard>
      )}
    </>
  )
}

export default TratamentosCard
