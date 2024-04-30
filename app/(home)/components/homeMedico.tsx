import { useSelector } from "react-redux";
import { RootState } from "@/app/store/root-reducer";
import FuncionariosCard from "./cards/FuncionariosCard";
import MedicamentosCard from "./cards/MedicamentosCard";
import OrcamentoCard from "./cards/OrcamentoCard";
import PacientesCard from "./cards/PacientesCard";
import TratamentosCard from "./cards/TratamentosCard";

const HomeMedico = () => {

  const { nome } = useSelector((state: RootState) => state.usuarioReducer);


  return (
    <section className="flex justify-center items-center flex-col">
      <div className="w-full flex items-center flex-col justify-center">
        <h1 className="text-green-400 text-3xl font-bold ">Olá, Dr(a) {nome}</h1>
        <div className="w-full flex justify-center gap-4 items-center flex-wrap px-4">
          <OrcamentoCard />
          <FuncionariosCard />
          <MedicamentosCard />
          <PacientesCard />
          <TratamentosCard />
          <OrcamentoCard />
          <FuncionariosCard />
          <MedicamentosCard />
          <PacientesCard />
          <TratamentosCard />
          <OrcamentoCard />
          <FuncionariosCard />
          <MedicamentosCard />
          <PacientesCard />
          <TratamentosCard />
          <OrcamentoCard />
          <FuncionariosCard />
          <MedicamentosCard />
          <PacientesCard />
          <TratamentosCard />
          <OrcamentoCard />
          <FuncionariosCard />
          <MedicamentosCard />
          <PacientesCard />
          <TratamentosCard />
          <OrcamentoCard />
          <FuncionariosCard />
          <MedicamentosCard />
          <PacientesCard />
          <TratamentosCard />
          <OrcamentoCard />
          <FuncionariosCard />
          <MedicamentosCard />
          <PacientesCard />
          <TratamentosCard />
        </div>
      </div>
    </section>

  )
}

export default HomeMedico;
