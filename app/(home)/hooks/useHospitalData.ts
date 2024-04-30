import { useQuery } from "@tanstack/react-query";
import fetchHospital from "../../services/fetchHospital";

export function useHospitalData() {
  const query = useQuery({
    queryFn: fetchHospital,
    queryKey: ['hospital-data']
  });
  return query;
}
