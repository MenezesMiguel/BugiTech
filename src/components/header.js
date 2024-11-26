"use client"

import React, { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [areSearching, setAreSearching] = useState(false);

  const handleSearchToggle = () => {
    setAreSearching((prev) => !prev);
  };

  return (
    <header className="bg-white flex justify-center items-center w-full h-28 text-white text-center">
      <div className={`w-full max-w-[1300px] flex items-center px-4 py-2 ${areSearching ? "justify-center" : "justify-between"}`}>
        {/* Renderiza a imagem apenas quando não está pesquisando */}
        {!areSearching && (
          <Image
            src="/images/logoHeader2.png"
            alt="Next.js logo"
            priority
            width={250}
            height={1}
          />
        )}

        {/* Campo de busca em telas grandes (sempre visível) */}
        <div className="hidden sm:flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm w-[28%] min-w-[230px]">
          <input
            type="text"
            placeholder="Buscar oferta"
            className="flex-grow outline-none text-gray-600 placeholder-gray-400"
          />
          <button className="cursor-pointer">
            <FaSearch className="text-gray-400 ml-2" />
          </button>
        </div>

        {/* Lupa e campo de busca em telas pequenas */}
        <div className="sm:hidden flex items-center w-full">
          {areSearching ? (
            <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm w-full justify-left">
              <input
                type="text"
                placeholder="Busque sua promoção"
                className="flex-grow outline-none text-gray-600 placeholder-gray-400"
              />
              <button className="cursor-pointer" onClick={handleSearchToggle}>
                <FaSearch className="text-gray-400 ml-2" />
              </button>
            </div>
          ) : (
            <button
              className="cursor-pointer flex w-[100%] justify-end"
              onClick={handleSearchToggle}
            >
              <FaSearch className="text-gray-400 ml-6 text-2xl" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

