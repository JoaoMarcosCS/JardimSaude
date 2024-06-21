import { DEFAULT_SHOPPING } from "@/app/constants/apiEndPoints";
import api from "@/app/services/axios";
import { useEffect, useState } from "react";
import { formatterOptionsSelect } from "../utils/formatterOptionsSelect";
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import findMedicamentoShoppByNome from "../services/findMedicamentoShoppByNome";
import { toast } from "sonner";
import fetchShopping from "../services/fetchShopping";


interface SelectOptions {
  value: string;
  label: string;
}


const useShoppingHandlers = () => {

  const [shoppingData, setShoppingData] = useState<Medicamento[]>()
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    defaultShopping();
  }, [])


  const defaultShopping = async () => {
    setIsLoading(true);
    try {
      const response = await fetchShopping();
      setShoppingData(response);
    } catch (error) {

    }finally{
      setIsLoading(false);
    }

  }

  const searchMedicamentos = async (nome: string) => {
    setIsLoading(true);
    try {
      const response = await findMedicamentoShoppByNome(nome);
      setShoppingData(response);
    } catch (error) {
      toast.info("Nenhum medicamento encontrado.")
    } finally {
      setIsLoading(false);
    }
  };

  return {
    shoppingData,
    isLoading,
    searchMedicamentos,
    defaultShopping,
  }
}

export default useShoppingHandlers;
