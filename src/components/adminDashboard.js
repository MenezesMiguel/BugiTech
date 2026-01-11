"use client";

import React from "react";

export default function AdminDashboard() {
  return (
    <div className="bg-white w-full max-w-[1300px] h-full">
      <div className="w-full flex justify-center pt-4 text-2xl text-black font-bold">
        Painel do Administrador
      </div>
      <div className="p-4">
        <label
          htmlFor="jsonInput"
          className="block text-sm font-medium text-gray-700"
        >
          Insira o JSON:
        </label>
        <textarea
          id="jsonInput"
          className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-sm font-mono text-gray-800 focus:ring-blue-500 focus:border-blue-500"
          rows="10"
          placeholder='{"chave": "valor"}'
        ></textarea>
      </div>

      <div className="h-full flex justify-center">
        <button className="flex row w-[20%] h-[40px] bg-[#926045] mt-5 justify-center items-center rounded-full font-bold">
          Postar Promoção
        </button>
      </div>
    </div>
  );
}
