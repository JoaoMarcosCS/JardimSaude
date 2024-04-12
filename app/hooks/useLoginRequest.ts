import { useQuery } from "@tanstack/react-query";
import fetchToken from "../services/fetchToken";

 
export function useLoginRequest(){
    const query = useQuery({
        queryFn: fetchToken,
        queryKey:['fetch-token']
    })
    
    return query;
}