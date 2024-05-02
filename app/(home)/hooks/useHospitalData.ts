import { useQuery } from "@tanstack/react-query";
import fetchHospital from "../../services/fetchHospital";

export function useHospitalData() {
  const query = useQuery({
    queryFn: fetchHospital,
    queryKey: ['hospital-data'],
    refetchInterval:1000 * 60 /**1 minuto */
  });
  return query;
}
