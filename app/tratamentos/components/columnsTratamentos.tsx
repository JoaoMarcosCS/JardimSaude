"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tratamento } from "../interfaces/tratamentoInterface"
import { Badge } from "@/components/ui/badge"
import ModalDetalhesTratamento from "./modalDetalhesTratamento"



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
      const valorFormatado = Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: 'BRL'
      }).format(Number(valor))

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
    header: "Status",
    cell: ({ row }) => {
      let colorBg = "text-yellow-400";
      const status:any = row.getValue("status");
      if(status === "Em andamento"){
        colorBg = "text-yellow-400";
      }else if(status === "Finalizado"){
        colorBg = "text-green-400"
      }else if(status === "Cancelado"){
        colorBg = "text-red-400";
      }

      return <Badge  className={`${colorBg} bg-slate-100 font-bold`}>{status}</Badge>
    }
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
