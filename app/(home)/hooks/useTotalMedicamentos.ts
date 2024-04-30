import { useQuery } from "@tanstack/react-query";
import fetchTotalMedicamentos from "../../services/Medicamentos/fetchTotalMedicamentos";

export function useTotalMedicamentos() {
  const query = useQuery({
    queryKey: ["medicamentos-total"],
    queryFn: fetchTotalMedicamentos
  });

  return query
}
