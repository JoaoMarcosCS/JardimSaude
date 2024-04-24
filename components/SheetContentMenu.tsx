import { RootState } from "@/app/store/root-reducer";
import takeInitialLetters from "@/utils/takeInitialLetters";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Home, Stethoscope, Users, SquareUser, ClipboardPlus, Boxes, LineChart, Store } from "lucide-react";
import ActiveLink from "./activeLink";


const SheetContentMenu = () => {

  const { nome } = useSelector((state: RootState) => state.usuarioReducer);

  const userName = nome ? takeInitialLetters(nome) : "US";

  return (
    <>
      OLÁ
    </>
  )
}

export default SheetContentMenu;
