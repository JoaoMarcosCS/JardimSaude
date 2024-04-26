import { Card, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useHospitalData } from "../../hooks/useHospitalData";
import { EllipsisVertical, Info, Home, Users, Pill } from "lucide-react";
import CardSkeleton from "./skeletons/cardSkeleton";
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

const MedicamentosCard = () => {

  const { data, isLoading } = useTotalMedicamentos();

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <Card className="shadow">
          <CardHeader className="pb-2">
            <CardDescription className="font-medium text-base gap-1 justify-between px-1 flex items-center">
              <p className="flex flex-row items-center">Tipos de medicamentos
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} />
                    </TooltipTrigger>
                    <TooltipContent side={"right"} className="text-xs text-neutral-700 text-left w-80 text-wrap">
                      Esse dado representa a quantidade de tipos de medicamentos que existem no nosso estoque. Não
                      representa a quantidade de medicamentos, e sim a quantidade de tipos. Para ver a quantidade
                      de medicamentos, vá nos menu do card e terá a opção &quot;Ver medicamentos&quot;, e clicando nessa opção
                       você poderá ver uma tabela com todos os medicamentos e suas quantidades.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <EllipsisVertical size={18} className="hover:scale-105 transition-all" />
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                  <DropdownMenuLabel className="px-2 flex flex-row items-center"><Pill size={15}/> Tipos de medicamentos</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href={"#"} >Ver medicamentos</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"#"}>Histórico de compras</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </CardDescription>
            <CardTitle className="text-4xl flex flex-row items-center text-rose-500 gap-1">
              {/* {Intl.NumberFormat('pt-BR', {
                style: "currency",
                currency: 'BRL'
              }).format(Number(data))
              } */}
              <Pill size={35}/>{data}
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <CardDescription className="text-sm">Tipos de medicamentos adquiridos</CardDescription>
          </CardFooter>
        </Card>

      )}
    </>
  )
}

export default MedicamentosCard
