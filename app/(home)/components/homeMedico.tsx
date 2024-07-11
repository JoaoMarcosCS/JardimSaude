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
import TotalPacientesCard from "@/app/pacientes/components/cards/TotalPacientesCard";

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
          <TotalPacientesCard/>
        </div>
      </div>
      <br />
      <div className="flex justify-center items-center mt-4 w-full ">
        <div data-aos="fade-up" className="flex flex-col items-center border w-11/12 border-slate-100 shadow rounded-md p-4 justify-start">
          <h1 className="font-bold text-2xl w-full text-start text-yellow-500">Em andamento</h1>
          <TratamentoTable hookFetchData={useTratamentosEmAndamentoDataByMedicoId()} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 w-full ">
        <div data-aos="fade-up" className="flex flex-col items-center border w-11/12 border-slate-100 shadow rounded-md p-4 justify-start">
          <h1 className="font-bold text-2xl w-full text-start text-green-500">Finalizados</h1>
          <TratamentoTable hookFetchData={useTratamentosFinalizadosDataByMedicoId()} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 w-full ">
        <div data-aos="fade-up" className="flex flex-col items-center border w-11/12 border-slate-100 shadow rounded-md p-4 justify-start">
          <h1 className="font-bold text-2xl w-full text-start text-red-500">Cancelados</h1>
          <TratamentoTable hookFetchData={useTratamentosCanceladosDataByMedicoId()} />
        </div>
      </div>

    </section>

  )
}

export default HomeMedico;
