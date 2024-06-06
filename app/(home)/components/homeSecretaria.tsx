import FuncionariosCard from "./cardsSecretaria/FuncionariosCard";
import MedicamentosCard from "./cardsSecretaria/MedicamentosCard";
import OrcamentoCard from "./cardsSecretaria/OrcamentoCard";
import PacientesCard from "./cardsSecretaria/PacientesCard";
import TratamentosCard from "./cardsSecretaria/TratamentosCard";
import TratamentoTable from "../../tratamentos/components/TratamentoTable"
import { useTratamentosData } from "@/app/tratamentos/hooks/useTratamentosData";

const HomeSecretaria = () => {

  return (
    <section className="flex justify-center items-center flex-col">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-green-400 text-4xl font-bold ">Jardim Saúde</h1>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center mt-3 pb-3">
        <OrcamentoCard />
        <FuncionariosCard/>
        <MedicamentosCard/>
        <PacientesCard/>
        <TratamentosCard/>
      </div>
      <div className="container mt-4">
      <div className="flex flex-row items-center gap-4">
        <h1 className="font-bold text-2xl text-green-500">Tratamentos</h1>
      </div>
      <TratamentoTable hookFetchData={useTratamentosData()}/>
      </div>
    </section>

  )
}

export default HomeSecretaria;
