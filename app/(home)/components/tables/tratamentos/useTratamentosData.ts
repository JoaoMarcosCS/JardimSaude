import fetchTratamentos from "@/app/services/Tratamentos/fetchTratamentos";
import { useQuery } from "@tanstack/react-query";

export function useTratamentosData() {
  const query = useQuery({
    queryFn: fetchTratamentos,
    queryKey: ["tratamento-data"]
  })

  return query
}
