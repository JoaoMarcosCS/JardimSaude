import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";

export interface CartProps{
  medicamento: Medicamento,
}

const CartItem = ({medicamento}: CartProps) => {
  return(
    <div className="flex flex-row items-center justify-stretch mb-3">
      <div className="w-2/3 bg-red-500 flex flex-col justify-start items-start">
      <p>{medicamento.nome}</p>
      <p>{medicamento.tipo}</p>
      <p>{medicamento.quantidade * medicamento.valor_unitario}</p>
      </div>
      <div className="w-1/3 flex justify-center bg-green-500">
        <p>Qtd</p>
        <p>{medicamento.quantidade}</p>
      </div>
    </div>
  )
}

export default CartItem;
