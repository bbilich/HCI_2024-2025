"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full">
      <img src="/hero.jpg" alt="hero image" />

      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 gap-5 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold md:-mt-15 tracking-wide text-beige-900">
          HELENA'S PHOTOART
        </h1>
        <div className="md:mt-10 backdrop-blur-2xl rounded-4xl">
            <p className="text-md sm:text-2xl font-bold text-white mx-6 pb-1 md:mt-1.5">
                zabilježimo najljepše trenutke Vašega života
            </p>
        </div>

        <a href="/portfolio">
            <button className="mt-6 sm:mt-10 bg-beige-50 text-beige-800 px-6 py-1 sm:py-3 rounded-3xl font-medium hover:bg-beige-200 transition">
                pogledajte galeriju slika
            </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
