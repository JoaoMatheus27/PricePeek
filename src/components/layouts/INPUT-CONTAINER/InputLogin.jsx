import ButtonLogin from "@/components/BUTTONAPP/ButtonLogin";
import React from 'react';
import Link from 'next/link'; // Corrigido para 'next/link' com L maiúsculo

function InputLogin() {
  return (
    <div className='flex flex-col gap-5 items-center justify-center bg-white rounded-[2rem] py-24 px-18 shadow-lg xl:py-30 xl:px-24 xl:gap-4'>
      <h1 className=' text-lg font-julius font-bold mb-6 xl:text-2xl'>Entre já</h1>
      <input 
        className='w-[100%] border-input pl-3 h-12'  
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
      {/* Remover o <a> aqui */}
      <Link href="/sign-up" className="ml-10 underline">
        Não tem uma conta?
      </Link>
      <ButtonLogin />  
    </div>
  )
}

export default InputLogin;
