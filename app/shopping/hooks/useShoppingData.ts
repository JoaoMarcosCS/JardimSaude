import { useQuery } from "@tanstack/react-query";
import fetchShopping from "../services/fetchShopping";

export function useShoppingData(){
  const query = useQuery({
    queryKey:['shopping-data'],
    queryFn: fetchShopping
  })
  return query;
}
