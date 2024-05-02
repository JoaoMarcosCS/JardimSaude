import { useQuery } from "@tanstack/react-query"
import fetchTratamentos from "../services/fetchTratamentos"


export function useTratamentosData() {
  const query = useQuery({
    queryFn: fetchTratamentos,
    queryKey: ["tratamento-data"]
  })
  const tratamentos = query.data || [];

  return { ...query, data: tratamentos };
}
