
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import { useState } from "react";
import CardItem from "@/app/funcionarios/components/cards/CardItem";
import PagamentoCard from "@/app/funcionarios/components/cards/PagamentosCard";
import { FuncionarioInterface } from "@/app/funcionarios/interfaces/funcionarioInterface";
import { setProfissaoByNivel } from "@/app/funcionarios/utils/setProfissaoByNivel";
import formatCurrency from "@/app/utils/formatCurrency";
import ActiveLink from "@/app/layout/activeLink";

interface UserCardDetailsProps {
  user: FuncionarioInterface;
}


export const UserCardDetails = ({ user }: UserCardDetailsProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const unformattedBirthDay = new Date(user.nascimento);
  const formattedBirthDay = unformattedBirthDay.toLocaleDateString();

  const openDialog = () => {
    setIsOpen(true);
  };


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger onClick={openDialog} asChild className="hover:cursor-pointer">
        <ActiveLink directionTooltip="bottom" href="" tooltipText="Seu perfil">
          <CircleUserRound /> Perfil
        </ActiveLink>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border rounded max-h-[450px] border-emerald-300 shadow overflow-y-scroll">
        <DialogHeader className="rounded">
          <DialogTitle className="text-emerald-400 flex-col flex">
            <h1 className="w-full text-center">{user.name}</h1>
            <div className="w-full flex justify-center gap-3 mt-2 items-center">

            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <CardItem label={"Nome"} value={user.name} />
          <hr />
          <CardItem label="Nascimento" value={formattedBirthDay} />
          <hr />
          <CardItem label="CPF" value={user.cpf} />
          <hr />
          <CardItem label="Cargo" value={setProfissaoByNivel(user.nivel)} />
          <hr />
          {user.crm && (
            <>
              <CardItem label="CRM" value={user.crm} />
              <hr />
            </>
          )}
          {user.especialidade?.nome && (
            <>
              <CardItem label="Especialidade" value={user.especialidade.nome} />
              <hr />
            </>
          )}
          <CardItem label="Email" value={user.email} />
          <hr />
          <CardItem label="Salario" value={formatCurrency(user.salario)} />
          <hr />
          <div className="flex justify-between items-center">
            <h1>Histórico de pagamentos:</h1>
            {
              user.pagamento ? (
                <PagamentoCard pagamentos={user.pagamento} />
              ) : (
                <p>Não houve pagamento {user.pagamento}</p>
              )
            }
          </div>
          <hr />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="bg-emerald-500">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  );
}
