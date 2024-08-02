import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { BookText } from "lucide-react"

const PresentationSide = () => {
  return (
    <div className="w-3/4 flex-col xl:flex hidden justify-center items-center relative">

      {/* <div className="w-20 h-20 bg-green-400 rounded-full absolute">

      </div> */}

      <nav className="flex justify-end items-center pe-4 pt-2 w-full z-50">
          <a 
            href="https://jardim-saude-doc.vercel.app/" target="_blank">
              <Button variant={"secondary"} className="gap-1 text-">
            <BookText size={20} />
            Documentação
            </Button>
          </a>

      </nav>

      <div className="flex justify-center items-center flex-col h-screen w-2/3 z-50">
        <p className="text-3xl font-medium " >
          &ldquo;No Jardim Saúde, semeamos cuidado e colhemos
          esperança, cultivando um ambiente de cura onde cada
          paciente é uma flor única, regada com amor e expertise médica.&rdquo;
        </p>
        <div className="flex justify-start mt-5 items-center w-full gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <p className="text-base font-medium">
            @jaoa.marcos
          </p>
        </div>
      </div>
    </div >
  )
}

export default PresentationSide
