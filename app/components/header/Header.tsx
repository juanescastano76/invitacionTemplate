"use client";

import React from "react";

function Header() {
  return (
    <header
      className="relative bg-cover bg-center h-[98dvh] w-dvw max-w-[700px]"
      style={{ backgroundImage: "url('/header/imgfinal.jpg')" }}
    >
      <div className="h-full flex items-center justify-center m-auto flex-col gap-8 pb-16">
        <h2 className="font-old text-xl tracking-wide">MIS XV AÑOS</h2>
        <h1 className="font-invitacion text-8xl tracking-wide">Susana</h1>
      </div>
    </header>
  );
}

export default Header;
