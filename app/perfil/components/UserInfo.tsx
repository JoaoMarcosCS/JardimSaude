import CardItem from "@/app/funcionarios/components/cards/CardItem";
import PagamentoCard from "@/app/funcionarios/components/cards/PagamentosCard";
import { FuncionarioInterface } from "@/app/funcionarios/interfaces/funcionarioInterface"
import { setProfissaoByNivel } from "@/app/funcionarios/utils/setProfissaoByNivel";
import formatCurrency from "@/app/utils/formatCurrency";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import Link from "next/link";

export interface UserInfoPros {
  user: FuncionarioInterface;
}

export const UserInfo = ({ user }: UserInfoPros) => {
  const unformattedBirthDay = new Date(user.nascimento);
  const formattedBirthDay = unformattedBirthDay.toLocaleDateString();

  return (
    <div className=" max-sm:w-full w-[600px] rounded max-sm:shadow-none shadow p-4 mt-4">
      <div className="w-full flex justify-center items-center flex-col gap-1">
        <p className="text-xl">{user.name}</p>
        <Link href="/perfil/editar">
          <Button className="bg-green-500">
            <Pen /> Editar informação pessoais
          </Button>
        </Link>
      </div>

      <div className="flex flex-col w-full justify-start items-start mt-4">
        <p className="text-muted-foreground">Informações pessoais</p>

        <div className="w-full flex justify-between mt-2">
          <p>Nome:</p>
          <p>{user.name}</p>
        </div>
        <div className="w-full flex justify-between mt-2">
          <p>CPF:</p>
          <p>{user.cpf}</p>
        </div>
        <div className="w-full flex justify-between mt-2">
          <p>Nascimento:</p>
          <p>{formattedBirthDay}</p>
        </div>
        <div className="w-full flex justify-between mt-2">
          <p>Email:</p>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="flex flex-col w-full justify-start items-start mt-6">
        <p className="text-muted-foreground">Informações do cargo</p>

        <div className="w-full flex justify-between mt-2">
          <p>Cargo:</p>
          <p>{setProfissaoByNivel(user.nivel)}</p>
        </div>
        {
          user.crm && (
            <>
              <div className="w-full flex justify-between mt-2">
                <p>Especialidade:</p>
                <p>{user.especialidade?.nome}</p>
              </div>
              <div className="w-full flex justify-between mt-2">
                <p>CRM:</p>
                <p>{user.crm}</p>
              </div>
            </>
          )
        }
        <div className="w-full flex justify-between mt-2">
          <p>Salário:</p>
          <p>{formatCurrency(user.salario)}</p>
        </div>
      </div>

      <div className="flex flex-row w-full justify-between items-center mt-6">
        <h1>Histórico de pagamentos:</h1>
        {
          user.pagamento ? (
            <PagamentoCard pagamentos={user.pagamento} />
          ) : (
            <p>Não houve pagamento</p>
          )
        }
      </div>
    </div>
  )
}
