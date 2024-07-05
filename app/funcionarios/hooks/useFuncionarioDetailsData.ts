import { useQuery } from "@tanstack/react-query";
import fetchFuncionarioDetails from "../services/fetchFuncionarioDetails";


export function useFuncionarioDetailsData(id:number | string) {
  const query = useQuery({
    queryKey: ["funcionario-details-data", id],
    queryFn: () => fetchFuncionarioDetails(id),
    enabled: !!id
  });

  return query
}
