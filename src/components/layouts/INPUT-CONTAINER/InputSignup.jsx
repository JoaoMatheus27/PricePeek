import ButtonSignup from "@/components/BUTTONAPP/ButtonSignup";
import Link from 'next/link'
import React from 'react'

function InputSignup() {
  return (
    <>
      <div className='flex flex-col gap-5 items-center justify-center bg-white rounded-[2rem] py-24 px-18 shadow-lg  xl:py-30 xl:px-24 xl:gap-4'>
        <h1 className=' text-lg font-julius font-bold mb-6 xl:text-2xl'>Cadastre-se</h1>
          <input 
          className='w-[100%] border-input pl-3 h-12 '  
          type='text' 
          placeholder='Insira seu nome de usuário' 
          required
          />
          <input 
          className='w-[100%] border-input pl-3 h-12'  
          type="email" 
          placeholder='Insira seu email' 
          required
          />
          <input 
          className='w-[100%] border-input pl-3 h-12'  
          type="password" 
          placeholder='Insira sua senha' 
          required
          />
          <input 
          className='w-[100%] border-input pl-3 h-12'  
          type="password" 
          placeholder='Confirme sua senha' 
          required
          />
        <Link 
        href="./login" 
        className="ml-10 underline">
          Ja tem uma conta?
        </Link>
        <ButtonSignup />  
      </div>
      </>
  )
}

export default InputSignup;