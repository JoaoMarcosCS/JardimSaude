import Image from "next/image"
import LoginForm from "./loginForm"

const FomularioSide = () => {

  return (
    <div className="xl:w-2/4 w-full shadow-lg flex items-center flex-col ">
      <nav className="px-5 py-3 gap-2 flex items-center w-full">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <p className="text-2xl tracking-wide text-green-500 font-semibold">Jardim Saúde</p>
      </nav>

      <div className=" mt-10 w-4/5 max-w-72 ">
        <p className="text-3xl font-medium">
          Bem-vindo de volta!
        </p>

        <p className="font-medium text-sm text-muted-foreground">
          Faça login para entrar no Jardim Saúde
        </p>
        <LoginForm />
      </div>

      <div className="mt-10 w4/5 max-w-72 ">
        <p className="text-muted-foreground text-sm px-2 text-center">
          Plataforma FullStack desenvolvido por João Marcos |
          <span><a className="text-blue-400" href="https://linkedin.com/in/joão-marcos-cândido-da-silva-58b29227a" target="_blank"> Linkedin</a></span>
        </p>
      </div>
    </div>
  )
}

export default FomularioSide;
