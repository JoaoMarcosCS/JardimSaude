import { useSelector } from "react-redux";
import { RootState } from "@/app/store/root-reducer";
import CardTotalTratamentosRealizados from "./cardsMedico/TotalTratamentosRealizados";
import CardTotalTratamentosCancelados from "./cardsMedico/TotalTratamentosCancelados";
import CardTotalTratamentosEmAndamento from "./cardsMedico/TotalTratamentosEmAndamento";
import CardTotalTratamentosFinalizados from "./cardsMedico/TotalTratamentosFinalizados";
import TratamentoTable from "@/app/tratamentos/components/TratamentoTable";
import { useTratamentosEmAndamentoDataByMedicoId } from "@/app/tratamentos/hooks/useTratamentosEmAndamentoDataByMedicoId";
import { useTratamentosFinalizadosDataByMedicoId } from "@/app/tratamentos/hooks/useTratamentosFinalizadosDataByMedicoId";
import { useTratamentosCanceladosDataByMedicoId } from "@/app/tratamentos/hooks/useTratamentosCanceladosDataByMedicoId";

const HomeMedico = () => {

  const { nome } = useSelector((state: RootState) => state.usuarioReducer);


  return (
    <section className="flex justify-center items-center flex-col">
      <div className="w-full flex items-center flex-col justify-center">
        <h1 className="text-green-400 text-3xl font-bold ">Olá, Dr(a) {nome}</h1>
        <div className="w-full flex justify-center gap-4 items-center flex-wrap mt-3">
          <CardTotalTratamentosRealizados />
          <CardTotalTratamentosEmAndamento />
          <CardTotalTratamentosFinalizados />
          <CardTotalTratamentosCancelados />
        </div>
      </div>
      <div className="container mt-4 shadow-lg">
        <div className="flex flex-row items-center gap-4">
          <h1 className="font-bold text-2xl text-yellow-500">Em andamento</h1>
        </div>
        <TratamentoTable hookFetchData={useTratamentosEmAndamentoDataByMedicoId()}/>
      </div>
      <div className="container mt-4 shadow-lg">
        <div className="flex flex-row items-center gap-4">
          <h1 className="font-bold text-2xl text-green-500">Finalizados</h1>
        </div>
        <TratamentoTable hookFetchData={useTratamentosFinalizadosDataByMedicoId()}/>
      </div>
      <div className="container mt-4 shadow-lg">
        <div className="flex flex-row items-center gap-4">
          <h1 className="font-bold text-2xl text-red-400">Cancelados</h1>
        </div>
        <TratamentoTable hookFetchData={useTratamentosCanceladosDataByMedicoId()}/>
      </div>
    </section>

  )
}

export default HomeMedico;
