import { Card, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {useHospitalData} from "@hooks/useHospitalData"
import { EllipsisVertical, Info, Home } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import CardSkeleton from "../skeletons/cardSkeleton";

const OrcamentoCard = () => {

  const { data, isLoading } = useHospitalData();

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <Card className="shadow min-w-[330px]">
          <CardHeader className="pb-2">
            <CardDescription className="font-medium text-base gap-1 justify-between px-1 flex items-center">
              <p className="flex flex-row items-center gap-1">Orçamento
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} />
                    </TooltipTrigger>
                    <TooltipContent side={"right"} className="text-xs text-neutral-700 text-left w-80 text-wrap">
                      Este é o saldo que você(Secretário(a)) tem para realizar operações de compra de
                      medicamentos e pagamento dos
                      funcionários(automático). Além disso, esse saldo aumetará de acordo com o
                      pagamentos dos tratamentos dos pacientes.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <EllipsisVertical size={18} className="hover:scale-105 transition-all" />
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                  <DropdownMenuLabel className="px-2 flex flex-row items-center"><Home size={15}/> Jardim Saúde</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href={"#"} >Transações financeiras</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"#"}>Funcionários</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href={"#"}>Estoque</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardDescription>
            <CardTitle className="text-4xl flex flex-row items-center text-green-500">
              {Intl.NumberFormat('pt-BR', {
                style: "currency",
                currency: 'BRL'
              }).format(Number(data?.orcamento))
              }
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <CardDescription className="text-sm">Saldo disponível para operações</CardDescription>
          </CardFooter>
        </Card>

      )}
    </>
  )
}

export default OrcamentoCard
