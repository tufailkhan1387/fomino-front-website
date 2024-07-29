import React from "react";
import { FaPlay } from "react-icons/fa";


export default function WhatIsFomino() {

  return (
    <section className="py-10 lg:py-20">





      <div className="w-[90%] md:w-[85%] lg:w-[70%] 2xl:w-[65%] m-auto lg:grid grid-cols-2 shadow-large">
        <div className="space-y-7 lg:space-y-10 py-10 px-14 lg:px-28 flex flex-col justify-center">
          <h4 className="text-black font-switzer font-normal">
            What is Fomino?
          </h4>
          <h2 className="text-2xl lg:text-4xl text-black font-switzer font-extrabold">
            Delivered.
          </h2>
          <p className="text-paraColor font-switzer font-normal max-w-xs">
            Fomino makes it incredibly easy for you to discover and get what you
            want. Delivered to you – quickly, reliably and affordably.
          </p>

          <div>
            <button className="bg-heroSectionBg w-10 h-10 rounded-full">
              <FaPlay className="text-white ml-[13px]" />
            </button>
            <span className="ml-5 text-black font-switzer font-normal">
              Watch video
            </span>
          </div>
        </div>
        <div>
          <img src="/images/whatisfomino-img.webp" alt="fomino" />
        </div>
      </div>
    </section>
  );
}
