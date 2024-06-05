
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

interface ModalMedicamentosAplicadosProps {
  aplicacoes: AplicacaoMedicamento[];
}

const ModalMedicamentosAplicados = ({ aplicacoes }: ModalMedicamentosAplicadosProps) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-emerald-600"><EyeIcon/> Aplicacões</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Medicamentos aplicados</DialogTitle>
          <DialogDescription>
            Esses são os medicamentos que o médico aplicou no paciente durante o tratamento.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[450px] overflow-y-scroll sm:max-w-[425px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Medicamento</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Horário</TableHead>
                <TableHead>Dia</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {aplicacoes.map((aplicacao) => (
                <TableRow key={aplicacao.id}>
                  <TableCell className="font-medium">{aplicacao.medicamento?.nome}</TableCell>
                  <TableCell>{aplicacao.quantidade_aplicada}</TableCell>
                  <TableCell>{new Date(aplicacao.hora_aplicacao).toLocaleTimeString()}</TableCell>
                  <TableCell className="text-right">{new Date(aplicacao.hora_aplicacao).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Voltar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}

export default ModalMedicamentosAplicados;
