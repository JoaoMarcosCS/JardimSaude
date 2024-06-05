import { AlertDialogHeader, AlertDialogFooter, AlertDialog, AlertDialogTrigger, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useActionTratamentoMutate } from "../../hooks/useActionTratamentoMutate";
import { useState } from "react";
import { ModalActionTratamentoProps } from "../../interfaces/modalActionTratamentoProps";
import { toast } from "sonner";


const ModalCancelarTratamento = ({tratamentoId, modalController}:ModalActionTratamentoProps) => {

  const { mutate } = useActionTratamentoMutate()

  const handleCancelarTratamento = () => {
    mutate({ id: tratamentoId, action: "cancelar" })
    toast.success("Tratamento cancelado!");
    modalController(false);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"}>Cancelar</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser revertida. Caso tenha cometido um erro ao cancelar esse tratamento,
            você terá que pedir para uma secretária(o) criar um novo para você com o mesmo paciente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-none">Voltar</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive" onClick={handleCancelarTratamento}>Cancler</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ModalCancelarTratamento;
