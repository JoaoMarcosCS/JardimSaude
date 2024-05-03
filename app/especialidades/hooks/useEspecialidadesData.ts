import { useQuery } from "@tanstack/react-query"
import fetchEspecialidades from "../services/fetchEspecialidades"


export function useEspecialidadesData() {
  const query = useQuery({
    queryFn: fetchEspecialidades,
    queryKey: ["especialidade-data"]
  })

  return query
}
