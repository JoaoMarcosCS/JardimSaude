"use client"

import { Github, LinkedinIcon, Mail } from "lucide-react"
import Link from "next/link"

const Contato = () => {

  return (
    <section className="flex px-5 justify-center items-center flex-wrap flex-col">
      <div className=" flex flex-col justify-start items-center">
        <p className="text-5xl text-black text-start">João Marcos</p>
        <p className="text-base text-black text-start font-medium">Desenvolvedor Web</p>
      </div>
      <div className=" flex  mt-4 items-start flex-col shadow border border-slate-100 p-4 rounded">
        <h1 className="text-2xl font-medium" >Links de contato</h1>
        <div>
          <p className="flex flex-row justify-start items-center gap-1 mt-6"  >
            <LinkedinIcon color="#36b4f7" />
            <Link className="text-base font-medium" href={"https://www.linkedin.com/in/jo%C3%A3o-marcos-c%C3%A2ndido-da-silva-58b29227a/"}>
              Linkedin - João Marcos
            </Link>
          </p>

          <p className="flex flex-row justify-start items-center gap-1 mt-6"  >
            <Github color="#18191a" />
            <Link href={"https://github.com/JoaoMarcosCS"} className="text-base font-medium">
              https://github.com/JoaoMarcosCS
            </Link>
          </p>

          <p className="flex flex-row justify-start items-center gap-1 mt-6"  >
            <Mail color="#fa291e" />
            <span className="text-base font-medium">jmcsjoaomarcos@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contato
