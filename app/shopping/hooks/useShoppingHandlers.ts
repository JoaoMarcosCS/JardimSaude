import { useEffect, useState } from "react";
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import { toast } from "sonner";
import fetchShopping from "../services/fetchShopping";

const useShoppingHandlers = () => {

  const [shoppingData, setShoppingData] = useState<Medicamento[]>()
  const [isLoading, setIsLoading] = useState(false);
  const [shoppingDefaultData, setShoppingDefaultData] = useState<Medicamento[]>();


  useEffect(() => {
    defaultShopping();
  }, [])


  const defaultShopping = async () => {
    setIsLoading(true);
    try {
      const response = await fetchShopping();
      setShoppingDefaultData(response);
      setShoppingData(response);
    } catch (error) {

    } finally {
      setIsLoading(false);
    }

  }

  const searchMedicamentos = (nome: string) => {
    setIsLoading(true);
    const response = shoppingData?.filter(medicamento => medicamento.nome.toLocaleLowerCase().includes(nome.toLocaleLowerCase()))
    if (response) {
      setShoppingData(response);
    } else {
      setShoppingData(shoppingDefaultData);
    }
    setIsLoading(false);
  }

  return {
    shoppingData,
    isLoading,
    searchMedicamentos,
    defaultShopping,
  }
}

export default useShoppingHandlers;
