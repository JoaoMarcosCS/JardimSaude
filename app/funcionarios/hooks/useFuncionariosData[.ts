import { useQuery } from "@tanstack/react-query";
import fetchFuncionarios from "../services/fetchFuncionarios";


export function useFuncionariosData() {
  const query = useQuery({
    queryKey: ["funcionarios-data"],
    queryFn: fetchFuncionarios
  });

  return query
}
