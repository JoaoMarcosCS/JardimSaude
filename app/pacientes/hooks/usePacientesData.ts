import { useQuery } from "@tanstack/react-query"
import fetchPacientes from "../services/fetchPacientes"


export function usePacientesData() {
  const query = useQuery({
    queryFn: fetchPacientes,
    queryKey: ["pacientes-data"],
    refetchOnWindowFocus:true,
  })

  return query
}
