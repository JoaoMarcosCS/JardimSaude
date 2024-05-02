import Link from 'next/link'
import Image from "next/image"

export default function NotFound() {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <Image alt='Not-Found' src="/not-found.svg" width={150} height={150}/>
      <h1>Página não encontrada! <Link href="/" className='text-emerald-700'>Voltar para Home</Link></h1>
    </div>
  )
}
