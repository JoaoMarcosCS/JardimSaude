import OrcamentoCard from "./OrcamentoCard";

const HomeSecretaria = () => {



  return (
    <section className="flex justify-center items-center flex-col pt-4">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-green-400 text-4xl font-bold ">Jardim Saúde</h1>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-around mt-3">
        <OrcamentoCard />
        <OrcamentoCard />
        <OrcamentoCard />
        <OrcamentoCard />
        <OrcamentoCard />
      </div>
    </section>

  )
}

export default HomeSecretaria;
