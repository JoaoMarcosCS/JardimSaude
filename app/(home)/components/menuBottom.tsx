import { ClipboardPlus, Home, SquareUser, Stethoscope } from "lucide-react";
import Link from "next/link";

const MenuBottom = () => {
  return (
    <nav className="w-full hidden justify-center fixed bottom-0 items-center py-4 shadow-md max-[480px]:flex">
      <ul className="flex justify-between items-center px-4 w-full">
        <Link href={""}><li className="flex flex-col justify-center items-center"><Home /> Home</li></Link>
        <Link href={""}><li className="flex flex-col justify-center items-center"><Stethoscope /> Tratamentos</li></Link>
        <Link href={""}><li className="flex flex-col justify-center items-center"><SquareUser /> Pacientes</li></Link>
        <Link href={""}><li className="flex flex-col justify-center items-center"><ClipboardPlus /> Consultas</li></Link>
      </ul>
    </nav>
  )
}


export default MenuBottom;
