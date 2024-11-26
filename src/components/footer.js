"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t h-auto">
      <div className="w-full max-w-[1300px] flex flex-col xs:flex-row justify-between items-start px-4 py-2 mx-auto">
        {/* Coluna 1: Logo e Descrição */}
        <div className="flex-1 w-full xs:max-w-[60%] text-gray-400 text-justify text-[14px]">
          <Image
            src="/images/logoHeader2.png"
            alt="Next.js logo"
            priority
            width={200}
            height={1}
          />
          <p>
            {" "}
            Desde 2021 trazendo os melhores reviews e as melhores promoções, aqui você paga barato, sem "PROMOFAKE".
            
            Não deixe de conhecer nosso trabalho também no YouTube
          </p>
        </div>

        {/* Coluna 2: Suporte */}
        {/* <div className="flex-1">
          <h3 className="text-lg font-bold mb-4">Suporte</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 transition"
              >
                Fale conosco
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 transition"
              >
                Termos de uso
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 transition"
              >
                Política de privacidade
              </a>
            </li>
          </ul>
        </div> */}

        {/* Coluna 3: Redes Sociais */}
        <div className="flex flex-col w-full xs:w-auto items-center px-[8px] py-[16px] justify-center xs:justify-end text-gray-600">
          <h3 className="text-lg font-bold mb-4">Nossas redes sociais</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.youtube.com/c/BugiTech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoYoutube
                size={30}
                className="text-red-500 hover:text-red-600 transition"
              />
            </a>
            <a
              href="https://bit.ly/3AvOcAM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp
                size={30}
                className="text-green-500 hover:text-green-600 transition"
              />
            </a>
            <a
              href="https://www.instagram.com/bugi.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram
                size={30}
                className="text-pink-500 hover:text-pink-600 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
