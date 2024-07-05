"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import formatCurrency from "@/app/utils/formatCurrency"
import { FuncionarioInterface } from "../../interfaces/funcionarioInterface"
import { setProfissaoByNivel } from "../../utils/setProfissaoByNivel"
import FuncionarioCardDetails from "../cards/FuncionarioCardDetails"

export const columns: ColumnDef<FuncionarioInterface>[] = [
  {
    accessorKey: "name",
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
    accessorKey: "cpf",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CPF
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "nivel",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cargo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    cell: ({ row }) => {
      const nivel: number = row.getValue("nivel");

      const profissao = setProfissaoByNivel(nivel);

      return <div>{profissao}</div>
    }
  },
  {
    accessorKey: "crm",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CRM
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "especialidade.nome",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Especialdiade
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "salario",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Salário
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell:({row}) => {
      const salarioNaoFormatado:number = row.getValue("salario");
      const salarioFormatado = formatCurrency(salarioNaoFormatado);
      return <div>{salarioFormatado}</div>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <FuncionarioCardDetails funcionario={row.original}/>
      )
    },
  }
]
