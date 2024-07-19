import CardItem from "@/app/funcionarios/components/cards/CardItem";
import PagamentoCard from "@/app/funcionarios/components/cards/PagamentosCard";
import { FuncionarioInterface } from "@/app/funcionarios/interfaces/funcionarioInterface"
import { setProfissaoByNivel } from "@/app/funcionarios/utils/setProfissaoByNivel";
import formatCurrency from "@/app/utils/formatCurrency";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import Link from "next/link";
import { usePerfilFormHandlers } from "../../hooks/usePerfilFormHandlers";
import { InputField } from "@/app/funcionarios/components/inputs/inputField";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export interface UserFormPros {
  user: FuncionarioInterface;
}

export const UserForm = ({ user }: UserFormPros) => {
  if (user.nascimento) {
    const unformattedBirthDay = new Date(user.nascimento);
    const formattedBirthDay = unformattedBirthDay.toLocaleDateString();
  }

  const { register, handleEditPersonalData, handleSubmit, errors } = usePerfilFormHandlers(user);

  return (
    <div className=" max-sm:w-full w-[600px] rounded max-sm:shadow-none shadow p-4 mt-4">
      <div className="w-full flex justify-center items-center flex-col gap-1">
        <p className="text-xl">Editar informações pessoais</p>
      </div>

      <form action=""
        onSubmit={handleSubmit(handleEditPersonalData)}
        className="rounded p-5 max-sm:w-full mt-2 w-[600px]">

        <div>
          <InputField>
            <Label htmlFor="nome">Nome:</Label>
            <Input {...register("name")} type="text" id="nome" />
            <Label htmlFor="nome" className="text-red-600">{errors.name?.message}</Label>
          </InputField>
          <br />
          <InputField>
            <Label htmlFor="cpf">CPF:</Label>
            <Input {...register("cpf")} type="text" id="cpf" />
            <Label htmlFor="cpf" className="text-red-600">{errors.cpf?.message}</Label>
          </InputField>
          <br />
          <InputField>
            <Label htmlFor="email">Email:</Label>
            <Input {...register("email")} type="text" id="email" />
            <Label htmlFor="email" className="text-red-600">{errors.email?.message}</Label>
          </InputField>
          <br />
          <InputField>
            <Label htmlFor="nascimento">Nascimento:</Label>
            <Input {...register("nascimento")} type="date" id="nascimento" />
            <Label htmlFor="nasciemento" className="text-red-600">{errors.nascimento?.message}</Label>
          </InputField>
        </div>

      </form>
    </div>
  )
}
