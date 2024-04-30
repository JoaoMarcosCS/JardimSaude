"use client"
import PresentationSide from "./components/PresentationSide"
import FormularioSide from "./components/formularioSide"

const Login = () => {

  return (
    <div className="flex h-screen ">

      <FormularioSide />
      <PresentationSide />
    </div>
  )
}

export default Login
