"use client"

import { useSelector } from "react-redux";
import { RootState } from "../store/root-reducer";
import HomeMedico from "./components/homeMedico";
import HomeSecretaria from "./components/homeSecretaria";

export default function Home() {

  const {nivel } = useSelector((state:RootState) => state.usuarioReducer);

  return (
    <>
      {nivel === 1 ? (
        <HomeSecretaria />
      ) : nivel === 2 ? (
        <HomeMedico />
      ) : (
        "use client"
      )}
    </>
  );
}
