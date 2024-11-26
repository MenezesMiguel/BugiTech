"use client";

import React, { useState } from "react";
import PromoCard from "./promoCard";

export default function PromoWall() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-[1300px] md:max-w-[633px] lg:max-w-[966px] xl:max-w-[1300px] h-full pt-6 pb-6 grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
      </div>
    </div>
  );
}
