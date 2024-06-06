import { useQuery } from "@tanstack/react-query"
import fetchTotalTratamentosByMedicoId from "../services/fetchTotalTratamentosByMedicoId"


export function useTotalTratamentosByMedicoId() {
  const query = useQuery({
    queryFn: fetchTotalTratamentosByMedicoId,
    queryKey: ["total-tratamentos-medicoId"],
    refetchOnWindowFocus:true,
  })

  return query
}
