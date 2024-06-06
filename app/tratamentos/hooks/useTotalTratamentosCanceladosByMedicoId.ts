import { useQuery } from "@tanstack/react-query"
import fetchTotalTratamentosCanceladosByMedicoId from "../services/fetchTotalTratamentosCanceladosByMedicoId"


export function useTotalTratamentosCanceladosByMedicoId() {
  const query = useQuery({
    queryFn: fetchTotalTratamentosCanceladosByMedicoId,
    queryKey: ["total-tratamentos-cancelados-medicoId"],
    refetchOnWindowFocus:true,
  })

  return query
}
