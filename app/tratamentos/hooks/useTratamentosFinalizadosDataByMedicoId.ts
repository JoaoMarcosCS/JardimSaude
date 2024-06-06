import { useQuery } from "@tanstack/react-query"
import fetchTratamentosFinalizadosByMedicoId from "../services/fetchTratamentosFinalizadosByMedicoId"


export function useTratamentosFinalizadosDataByMedicoId() {
  const query = useQuery({
    queryFn: fetchTratamentosFinalizadosByMedicoId,
    queryKey: ["tratamentos-finalizados-data-medicoId"],
    refetchOnWindowFocus:true,
  })

  return query
}
