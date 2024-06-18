import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import AsyncSelect from "react-select/async";
import useShoppingHandlers from "../../hooks/useShoppingHandlers";

const SelectShopping = () => {

  const {defaultOptins, handleChangeSelectOption, loadOptions, handleConfirmShopping} = useShoppingHandlers()

  return (
    <div className="flex flex-row items-center w-full gap-1 justify-center">
      <AsyncSelect
        className="w-1/2"
        loadOptions={loadOptions}
        placeholder={"Dopamina, Adrenalina..."}
        onChange={handleChangeSelectOption}
        noOptionsMessage={() => "Nenhum medicamento encontrado"}
        loadingMessage={() => "Procurando..."}
        defaultOptions={defaultOptins}
      />

      <Button className="bg-emerald-500 text-white hover:bg-emerald-600" onClick={handleConfirmShopping}><Search/></Button>
    </div>
  )
}

export default SelectShopping
