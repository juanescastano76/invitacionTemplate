import React from "react";

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <footer className="footer-zone pb-6 flex flex-col items-center gap-2 text-center">
      <p className="text-xs text-gray-500 italic">
        Hecho con 💜 por Juan Esteban Castaño
      </p>

      <a
        href="https://wa.me/573002877917"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full
               bg-[#6a1b78] text-white text-sm
               shadow-md hover:bg-[#7b2a89] transition"
      >
        <span>WhatsApp</span>
        <span className="font-semibold">+57 300 287 7917</span>
      </a>
    </footer>
  );
}

export default Footer;
