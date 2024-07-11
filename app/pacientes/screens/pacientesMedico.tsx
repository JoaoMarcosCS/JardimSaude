import PacientesTable from "../components/tables/PacientesTable";
import { usePacientesByMedicoIdData } from "../hooks/usePacientesByMedicoIdData";

const PacienteMedico = () => {
  return (
    <PacientesTable hookFetchData={usePacientesByMedicoIdData()}/>
  )
}

export default PacienteMedico;
