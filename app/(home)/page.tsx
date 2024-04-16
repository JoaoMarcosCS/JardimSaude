"use client"

import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";
import MenuBottom from "./components/menuBottom";

export default function Home() {

  const {nivel} = useSelector((state:RootState) => state.usuarioReducer);

  return (
    <div>
      <MenuBottom/>
    </div>
  );
}
