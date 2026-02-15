"use client";

import { useRef, useState } from "react";

export default function Opener() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = async () => {
    setOpen(true);

    try {
      await audioRef.current?.play();
    } catch (error) {
      console.log("El navegador bloqueó el audio");
    }
  };

  return (
    <>
      {/* Overlay */}
      {!open && (
        <div className="fixed inset-0 bg-gradient-to-br from-black via-[#3b163f] to-black flex items-center justify-center z-50">
          <div className="text-center space-y-8 px-6">
            <h2 className="font-old text-white tracking-widest text-lg">
              MIS XV AÑOS
            </h2>

            <h1 className="font-invitacion text-6xl text-pink-300 drop-shadow-lg">
              Susana
            </h1>

            <button
              onClick={handleOpen}
              className="btn-invitacion text-lg px-8 py-3"
            >
              ✨ Abrir invitación ✨
            </button>
          </div>
        </div>
      )}

      {/* Audio siempre montado */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/perfect.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}
