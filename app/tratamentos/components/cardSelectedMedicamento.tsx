import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface"
import { CircleMinus, CirclePlus, Plus } from "lucide-react";
import { useState } from "react"

const CardSelectedMedicamento = (medicamento: Medicamento) => {
  const[ qtd, setQtd] = useState(0);

  return (
    <div className="flex w-full py-1 px-2 flex-col">
      <div className="w-2/3">
        <h1 className="text-left w-full">{medicamento.nome} ({medicamento.peso}mg)</h1>
        <p className="text-inherit">Quantidade: {medicamento.quantidade}</p>
      </div>
      <div className="w-1/3">
      <CircleMinus />
        {qtd}
      <CirclePlus/>
      </div>
    </div>
  )
}

export default CardSelectedMedicamento
