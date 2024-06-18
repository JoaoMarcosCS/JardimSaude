"use client"

import AOS from "aos"
import "aos/dist/aos.css"
import { Github, GithubIcon, LinkedinIcon, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

const Contato = () => {

  useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <section className="flex px-5 justify-center items-center flex-wrap flex-col">
      <div className=" flex flex-col justify-start items-center">
        <p data-aos="fade-left" className="text-5xl text-black text-start w-full">João Marcos</p>
        <p data-aos="fade-left" data-aos-delay="100" className="text-base text-black text-start font-medium w-full">Desenvolvedor Web</p>
      </div>
      <div className=" flex  mt-4 items-start flex-col shadow border border-slate-100 p-4 rounded">
        <h1 className="text-2xl font-medium" data-aos-delay="300" data-aos="fade-left">Contatos</h1>
        <div>
          <p className="flex flex-row justify-start items-center gap-1 mt-6" data-aos="fade-left" data-aos-delay="400">
            <LinkedinIcon color="#36b4f7"/>
            <Link className="text-base font-medium" href={"https://www.linkedin.com/in/jo%C3%A3o-marcos-c%C3%A2ndido-da-silva-58b29227a/"}>
            Linkedin - João Marcos
            </Link>
          </p>

          <p className="flex flex-row justify-start items-center gap-1 mt-6" data-aos="fade-left" data-aos-delay="500">
          <Github color="#18191a"/>
          <Link href={"https://github.com/JoaoMarcosCS"} className="text-base font-medium">
            https://github.com/JoaoMarcosCS
          </Link>
          </p>

          <p className="flex flex-row justify-start items-center gap-1 mt-6" data-aos="fade-left" data-aos-delay="600">
            <Mail color="#fa291e"/>
            <span className="text-base font-medium">jmcsjoaomarcos@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contato
