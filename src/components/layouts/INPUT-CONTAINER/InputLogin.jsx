import ButtonSignup from '@/components/BUTTONAPP/ButtonSignup'
import React from 'react'

function InputSignup() {
  return (
    <div>
      <div className='flex flex-col gap-5 items-center justify-center bg-[white] py-24 px-16 shadow-lg rounded-[2rem]'>
        <h1 className='fixed top-52 text-lg font-julius font-bold mt-0'>Cadastre-se</h1>
        <input 
        className='w-[100%] border-input pl-3'  
        type='text' 
        placeholder='Insira seu nome de usuário' 
        required
        />
        <input 
        className='w-[100%] border-input pl-3'  
        type="email" 
        placeholder='Insira seu email' 
        required
        />
        <input 
        className='w-[100%] border-input pl-3'  
        type="password" 
        placeholder='Insira sua senha' 
        required
        />
        <input 
        className='w-[100%] border-input pl-3'  
        type="password" 
        placeholder='Confirme sua senha' 
        required
        />
      </div>
      <ButtonSignup />  
    </div>
  )
}

export default InputSignup
