import { Card, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useHospitalData } from "../../hooks/useHospitalData";
import { EllipsisVertical, Info, Home, Users } from "lucide-react";
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
import { useTotalFuncionariosData } from "@/app/hooks/useTotalFuncionariosData";

const FuncionariosCard = () => {

  const { data, isLoading } = useTotalFuncionariosData();

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <Card className="shadow">
          <CardHeader className="pb-2">
            <CardDescription className="font-medium text-base gap-1 justify-between px-1 flex items-center">
              <p className="flex flex-row items-center">Funcionários
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} />
                    </TooltipTrigger>
                    <TooltipContent side={"right"} className="text-xs text-neutral-700 text-left w-80 text-wrap">
                      Essa é a quantidade atual de funcionários trabalhando no Jardim Saúde, contanto com secretários(as)
                      e médicos(as), que estão na folha de pagamento.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <EllipsisVertical size={18} className="hover:scale-105 transition-all" />
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                  <DropdownMenuLabel className="px-2 flex flex-row items-center"><Users size={15}/> Funcionarios</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href={"#"} >Histórico de pagamentos</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"#"}>Demitir</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"#"}>Contratar</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </CardDescription>
            <CardTitle className="text-4xl flex flex-row items-center text-cyan-500 gap-1">
              {/* {Intl.NumberFormat('pt-BR', {
                style: "currency",
                currency: 'BRL'
              }).format(Number(data))
              } */}
              <Users size={35}/>{data}
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <CardDescription className="text-sm">Funcionários na folha de pagamento</CardDescription>
          </CardFooter>
        </Card>

      )}
    </>
  )
}

export default FuncionariosCard
