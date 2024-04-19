import { Card, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useHospitalData } from "../../hooks/useHospitalData";
import { Info } from "lucide-react";

const HomeSecretaria = () => {

  const { data, isLoading } = useHospitalData();

  return (
    <section className="flex justify-center items-center flex-col pt-4">
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <div className="w-full flex items-center flex-col justify-center">
          <h1 className="text-green-400 text-4xl font-bold ">{data.nome}</h1>
          <div className="w-full flex justify-center items-center px-4 pt-4">
            <Card className="shadow">
              <CardHeader className="pb-2">
                <CardDescription className="font-medium text-base gap-1 flex items-center">
                  Orçamento
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

                </CardDescription>
                <CardTitle className="text-4xl flex flex-row items-center text-green-500">
                  {Intl.NumberFormat('pt-BR', {
                    style: "currency",
                    currency: 'BRL'
                  }).format(Number(data.orcamento))
                  }
                </CardTitle>
              </CardHeader>
              <CardFooter>
                <CardDescription className="text-sm">Saldo disponível para operações</CardDescription>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </section>

  )
}

export default HomeSecretaria;
