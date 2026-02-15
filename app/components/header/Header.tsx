"use client";

import React, { useRef } from "react";

function Header() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    audioRef.current?.play();
  };

  return (
    <header
      className="relative bg-cover bg-center h-[98dvh] w-dvw max-w-[700px]"
      style={{ backgroundImage: "url('/header/imgfinal.jpg')" }}
    >
      <div className="h-full flex items-center justify-center m-auto flex-col gap-8 pb-16">
        <h2 className="font-old text-xl tracking-wide">MIS XV AÑOS</h2>
        <h1 className="font-invitacion text-8xl tracking-wide">Susana</h1>
      </div>

      {/* Botón música */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handlePlay}
          className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg"
        >
          🎵 Reproducir música
        </button>

        <audio ref={audioRef} loop>
          <source src="/music/cancion.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </header>
  );
}

export default Header;
