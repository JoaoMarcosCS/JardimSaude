"use client"

import FuncionarioForm from "../components/forms/funcionarioForm";

const NovoFuncionario = () => {
  return (
    <section className="mt-2 items-center max-sm:w-full justify-center flex-col flex">
      <h1>Formulário de contratação</h1>
      <FuncionarioForm />
    </section>
  )
}

export default NovoFuncionario;
