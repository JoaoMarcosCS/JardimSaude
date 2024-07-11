import { useQuery } from "@tanstack/react-query"
import { fetchTotalPacientesByMedicoId } from "../services/fetchTotalPacientesByMedicoId"


export function useTotalPacientesByMedicoId() {
  const query = useQuery({
    queryFn: fetchTotalPacientesByMedicoId,
    queryKey: ["total-paciente-medico-data"],
    refetchOnWindowFocus:true,
  })

  return query
}
