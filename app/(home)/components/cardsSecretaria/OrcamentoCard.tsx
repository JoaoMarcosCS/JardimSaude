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
      )}
    </>
  )
}

export default OrcamentoCard
