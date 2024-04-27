import { Card, CardHeader, CardDescription, CardTitle, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useHospitalData } from "../../hooks/useHospitalData";
import { Info } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/root-reducer";

const HomeMedico = () => {

  const { nome } = useSelector((state: RootState) => state.usuarioReducer);


  return (
    <section className="flex justify-center items-center flex-col  pt-32">
      <div className="w-full flex items-center flex-col justify-center">
        <h1 className="text-green-400 text-3xl font-bold ">Olá, Dr(a) {nome}</h1>
        <div className="w-full flex justify-center items-center px-4 pt-4">
        </div>
      </div>
    </section>

  )
}

export default HomeMedico;
