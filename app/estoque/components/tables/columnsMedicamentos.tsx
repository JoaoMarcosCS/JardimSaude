"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import formatCurrency from "@/app/utils/formatCurrency"
import { Medicamento } from "@/app/medicamentos/interfaces/medicamentoInterface"

export const columns: ColumnDef<Medicamento>[] = [
  {
    accessorKey: "nome",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "valor_unitario",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nascimento
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const valorNaoFormatado:number = row.getValue("valor_unitario");
      const valorFormatada = formatCurrency(valorNaoFormatado);
      return <div>{valorFormatada}</div>;
    }
  },
  {
    accessorKey: "peso",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Dosagem
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell:({row}) => {
      const dosagem:number = row.getValue("peso")
      return <p>{dosagem} mg</p>
    }
  },
  {
    accessorKey: "tipo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tipo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "quantidade",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className=" flex w-full"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Qtd em estoque
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell:({row}) => {
      const quantidade:number = row.getValue("quantidade")
      return <div className="flex justify-center">{quantidade}</div>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <>+</>
      )
    },
  }
]
