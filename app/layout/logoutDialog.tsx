import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import useLogoutService from "@/app/services/logoutService";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";



const LogoutDialog = () => {

  const router = useRouter();

  const HandleLogout = () => {
    useLogoutService(router);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex w-full min-w-14 flex-col transition-all justify-center py-2 text-xs font-semibold items-center rounded-sm hover:text-green-400">
          <LogOut /> Sair
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja mesmo encerrar sua sessão?</AlertDialogTitle>
          <AlertDialogDescription>
            Você irá desolgar da sua conta. Caso queira ver seus pacientes, constulas e outras informações, você terá
            que realizar o login novamente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-green-400 text-white">Voltar</AlertDialogCancel>
          <AlertDialogAction className="bg-red-400 text-white" onClick={HandleLogout}>Sair</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}

export default LogoutDialog;
