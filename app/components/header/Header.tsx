import React from "react";

function Header() {
  return (
    <header
      className="header-img bg-cover bg-center h-[98dvh] w-dvw max-w-[700px] "
      style={{ backgroundImage: "url('/header/headerimg.jpg')" }}
    >
      <div className="h-full flex items-center justify-center m-auto flex-col gap-8">
        <h2 className="font-old text-xl tracking-wide">MIS XV AÑOS</h2>
        <h1 className="font-invitacion text-7xl tracking-wide">Susana</h1>
        <h2 className="font-old text-xl tracking-wide">18 . 04 . 2026</h2>
      </div>
    </header>
  );
}

export default Header;
