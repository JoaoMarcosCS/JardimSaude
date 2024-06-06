import { useSelector } from "react-redux";
import { RootState } from "@/app/store/root-reducer";
import CardTotalTratamentosRealizados from "./cardsMedico/TotalTratamentosRealizados";
import CardTotalTratamentosCancelados from "./cardsMedico/TotalTratamentosCancelados";
import CardTotalTratamentosEmAndamento from "./cardsMedico/TotalTratamentosEmAndamento";
import CardTotalTratamentosFinalizados from "./cardsMedico/TotalTratamentosFinalizados";

const HomeMedico = () => {

  const { nome } = useSelector((state: RootState) => state.usuarioReducer);


  return (
    <section className="flex justify-center items-center flex-col">
      <div className="w-full flex items-center flex-col justify-center">
        <h1 className="text-green-400 text-3xl font-bold ">Olá, Dr(a) {nome}</h1>
        <div className="w-full flex justify-center gap-4 items-center flex-wrap mt-3">
          <CardTotalTratamentosRealizados/>
          <CardTotalTratamentosEmAndamento/>
          <CardTotalTratamentosFinalizados/>
          <CardTotalTratamentosCancelados/>
        </div>
      </div>
    </section>

  )
}

export default HomeMedico;
