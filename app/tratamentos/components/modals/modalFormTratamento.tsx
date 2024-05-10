import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import TratamentoForm from "../forms/tratamentoForm";

const ModalFormTratamento = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border rounded max-h-[450px] border-emerald-300 shadow  px-2 overflow-x-hidden overflow-y-scroll">
        <DialogHeader className="rounded">
          <DialogTitle className="text-emerald-400">Iniciar tratamento</DialogTitle>
        </DialogHeader>
        <TratamentoForm/>
        <DialogFooter>
          <DialogClose asChild>
          <Button className="bg-emerald-500">Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalFormTratamento;
