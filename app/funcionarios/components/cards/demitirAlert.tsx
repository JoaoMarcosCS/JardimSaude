import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { demitirFuncionarioProps } from "../../services/demitirFuncionario";
import { useDemitirFuncionarioMutate } from "../../hooks/useDemitirFuncionarioMutate";
import { Loader } from "lucide-react";

const DemitirAlert = ({id, nome}: demitirFuncionarioProps) => {

  const {mutate, isPending} = useDemitirFuncionarioMutate()

  const handleDemitirButtonClick = () =>{
    mutate({id, nome});
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"}>Demitir</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza que deseja demitir {nome}?</AlertDialogTitle>
          <AlertDialogDescription>
            Você está prestes a demitir o(a) funcionário(a) {nome}. Você não excluirá o registro dela na nossa
            base de dados, mas irá impedi-la de realizar login e receber pagamentos e os secretários(as)
            não poderão mais atribuir tratamentos para {nome}. Você tem certeza que deseja demitir?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-green-400 border-none bg-transparent text-black">Voltar</AlertDialogCancel>
          <AlertDialogAction className="bg-red-400 text-white" onClick={handleDemitirButtonClick}>
            {
              isPending? (
                <>
                  <Loader/> Demitindo...
                </>
              ):(
                <>Demitir mesmo assim</>
              )
            }
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DemitirAlert;
