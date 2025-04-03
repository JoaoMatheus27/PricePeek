import React from 'react'
import Link from 'next/link'

function ButtonLogin() {
  return (
    
        <button className=' relative bg-vermelho text-white rounded-2xl mt-5 w-[30vw] -full sm:w-[45%] md:w-[15vw] h-[6vh] font-inter lg:w-[45%] xl:w-[65%]'>
            <Link href="/"><p>Entrar</p></Link>
        </button>
    
  )
}

export default ButtonLogin;  