"use client"

import { BookText } from "lucide-react"
import Image from "next/image"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"



const Login = () => {
    return (
        <div className="flex h-screen ">
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
                        <Input type="email" id="email" className="" placeholder="jmcsjoaomarcos@gmail.com"/>
                        <br />
                        <Label htmlFor="senha" className="text-sm font-medium">Senha</Label>
                        <Input type="password" id="senha" className="" placeholder="JMCS2024"/>
                        <br />
                        <Button className="w-full bg-green-600 text-base hover:bg-green-700 shadow-inner">Entrar</Button>
                    </div>
                </div>
            </div>
            <div className="w-3/4 flex-col xl:flex hidden justify-center items-center">
                <nav className="flex justify-end items-center pe-4 pt-2 w-full">
                    <Button variant={"secondary"} className="gap-1 text-"><BookText size={20} /> Documentação</Button>
                </nav>
                <div className="flex justify-center items-center flex-col h-screen w-2/3">
                    <p className="text-3xl font-medium ">
                        "No Jardim Saúde, semeamos cuidado e colhemos 
                        esperança, cultivando um ambiente de cura onde cada
                         paciente é uma flor única, regada com amor e expertise médica."
                    </p>
                    <div className="flex justify-start mt-5 items-center w-full gap-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="text-base font-medium">
                            @jaoa.marcos
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login