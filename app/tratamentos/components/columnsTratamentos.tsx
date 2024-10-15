"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tratamento } from "../interfaces/tratamentoInterface"
import { Badge } from "@/components/ui/badge"
import ModalDetalhesTratamento from "./modalDetalhesTratamento"
import formatCurrency from "@/app/utils/formatCurrency"
import setStatusColor from "../utils/setStatusColor"

export const columns: ColumnDef<Tratamento>[] = [
  {
    accessorKey: "nome",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tratamento
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "valor",
    header:({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Valor
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const valor = row.getValue("valor")
      const valorFormatado = formatCurrency(valor as number);

      return <div className="font-medium">{valorFormatado}</div>
    },
  },
  {
    accessorKey: "medico_responsavel.name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Medico
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "paciente.nome",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Paciente
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "inicio",
    header:  ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Início
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const inicioDate = new Date(row.getValue("inicio"));
      const inicioDateFormatted = inicioDate.toLocaleDateString();
      return <div>{inicioDateFormatted}</div>
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status:any = row.getValue("status");

      const {bgColor, textColor} = setStatusColor(status);

      return <Badge  className={`${textColor} ${bgColor} font-bold`}>{status}</Badge>
    },

  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <ModalDetalhesTratamento tratamento={row.original}/>
      )
    },
  }
]
