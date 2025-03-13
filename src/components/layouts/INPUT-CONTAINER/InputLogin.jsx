import React from "react";

function InputLogin() {
  return (
    <div className="flex justify-center items-center h-[20vh] bg-gray-100">
      <div className="flex flex-col gap-6 w-[90%] max-w-md p-6 bg-white rounded-xl shadow-lg">
        <input
          className="border border-black rounded-xl p-2 h-[6vh]"
          type="text"
          placeholder="Insira seu nome"
        />
        <input
          className="border border-black rounded-xl p-2 h-[6vh]"
          type="email"
          placeholder="Insira seu email"
        />
        <input
          className="border border-black rounded-xl p-2 h-[6vh]"
          type="password"
          placeholder="Insira sua senha"
        />
        <input
          className="border border-black rounded-xl p-2 h-[6vh]"
          type="password"
          placeholder="Confirme sua senha"
        />
      </div>
    </div>
  );
}

export default InputLogin;
