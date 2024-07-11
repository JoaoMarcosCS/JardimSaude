import { useHospitalData } from "@/app/(home)/hooks/useHospitalData"
import Link from "next/link";
import CardDashboard from "./CardDashboard";
import CardSkeleton from "@/app/skeletons/cardSkeleton";
import formatCurrency from "@/app/utils/formatCurrency";

const OrcamentoCard = () => {

  const { data, isLoading } = useHospitalData();
  const orcamento = formatCurrency(data!);

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
          <Link href={"/funcionarios"}>Funcionários</Link>
          <Link href={"/estoque"}>Estoque</Link>
        </CardDashboard>
      )}
    </>
  )
}

export default OrcamentoCard
