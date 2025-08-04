"use client";

import { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="Hero"
      className="relative h-[100vh] bg-cover bg-center bg-no-repeat text-white flex items-center"
      style={{
        backgroundImage: "url(/backgrounds/hero.webp)",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-8xl px-6 text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Надёжная юридическая поддержка
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Решим вашу задачу грамотно и точно в срок. Частные и корпоративные
          клиенты.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 w-fit cursor-pointer border-2 border-white bg-blue_dark/40 px-4 py-3 text-lg transition-all duration-300 hover:border-blue_light"
        >
          Получить консультацию
        </button>
      </div>
    </section>
  );
};

export default Hero;
