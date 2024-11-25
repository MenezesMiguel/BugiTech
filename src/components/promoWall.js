"use client" 

import React, { useState } from "react";
import PromoCard from "./promoCard"

export default function PromoWall() {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[1200px] h-full pt-3 pb-3">
        <PromoCard />
        </div>
      </div>
    );
  }