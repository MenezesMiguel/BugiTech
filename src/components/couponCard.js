"use client";

import React from "react";
import { IoCopyOutline } from "react-icons/io5";

export default function CouponCard() {
  const coupom = "GANHEI10";

  const copy = (coupom) => {
    navigator.clipboard
      .writeText(coupom.toString())
  };

  return (
    <div className="border-dashed border-2 border-[#545454] rounded-md p-2 flex items-center justify-between w-full bg-white mt-3">
      <div className="flex items-center">
        <p className="font-bold text-xs text-black mr-1">{coupom}</p>
      </div>
      <div className="flex items-center cursor-pointer">
        <IoCopyOutline className="text-black text-lg mr-1" onClick={copy} />
      </div>
    </div>
  );
}
