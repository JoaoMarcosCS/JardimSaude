import PacientesTable from "../components/tables/PacientesTable";
import { usePacientesData } from "../hooks/usePacientesData";


const PacienteSecretaria = () => {
  return (
    <PacientesTable hookFetchData={usePacientesData()}/>
  )
}

export default PacienteSecretaria;
