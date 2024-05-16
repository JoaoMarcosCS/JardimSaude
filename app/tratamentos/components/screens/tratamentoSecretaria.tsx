import { useTratamentosData } from "../../hooks/useTratamentosData";
import TratamentoTable from "../TratamentoTable";

const TratamentoSecretaria = () => {
  return (
    <TratamentoTable hookFetchData={useTratamentosData()} />
  )
}

export default TratamentoSecretaria;
