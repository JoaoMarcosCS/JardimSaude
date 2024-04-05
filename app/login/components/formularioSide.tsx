import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


const FomularioSide = () => {
    return (
        <div className="xl:w-2/4 w-full shadow-lg flex items-center flex-col ">
            <nav className="px-5 py-3 gap-2 flex items-center w-full">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
                <p className="text-2xl tracking-wide text-green-500 font-semibold">Jardim Saúde</p>
            </nav>

            <div className=" mt-10 w-4/5 max-w-72 ">
                <p className="text-3xl font-medium">
                    Bem-vindo de volta!
                </p>
                <p className="font-medium text-sm text-muted-foreground">
                    Faça login para entrar no Jardim Saúde
                </p>
                <div className="mt-8">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input type="email" id="email" className="" placeholder="jmcsjoaomarcos@gmail.com" />
                    <br />
                    <Label htmlFor="senha" className="text-sm font-medium">Senha</Label>
                    <Input type="password" id="senha" className="" placeholder="JMCS2024" />
                    <br />
                    <Button className="w-full bg-green-600 text-base hover:bg-green-700 shadow-inner">Entrar</Button>
                </div>
            </div>

            <div className="mt-10 w4/5 max-w-72 ">
                <p className="text-muted-foreground text-sm px-2 text-center">
                    Sistema FullStack desenvolvido por João Marcos |
                    <span><a className="text-blue-400" href="https://linkedin.com/in/joão-marcos-cândido-da-silva-58b29227a" target="_blank"> Linkedin</a></span>
                </p>
            </div>
        </div>
    )
}

export default FomularioSide;