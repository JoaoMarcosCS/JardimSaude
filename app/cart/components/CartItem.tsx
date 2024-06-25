import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface";
import formatCurrency from "@/app/utils/formatCurrency";

export interface CartProps {
  medicamento: Medicamento,
}

const CartItem = ({ medicamento }: CartProps) => {
  return (
    <div className="flex flex-row items-center justify-stretch mb-3 shadow border border-slate-100 rounded px-2 ps-4 py-3">
      <div className="w-2/3 flex flex-col justify-start items-start ">
        <p className="text-sm text-black">{medicamento.nome} {medicamento.peso}mg</p>
        <p className="text-muted-foreground text-xs italic">{medicamento.tipo}</p>
        <p className="text-base text-black">Total: {formatCurrency((medicamento.valor_unitario*medicamento.quantidade))}</p>
      </div>
      <div className="w-1/3 flex justify-cente flex-col gap-3 items-center ">
        <p className="text-base text-muted-foreground">Qtd</p>
        <p className="text-lg text-black">{medicamento.quantidade}</p>
      </div>
    </div>
  )
}

export default CartItem;
