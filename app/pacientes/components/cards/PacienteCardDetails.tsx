import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, MoreHorizontal } from "lucide-react";



import { useEffect, useState } from "react";
import formatCurrency from "@/app/utils/formatCurrency";
import { Paciente } from "../../interfaces/Paciente";
import CardItem from "@/app/funcionarios/components/cards/CardItem";
import ModalDetalhesTratamento from "@/app/tratamentos/components/modalDetalhesTratamento";

interface PacienteCardDetailsProps {
  paciente: Paciente;
}


const PacienteCardDetails = ({ paciente }: PacienteCardDetailsProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const unformattedBirthDay = new Date(paciente.nascimento);
  const formattedBirthDay = unformattedBirthDay.toLocaleDateString();

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
            <h1 className="w-full text-center">{paciente.nome}</h1>
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <CardItem label={"Nome"} value={paciente.nome} />
          <hr />
          <CardItem label="Sexo" value={paciente.sexo} />
          <hr />
          <CardItem label="CPF" value={paciente.cpf} />
          <hr />
          <CardItem label="Altura" value={paciente.altura} />
          <hr />
          <CardItem label="Email" value={paciente.email} />
          <hr />
          <CardItem label="Telefone" value={paciente.telefone} />
          <hr />
          <CardItem label="Nascimento" value={formattedBirthDay} />
          <hr />
          <CardItem label="Cidade" value={`${paciente.cidade}, ${paciente.uf}`} />
          <hr />
          <CardItem label="Rua" value={paciente.rua} />
          <hr />
          <div className="flex flex-col">
            <h1 className="w-full">Histórico de tratamentos:</h1>
            {
              paciente.tratamentos ? (
                <div>
                  {
                    paciente.tratamentos.map((tratamento) => (
                      <div key={tratamento.id}
                      className="w-full mt-2 flex justify-between items-center flex-row">
                        <p>{tratamento.nome}</p>
                        <p className="flex flex-row items-center gap-1 hover:cursor-pointer">Ver<ModalDetalhesTratamento tratamento={tratamento} /></p>
                      </div>
                    ))
                  }
                </div>
              ) : (
                <p>Nenhum tratamento realizado ainda</p>
              )
            }
          </div>
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

export default PacienteCardDetails;
