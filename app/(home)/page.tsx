"use client"

import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";
import { useEffect, useState } from "react";
import Cookie from "js-cookie"

export default function Home() {

  // const [nivel, setNivel] = useState(0);
  // useEffect(()=>{
  //   const _nivel = Number(Cookie.get("nivel"));
  //   setNivel(_nivel);
  // },[nivel])

  const { nivel, nome} = useSelector((state:RootState) => state.usuarioReducer);


  return (
    <div>
      Olá, {nome} <br />
      Você é um nivel : {nivel}
    </div>
  );
}
