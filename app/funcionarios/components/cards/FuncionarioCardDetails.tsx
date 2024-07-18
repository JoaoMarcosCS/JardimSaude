import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import CardItem from "./CardItem";
import { setProfissaoByNivel } from "../../utils/setProfissaoByNivel";
import { FuncionarioInterface } from "../../interfaces/funcionarioInterface";
import formatCurrency from "@/app/utils/formatCurrency";
import PagamentoCard from "./PagamentosCard";
import DemitirAlert from "./demitirAlert";

interface FuncionarioCardDetailsProps {
  funcionario: FuncionarioInterface;
}


const FuncionarioCardDetails = ({ funcionario }: FuncionarioCardDetailsProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const nascimentoString = funcionario.nascimento.toString();

  const openDialog = () => {
    setIsOpen(true);
  };


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger onClick={openDialog} asChild className="hover:cursor-pointer">
        <MoreHorizontal />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border rounded max-h-[450px] border-emerald-300 shadow overflow-y-scroll">
        <DialogHeader className="rounded">
          <DialogTitle className="text-emerald-400 flex-col flex">
            <h1 className="w-full text-center">{funcionario.name}</h1>
            <div className="w-full flex justify-center gap-3 mt-2 items-center">
              <DemitirAlert nome={funcionario.name} id={funcionario.id}/>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <CardItem label={"Nome"} value={funcionario.name} />
          <hr />
          <CardItem label="Nascimento" value={nascimentoString}/>
          <hr />
          <CardItem label="CPF" value={funcionario.cpf} />
          <hr />
          <CardItem label="Cargo" value={setProfissaoByNivel(funcionario.nivel)} />
          <hr />
          {funcionario.crm && (
            <>
              <CardItem label="CRM" value={funcionario.crm} />
              <hr />
            </>
          )}
          {funcionario.especialidade?.nome && (
            <>
              <CardItem label="Especialidade" value={funcionario.especialidade.nome} />
              <hr />
            </>
          )}
          <CardItem label="Email" value={funcionario.email} />
          <hr />
          <CardItem label="Salario" value={formatCurrency(funcionario.salario)} />
          <hr />
          <div className="flex justify-between items-center">
            <h1>Histórico de pagamentos:</h1>
            {
              funcionario.pagamento ? (
                <PagamentoCard pagamentos={funcionario.pagamento} />
              ) : (
                <p>Não houve pagamento {funcionario.pagamento}</p>
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

export default FuncionarioCardDetails;
