import FuncionariosCard from "./cardsSecretaria/FuncionariosCard";
import MedicamentosCard from "./cardsSecretaria/MedicamentosCard";
import OrcamentoCard from "./cardsSecretaria/OrcamentoCard";
import PacientesCard from "./cardsSecretaria/PacientesCard";
import TratamentosCard from "./cardsSecretaria/TratamentosCard";
import TratamentoTable from "../../tratamentos/components/TratamentoTable"
import { useTratamentosData } from "@/app/tratamentos/hooks/useTratamentosData";
import FuncionariosTable from "@/app/funcionarios/components/tables/FuncionariosTable";
import MedicamentosTable from "@/app/estoque/components/tables/MedicamentosTable";
import { useMedicamentosData } from "@/app/estoque/hooks/useMedicamentosData";
import { useFuncionariosData } from "@/app/funcionarios/hooks/useFuncionariosData";

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
      <div className="container mt-4">
      <div className="flex flex-row items-center gap-4">
        <h1 className="font-bold text-2xl text-green-500">Funcionários</h1>
      </div>
      <FuncionariosTable hookFetchData={useFuncionariosData()}/>
      </div>
      <div className="container mt-4">
      <div className="flex flex-row items-center gap-4">
        <h1 className="font-bold text-2xl text-green-500">Estoque de medicamentos</h1>
      </div>
      <MedicamentosTable hookFetchData={useMedicamentosData()}/>
      </div>
    </section>

  )
}

export default HomeSecretaria;
