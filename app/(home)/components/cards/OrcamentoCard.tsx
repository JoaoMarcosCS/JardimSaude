import { useHospitalData } from "@/app/(home)/hooks/useHospitalData"
import Link from "next/link";
import CardDashboard from "./CardDashboard";
import CardSkeleton from "@/app/skeletons/cardSkeleton";

const OrcamentoCard = () => {

  const { data, isLoading } = useHospitalData();
  const orcamento = Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: 'BRL'
  }).format(Number(data))

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <CardDashboard
          title="Orçamento"
          tooltipTextHelp={"Este é o saldo que você(Secretário(a)) tem para realizar operações de compra de medicamentos e pagamento dos funcionários(automático). Além disso, esse saldo aumetará de acordo com o pagamentos dos tratamentos dos pacientes."}
          color={" text-green-500"}
          description={"Saldo disponível para operações"}
          dataToDisplay={orcamento}
        >
          <Link href={"#"} >Transações financeiras</Link>
          <Link href={"#"}>Funcionários</Link>
          <Link href={"#"}>Estoque</Link>
        </CardDashboard>
        // <Card className="shadow min-w-[330px]">
        //   <CardHeader className="pb-2">
        //     <CardDescription className="font-medium text-base gap-1 justify-between px-1 flex items-center">
        //       <p className="flex flex-row items-center gap-1">Orçamento
        //         <TooltipProvider delayDuration={200}>
        //           <Tooltip>
        //             <TooltipTrigger asChild>
        //               <Info size={15} />
        //             </TooltipTrigger>
        //             <TooltipContent side={"right"} className="text-xs text-neutral-700 text-left w-80 text-wrap">
        // Este é o saldo que você(Secretário(a)) tem para realizar operações de compra de
        // medicamentos e pagamento dos
        // funcionários(automático). Além disso, esse saldo aumetará de acordo com o
        // pagamentos dos tratamentos dos pacientes.
        //             </TooltipContent>
        //           </Tooltip>
        //         </TooltipProvider>
        //       </p>
        //       <DropdownMenu>
        //         <DropdownMenuTrigger asChild>
        //           <EllipsisVertical size={18} className="hover:scale-105 transition-all" />
        //         </DropdownMenuTrigger>
        //         <DropdownMenuContent >
        //           <DropdownMenuLabel className="px-2 flex flex-row items-center"><Home size={15}/> Jardim Saúde</DropdownMenuLabel>
        //           <DropdownMenuSeparator />
        //           <DropdownMenuGroup>
        //             <DropdownMenuItem>
        //               <Link href={"#"} >Transações financeiras</Link>
        //
        //               <Link href={"#"}>Funcionários</Link>
        //
        //               <Link href={"#"}>Estoque</Link>
        //             <
        //           </DropdownMenuGroup>
        //         </DropdownMenuContent>
        //       </DropdownMenu>
        //     </CardDescription>
        //     <CardTitle className="text-4xl flex flex-row items-center text-green-500">
        //       {Intl.NumberFormat('pt-BR', {
        //         style: "currency",
        //         currency: 'BRL'
        //       }).format(Number(data?.orcamento))
        //       }
        //     </CardTitle>
        //   </CardHeader>
        //   <CardFooter>
        //     <CardDescription className="text-sm">Saldo disponível para operações</CardDescription>
        //   </CardFooter>
        // </Card>

      )}
    </>
  )
}

export default OrcamentoCard
