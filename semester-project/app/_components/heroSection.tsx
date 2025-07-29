"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full">
      <img src="/hero.jpg" alt="hero image"/>

      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 tracking-wide text-white">
          HELENA'S PHOTOART
        </h1>
        <div className="px-6 py-4">
            <p className="text-lg md:text-2xl font-bold text-beige-800">
                zabilježimo najljepše trenutke Vašega života
            </p>
        </div>

        <a href="/portfolio">
            <button className="mt-6 bg-beige-50 text-beige-800 px-6 py-4 rounded-4xl font-medium hover:bg-beige-200 transition">
                pogledajte galeriju slika
            </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
