import { Pill } from "lucide-react";
import Link from "next/link";
import { useTotalMedicamentos } from "@/app/(home)/hooks/useTotalMedicamentos";
import CardDashboard from "./CardDashboard";
import CardSkeleton from "@/app/skeletons/cardSkeleton";

const MedicamentosCard = () => {

  const { data, isLoading } = useTotalMedicamentos();

  return (
    <>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <CardDashboard
          title="Tipos de medicamentos"
          tooltipTextHelp={"Esse dado representa a quantidade de tipos de medicamentos que existem no nosso estoque. Não representa a quantidade de medicamentos, e sim a quantidade de tipos. Para ver a quantidade medicamentos, vá nos menu do card e terá a opção ''Ver medicamentos'' e clicando nessa opção você poderá ver uma tabela com todos os medicamentos e suas quantidades."}
          color={"text-rose-500"}
          description={"Tipos de medicamentos adquiridos"}
          dataToDisplay={data}
          icon={<><Pill size={35} /></>}
        >
          <Link href={"#"}>Ver medicamentos</Link>
          <Link href={"#"}>Histórico de compras</Link>
        </CardDashboard>
      )}
    </>
  )
}

export default MedicamentosCard
