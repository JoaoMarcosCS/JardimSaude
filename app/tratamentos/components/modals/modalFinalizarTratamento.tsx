import { AlertDialogHeader, AlertDialogFooter, AlertDialog, AlertDialogTrigger, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useActionTratamentoMutate } from "../../hooks/useActionTratamentoMutate";
import { useState } from "react";
import { ModalActionTratamentoProps } from "../../interfaces/modalActionTratamentoProps";
import { toast } from "sonner";

const ModalFinalizarTratamento = ({tratamentoId, modalController}:ModalActionTratamentoProps) => {

  const { mutate } = useActionTratamentoMutate()

  const handleFinalizarTratamento = () => {
    mutate({ id: tratamentoId, action: "finalizar" })
    toast.success("Tratamento finalizado!")
    modalController(false);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-emerald-700 hover:bg-emerald-800">Finalizar</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser revertida. Caso tenha cometido um erro ao finalizar esse tratamento,
            você terá que pedir para uma secretária(o) criar um novo para você com o mesmo paciente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-none">Voltar</AlertDialogCancel>
          <AlertDialogAction className="bg-emerald-700 hover:bg-emerald-800" onClick={handleFinalizarTratamento}>Finalizar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ModalFinalizarTratamento;
