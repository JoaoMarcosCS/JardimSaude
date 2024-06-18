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

  const [defaultOptins, setDefaultOptions] = useState<SelectOptions[]>()
  const [shoppingId, setShoppingId] = useState<Medicamento>()
  const [shoppingData, setShoppingData] = useState<Medicamento[]>()
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true);
    defaultShoppingOptions();
    defaultShopping();
    setIsLoading(false);
  },[])

  const defaultShoppingOptions = async () => {
    const {data} = await api.get<Medicamento[]>(`${DEFAULT_SHOPPING}`);
    const formattedOptions:SelectOptions[] = data.map(medicamento => ({
      value: `${medicamento.nome} ${medicamento.peso}mg`,
      label: `${medicamento.nome} ${medicamento.peso}mg`
    }))
    setDefaultOptions(formattedOptions);
  }

  const defaultShopping = async () => {
    const response = await fetchShopping();
    setShoppingData(response);
  }

  const loadOptions = async (search: string) => {
    const response = await findMedicamentoShoppByNome(search);
    const formattedOptions:SelectOptions[] = response.map(medicamento => ({
      value: `${medicamento.nome} ${medicamento.peso}mg`,
      label: `${medicamento.nome} ${medicamento.peso}mg`
    }))
    return formattedOptions;
  }

  const handleChangeSelectOption = (seletcOption: any) => {
    setShoppingId(seletcOption.value);
  }

  const handleConfirmShopping = async () => {
    if (shoppingId) {
      setIsLoading(true)
      const response = await findMedicamentoShoppByNome(shoppingId.nome);
      setShoppingData(response);
      setIsLoading(false);
    } else {
      toast.warning("Nenhum medicamento pesquisado")
    }
  }

  return{
    defaultOptins,
    loadOptions,
    handleChangeSelectOption,
    shoppingData,
    handleConfirmShopping,
    isLoading
  }
}

export default useShoppingHandlers;
