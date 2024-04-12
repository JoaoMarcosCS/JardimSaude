"use client"

import { useSelector } from "react-redux";
import { IRootState } from "./store/root-reducer";
import { useRouter } from "next/navigation";


export default function Home() {

  const {isLoggedIn } = useSelector((state: IRootState) => state.usuarioReducer);
  const history = useRouter();

  return (
    <>Olá</>
  );
}
