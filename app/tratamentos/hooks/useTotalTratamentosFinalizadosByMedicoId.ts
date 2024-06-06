import { useQuery } from "@tanstack/react-query"
import fetchTotalTratamentosFinalizadosByMedicoId from "../services/fetchTotalTratamentosFinalizadosByMedicoId"


export function useTotalTratamentosFinalizadosByMedicoId() {
  const query = useQuery({
    queryFn: fetchTotalTratamentosFinalizadosByMedicoId,
    queryKey: ["total-tratamentos-finalizados-medicoId"],
    refetchOnWindowFocus:true,
  })

  return query
}
