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
import { useTotalMedicamentos } from "@/app/hooks/useTotalMedicamentos";
import { useTotalPacientes } from "@/app/hooks/useTotalPacientes";
import CardSkeleton from "../skeletons/cardSkeleton";

const PacientesCard = () => {

  const { data, isLoading } = useTotalPacientes();

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <Card className="shadow min-w-[280px]">
          <CardHeader className="pb-2">
            <CardDescription className="font-medium text-base gap-1 justify-between px-1 flex items-center">
              <p className="flex flex-row items-center gap-1">Pacientes
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} />
                    </TooltipTrigger>
                    <TooltipContent side={"right"} className="text-xs text-neutral-700 text-left w-80 text-wrap">
                      Representa a quantidade de pacientes que já foram atendidos por nossa instaituição.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <EllipsisVertical size={18} className="hover:scale-105 transition-all" />
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                  <DropdownMenuLabel className="px-2 flex flex-row items-center"><SquareUser size={15}/> Pacientes atendidos</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href={"#"} >Ver pacientes</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardDescription>
            <CardTitle className="text-4xl flex flex-row items-center text-emerald-500 gap-1">
              <SquareUser size={35}/>{data}
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <CardDescription className="text-sm">Pacientes que já foram atendidos</CardDescription>
          </CardFooter>
        </Card>

      )}
    </>
  )
}

export default PacientesCard
