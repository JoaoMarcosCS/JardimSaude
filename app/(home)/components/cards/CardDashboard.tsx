import { Card, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {  Info, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react";
import CardDashboardProps from "../../interface/CardDashboardProps";


/**
 * @param title - Título do card
 * @param description - Descrição que vai aparecer na parte inferior do card
 * @param tooltipTextHelp - Texto que vai aparecer para ajudar a entender o que é o card
 * @param icon - Icone que vai representar a informação. Precisa ser um ReactEelement, logo, envolva-o em um fragment
 * @param color - Cor que terá a informação
 * @param children - Opcional, ações que poderão ser feitas com a informação
 * @param dataToDisplay - Informação que será exibida
 *
 */
const CardDashboard = ({ title, tooltipTextHelp, dataToDisplay, icon, color, children, description }: CardDashboardProps) => {
  return (
    <Card className=" shadow min-w-[330px]">
      <CardHeader className="pb-2">
        <CardDescription className="font-medium text-base gap-1 justify-between px-1 flex items-center">
          <p className="flex flex-row items-center gap-1">{title}
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info size={15} />
                </TooltipTrigger>
                <TooltipContent side={"right"} className="text-xs text-neutral-700 text-left w-80 text-wrap">
                  {tooltipTextHelp}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <MoreHorizontal size={18} className="hover:scale-105 transition-all hover:cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent >
              <DropdownMenuLabel className="px-2 flex flex-row items-center">Ações disponíveis</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {children ? (
                  React.Children.map(children, (child) => (
                    <DropdownMenuItem>{child}</DropdownMenuItem>
                  ))
                ) : (
                  <DropdownMenuItem>Nenhuma ação disponível</DropdownMenuItem>
                )}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardDescription>
        <CardTitle className={`text-4xl flex ${color} flex-row items-center gap-1`}>
          <>{icon}</>{dataToDisplay}
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardFooter>
    </Card>
  )
}

export default CardDashboard
