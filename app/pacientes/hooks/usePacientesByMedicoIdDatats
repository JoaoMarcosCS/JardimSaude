import { useQuery } from "@tanstack/react-query"
import fetchPacientesByMedicoId from "../services/fetchPacientebyMedicoId"


export function usePacientesByMedicoIdData() {
  const query = useQuery({
    queryFn: fetchPacientesByMedicoId,
    queryKey: ["paciente-medico-data"],
    refetchOnWindowFocus:true,
  })

  return query
}
