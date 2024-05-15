import { useQuery } from "@tanstack/react-query"
import fetchMedicoTratamentos from "../services/fetchMedicoTratamentos"


export function useMedicoTratamentoData() {
  const query = useQuery({
    queryFn: fetchMedicoTratamentos,
    queryKey: ["tratamento-medico-data"],
    refetchOnWindowFocus:true,
  })

  return query
}
