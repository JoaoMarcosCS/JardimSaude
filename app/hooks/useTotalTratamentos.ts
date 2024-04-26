import { useQuery } from "@tanstack/react-query";
import fetchTotalTratamentos from "../services/Tratamentos/fetchTotalTratamentos";

export function useTotalTratamentos() {
  const query = useQuery({
    queryFn:fetchTotalTratamentos,
    queryKey:["tratamento-total"]
  })

  return query
}
