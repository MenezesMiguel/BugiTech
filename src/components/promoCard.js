"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoTimeOutline, IoOpenOutline, IoOpen } from "react-icons/io5";
import { IoMdOpen } from "react-icons/io";

export default function PromoCard() {
  return (
    <div className="bg-white w-[300px] h-[500px] rounded-xl p-5">
      <div className="bg-blue-200 w-auto h-[25px] flex row">
        <div className="w-[60%] h-[100%] flex row items-center">
          <Image
            className="mr-1 "
            src="/images/logoHeader2.png"
            alt="Next.js logo"
            priority
            width={25}
            height={25}
          />
          <p className="text-xs text-gray-500">Mercado Livre</p>
        </div>
        <div className="w-[40%] h-[100%] flex row items-center">
          <p className="text-xs mr-2 text-gray-500"> Postado há 2h</p>
          <IoTimeOutline className="text-gray-500" />
        </div>
      </div>
      <div className="w-auto h-[35%] flex items-center justify-center">
        <Image
          //className="mr-1 w-full h-auto"
          src="/images/logoHeader2.png"
          alt="Next.js logo"
          priority
          width={160}
          height={1}
        />
      </div>
      <p className="text-gray-900 text-center leading-tight font-bold mb-3">
        {" "}
        Bugitech, ipsum loren ipsum loren ipsun
      </p>
      <p className="text-gray-400 font-bold text-xs"> De R$ 699,90</p>
      <p className="text-gray-600 font-bold"> Por </p>
      <div className="flex items-center justify-center w-full text-4xl">
        <p className="justify-center font-bold text-[#926045]"> R$ 129,90</p>
      </div>
      <p className="text-gray-400 font-bold text-xs flex justify-center">
        {" "}
        à vista
      </p>
      <button className="flex row w-[100%] h-[40px] bg-[#926045] mt-5 justify-center items-center rounded-full font-bold">
        Abrir Promo
        <IoMdOpen  className="m-[10px]" />
      </button>
    </div>
  );
}
