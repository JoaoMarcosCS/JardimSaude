import { useMemo, useState } from "react";
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import { useShoppingData } from "./useShoppingData";

const useShoppingHandlers = () => {

  const { data, isLoading } = useShoppingData()
  const [search, setSearch] = useState("");
  const [isFiltring, setIsFiltring] = useState(false)



  const filtredMedicamentos = useMemo<Medicamento[] | undefined>(() => {
    setIsFiltring(true);
    const searchLower = search.toLowerCase();
    const dataFiltred = data?.filter((medicamento) => medicamento.nome.toLowerCase().includes(searchLower))

    setIsFiltring(false);
    return dataFiltred;

  }, [search, isLoading]);

  const handleSearchChange = (event:any) => {
    setSearch(event.target.value);
  }

  return {
    isLoading,
    filtredMedicamentos,
    setSearch,
    search,
    isFiltring,
    handleSearchChange
  }
}

export default useShoppingHandlers;
