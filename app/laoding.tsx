
import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <Loader2 className='animate-spin h-4 w-4 text-green-500 '/>
      <h1 className='text-green-500 font-bold tracking-wide text-3xl'>Estamos carregando suas informações...</h1>
    </div>
  )
}
