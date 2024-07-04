import { useQuery } from "@tanstack/react-query";
import fetchMedicamentos from "../services/fetchMedicamentos";


export function useMedicamentosData() {
  const query = useQuery({
    queryKey: ["medicamentos-data"],
    queryFn: fetchMedicamentos
  });

  return query
}
