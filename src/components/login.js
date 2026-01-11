"use client";
import React from "react";

export default function Login({ setIsSignIn }) {

  const toggleSignIn = () => setIsSignIn(true);

  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div className="flex flex-col w-[25%] min-w-[300px] h-auto bg-white rounded-xl p-4">
        {/* Campo de usuário */}
        <div className="flex mb-4 items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm w-full">
          <input
            type="text"
            placeholder="Usuário"
            className="flex-1 outline-none text-gray-600 placeholder-gray-400"
          />
        </div>

        {/* Campo de senha */}
        <div className="flex mb-4 items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm w-full">
          <input
            type="password"
            placeholder="Senha"
            className="flex-1 outline-none text-gray-600 placeholder-gray-400"
          />
        </div>
        {/* Botão de login */}
        <button className="w-full h-[40px] bg-[#926045] mt-5 flex justify-center items-center rounded-full font-bold text-white">
          Login
        </button>
      </div>
    </div>
  );
}
