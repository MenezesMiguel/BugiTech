"use client";
import React, { useState } from "react";
import { CiPause1 } from "react-icons/ci";

export default function SignInWall({ setIsSignIn }) {
  const toggleSignIn = () => setIsSignIn(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleChangeUser = (event) => {
    setUser(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div className="flex flex-col w-[25%] min-w-[300px] h-auto bg-white rounded-xl p-4">
        {/* Campo de usuário */}
        <div className="flex mb-4 items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm w-full">
          <input
            type="text"
            placeholder="Usuário"
            className="flex-1 outline-none text-gray-600 placeholder-gray-400"
            value={user}
            onChange={handleChangeUser}
          />
        </div>

        {/* Campo de email */}
        <div className="flex mb-4 items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm w-full">
          <input
            type="email"
            placeholder="email@email.com"
            className="flex-1 outline-none text-gray-600 placeholder-gray-400"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        {/* Campo de senha */}
        <div className="flex mb-4 items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm w-full">
          <input
            type="password"
            placeholder="Senha"
            className="flex-1 outline-none text-gray-600 placeholder-gray-400"
            value={password}
            onChange={handleChangePassword}
          />
        </div>

        {/* Botão de login */}
        <button
          className="w-full h-[40px] bg-[#926045] mt-5 flex justify-center items-center rounded-full font-bold text-white"
          onClick={toggleSignIn}
        >
          Fazer Login
        </button>
        {/* Botão de login */}
        <button className="w-full h-[40px] bg-[#926045] mt-5 flex justify-center items-center rounded-full font-bold text-white">
          Cadastrar
        </button>
      </div>
    </div>
  );
}
