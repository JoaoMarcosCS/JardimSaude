import Link from "next/link";
import { useTotalFuncionarios } from "@/app/(home)/hooks/useTotalFuncionarios";
import CardSkeleton from "../skeletons/cardSkeleton";
import CardDashboard from "./CardDashboard";
import { Users } from "lucide-react";

const FuncionariosCard = () => {

  const { data, isLoading } = useTotalFuncionarios();

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <CardDashboard
          title="Funcionários"
          tooltipTextHelp={"Essa é a quantidade atual de funcionários trabalhando no Jardim Saúde, contanto com secretários(as) e médicos(as), que estão na folha de pagamento."}
          color={"text-cyan-500"}
          description={"Funcionários na folha de pagamento"}
          dataToDisplay={data}
          icon={<><Users size={35} /></>}
        >
          <Link href={"#"} >Histórico de pagamentos</Link>
          <Link href={"#"} >Ver funcionários</Link>
          <Link href={"#"} >Contratar</Link>
          <Link href={"#"} >Demitir</Link>
        </CardDashboard>
      )}
    </>
  )
}

export default FuncionariosCard
