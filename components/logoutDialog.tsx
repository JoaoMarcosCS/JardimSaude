import { LogOut } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import Cookie from "js-cookie";
import api from "@/app/services/axios";
import { useRouter } from "next/navigation";
import useLogoutService from "@/app/services/logoutService";



const LogoutDialog = () => {

  const router = useRouter();

  const handleLogout = () => {
    // Cookie.remove("auth_token");
    // Cookie.remove("nivel");
    // delete api.defaults.headers.Authorization;
    // push("/login");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLogoutService(router);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex w-full min-w-14 flex-col transition-all justify-center py-2 text-xs font-semibold items-center rounded-sm hover:bg-green-300">
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
          <AlertDialogAction className="bg-red-400 text-white" onClick={handleLogout}>Sair</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}

export default LogoutDialog;
