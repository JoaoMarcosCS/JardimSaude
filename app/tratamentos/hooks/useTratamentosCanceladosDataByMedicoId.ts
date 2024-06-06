import { useQuery } from "@tanstack/react-query"
import fetchTratamentosCanceladosByMedicoId from "../services/fetchTratamentosCanceladosByMedicoId"


export function useTratamentosCanceladosDataByMedicoId() {
  const query = useQuery({
    queryFn: fetchTratamentosCanceladosByMedicoId,
    queryKey: ["tratamentos-cancelados-data-medicoId"],
    refetchOnWindowFocus:true,
  })

  return query
}
