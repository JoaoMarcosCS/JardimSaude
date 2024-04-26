import { useQuery } from "@tanstack/react-query";
import fetchTotalPacientes from "../services/Pacientes/fetchTotalPacientes";

export function useTotalPacientes(){
  const query = useQuery({
    queryKey:['pacientes-total'],
    queryFn:fetchTotalPacientes
  })

  return query;
}

