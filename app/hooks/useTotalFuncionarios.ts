import { useQuery } from "@tanstack/react-query";
import fetchFuncionarios from "../services/Funcionarios/fetchTotalFuncionarios";

export function useTotalFuncionarios(){
  const query = useQuery({
    queryKey:["funcionarios-total"],
    queryFn:fetchFuncionarios
  });

  return query
}
