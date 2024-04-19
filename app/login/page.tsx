"use client"

import { useEffect } from "react"
import PresentationSide from "./components/PresentationSide"
import FormularioSide from "./components/formularioSide"
import { useSelector } from "react-redux"
import { RootState } from "../store/root-reducer"
import { useRouter } from "next/navigation"


const Login = () => {

  // useEffect(() => {
  //   document.title = "Jardim Saúde | Login"

  // }, [])

  return (
    <div className="flex h-screen ">

      <FormularioSide />
      <PresentationSide />
    </div>
  )
}

export default Login
