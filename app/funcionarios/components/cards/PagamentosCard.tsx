
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AplicacaoMedicamento } from "@/app/aplicacoes_medicamentos/interfaces/aplicacaoMedicamentoInterface";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { EyeIcon } from "lucide-react";
import formatCurrency from "@/app/utils/formatCurrency";

interface PagamentoCardProps {
  pagamentos: Auditoria[];
}

const PagamentoCard = ({ pagamentos }: PagamentoCardProps) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-emerald-600"><EyeIcon/> Pagamentos</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[500px] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Histórico de Pagamentos</DialogTitle>
          <DialogDescription>
            Esses são os pagamentos realizados pelo Jardim Saúde.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[450px] overflow-y-scroll sm:max-w-[425px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dia</TableHead>
                <TableHead>Hora</TableHead>
                <TableHead>Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pagamentos.map((pagamento) => (
                <TableRow key={pagamento.id}>
                  <TableCell className="font-medium">
                    {new Date(pagamento.data).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {new Date(pagamento.data).toLocaleTimeString()}
                  </TableCell>
                  <TableCell>
                    {formatCurrency(pagamento.valor_transacao!)}
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </div>
        <DialogFooter className="w-full">
          <DialogClose asChild className=" flex items-center justify-center w-full">
            <Button type="button" variant="outline" className="border-none text-base">
              Voltar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}

export default PagamentoCard;
