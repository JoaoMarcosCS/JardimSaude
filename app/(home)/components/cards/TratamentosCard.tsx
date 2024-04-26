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
import { useTotalFuncionarios } from "@/app/hooks/useTotalFuncionarios";
import CardSkeleton from "../skeletons/cardSkeleton";
import { useTotalTratamentos } from "@/app/hooks/useTotalTratamentos";

const TratamentosCard = () => {

  const { data, isLoading } = useTotalTratamentos();

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <Card className="shadow min-w-[330px]">
          <CardHeader className="pb-2">
            <CardDescription className="font-medium text-base gap-1 justify-between px-1 flex items-center">
              <p className="flex flex-row items-center gap-1">Tratamentos realizados
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info size={15} />
                    </TooltipTrigger>
                    <TooltipContent side={"right"} className="text-xs text-neutral-700 text-left w-80 text-wrap">
                      Essa é a quantidade de tratamentos realizados pelo Jardim Saúde desde o seu início, em 01/01/2023
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <EllipsisVertical size={18} className="hover:scale-105 transition-all" />
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                  <DropdownMenuLabel className="px-2 flex flex-row items-center"> <Stethoscope size={15} /> Tratamentos</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href={"#"} >ver tratamentos</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardDescription>
            <CardTitle className="text-4xl flex flex-row items-center text-cyan-500 gap-1">
              {/* {Intl.NumberFormat('pt-BR', {
                style: "currency",
                currency: 'BRL'
              }).format(Number(data))
              } */}
              <Stethoscope size={35} />{data}
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <CardDescription className="text-sm">Tratamentos realizados desde 01/01/2023</CardDescription>
          </CardFooter>
        </Card>

      )}
    </>
  )
}

export default TratamentosCard
