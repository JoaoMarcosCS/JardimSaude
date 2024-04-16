"use client"

import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";


export default function Home() {

  const {nivel, nome} = useSelector((state:RootState) => state.usuarioReducer);

  return (
    <div>
      Olá, {nome} <br />
      Você é um nivel : {nivel}
    </div>
  );
}
