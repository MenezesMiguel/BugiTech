"use client"

import React, { useState } from "react";
import Image from "next/image";

import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleSearchEdit = (event) => {
    setSearch(event.target.value)
    console.log(search)
  }

  return (
    <header className="bg-white flex justify-center row w-full h-28 text-white text-center">
      <div className="w-full max-w-[1200px] flex row items-center justify-between px-4 py-2">
        <Image
          src="/images/logoHeader2.png"
          alt="Next.js logo"
          priority
          width={250}
          height={1}
        />
        <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm w-[28%] min-w-[230px] hidden sm:flex">
          <input
            type="text"
            placeholder="Busque sua promoção"
            className="flex-grow outline-none text-gray-600 placeholder-gray-400"
            onChange={handleSearchEdit}
          />
          <button className="cursor-pointer">
            <FaSearch className="text-gray-400 ml-2" />
          </button>
        </div>
        <button className="block sm:hidden cursor-pointer">
          <FaSearch className="text-gray-400 ml-6 text-2xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
