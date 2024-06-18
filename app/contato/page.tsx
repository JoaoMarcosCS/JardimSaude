"use client"

import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Contato = () => {

  useEffect(() => {
    AOS.init({});
  }, [])

  return (
    <section className="flex px-5 justify-start items-center flex-wrap">
      <div className=" ">
        <Image data-aos="fade-left" src="/contato-foto.png" className="rounded-full" alt="Logo" width={150} height={150} />
      </div>
      <div className="ms-2 flex flex-col justify-start items-center">
        <p data-aos="fade-left" data-aos-delay="500" className="text-5xl text-black text-start w-full">João Marcos</p>
        <p data-aos="fade-left"data-aos-delay="700" className="text-base text-black text-start font-medium ps-2 w-full">Desenvolvedor Web</p>
      </div>
    </section>
  )
}

export default Contato
