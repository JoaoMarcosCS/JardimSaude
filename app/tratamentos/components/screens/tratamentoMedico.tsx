import { useMedicoTratamentoData } from "../../hooks/useMedicoTratamentoData";
import { useTratamentosCanceladosDataByMedicoId } from "../../hooks/useTratamentosCanceladosDataByMedicoId";
import { useTratamentosEmAndamentoDataByMedicoId } from "../../hooks/useTratamentosEmAndamentoDataByMedicoId";
import { useTratamentosFinalizadosDataByMedicoId } from "../../hooks/useTratamentosFinalizadosDataByMedicoId";
import TratamentoTable from "../TratamentoTable";

const TratamentoMedico = () => {
  return(
    <div>
      <div className="flex justify-center items-center mt-4 w-full ">
        <div data-aos="fade-up" className="flex flex-col items-center border w-full border-slate-100 shadow rounded-md p-4 justify-start">
          <h1 className="font-bold text-2xl w-full text-start text-yellow-500">Em andamento</h1>
          <TratamentoTable hookFetchData={useTratamentosEmAndamentoDataByMedicoId()} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 w-full ">
        <div data-aos="fade-up" className="flex flex-col items-center border w-full border-slate-100 shadow rounded-md p-4 justify-start">
          <h1 className="font-bold text-2xl w-full text-start text-green-500">Finalizados</h1>
          <TratamentoTable hookFetchData={useTratamentosFinalizadosDataByMedicoId()} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 w-full ">
        <div data-aos="fade-up" className="flex flex-col items-center border w-full border-slate-100 shadow rounded-md p-4 justify-start">
          <h1 className="font-bold text-2xl w-full text-start text-red-500">Cancelados</h1>
          <TratamentoTable hookFetchData={useTratamentosCanceladosDataByMedicoId()} />
        </div>
      </div>
    </div>
  )
}

export default TratamentoMedico;
