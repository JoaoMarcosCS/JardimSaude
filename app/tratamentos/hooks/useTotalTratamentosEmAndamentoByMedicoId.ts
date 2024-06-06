import { useQuery } from "@tanstack/react-query"
import fetchTotalTratamentosEmAndamentoByMedicoId from "../services/fetchTotalTratamentosEmAndamentoByMedicoId"


export function useTotalTratamentosEmAndamentoByMedicoId() {
  const query = useQuery({
    queryFn: fetchTotalTratamentosEmAndamentoByMedicoId,
    queryKey: ["total-tratamentos-emAndamento-medicoId"],
    refetchOnWindowFocus:true,
  })

  return query
}
