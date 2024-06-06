import { useQuery } from "@tanstack/react-query"
import fetchTratamentosEmAndamentoByMedicoId from "../services/fetchTratamentosEmAndamentoByMedicoId"


export function useTratamentosEmAndamentoDataByMedicoId() {
  const query = useQuery({
    queryFn: fetchTratamentosEmAndamentoByMedicoId,
    queryKey: ["tratamentos-emAndamento-data-medicoId"],
    refetchOnWindowFocus:true,
  })

  return query
}
