import { useQuery } from "@tanstack/react-query";
import fetchTotalFuncionarios from "../../services/Funcionarios/fetchTotalFuncionarios";

export function useTotalFuncionarios() {
  const query = useQuery({
    queryKey: ["funcionarios-total"],
    queryFn: fetchTotalFuncionarios
  });

  return query
}
