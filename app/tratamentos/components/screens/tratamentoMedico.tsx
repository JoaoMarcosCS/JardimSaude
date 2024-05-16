import { useMedicoTratamentoData } from "../../hooks/useMedicoTratamentoData";
import TratamentoTable from "../TratamentoTable";

const TratamentoMedico = () => {
  return(
    <TratamentoTable hookFetchData={useMedicoTratamentoData()} />
  )
}

export default TratamentoMedico;
