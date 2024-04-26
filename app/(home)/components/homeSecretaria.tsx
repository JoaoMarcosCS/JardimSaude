
import FuncionariosCard from "./cards/FuncionariosCard";
import MedicamentosCard from "./cards/MedicamentosCard";
import OrcamentoCard from "./cards/OrcamentoCard";
import PacientesCard from "./cards/PacientesCard";
import TratamentosCard from "./cards/TratamentosCard";

const HomeSecretaria = () => {



  return (
    <section className="flex justify-center items-center flex-col pt-4">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-green-400 text-4xl font-bold ">Jardim Saúde</h1>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-around mt-3">
        <OrcamentoCard />
        <FuncionariosCard/>
        <MedicamentosCard/>
        <PacientesCard/>
        <TratamentosCard/>
      </div>
    </section>

  )
}

export default HomeSecretaria;
