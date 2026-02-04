import React from "react";
import Slider from "./Slider";
interface Props {}

function Location(props: Props) {
  const {} = props;

  return (
    <div className="section-location">
      <section className="w-full flex flex-col items-center text-center py-6 gap-4">
        <h3 className="text-4xl font-old-italic tracking-wider">Locación</h3>

        <h4 className="font-crimson-italic text-2xl tracking-wide">
          Finca Los Pinos
        </h4>

        <div className="w-full max-w-md">
          <Slider />
        </div>

        {/* BOTÓN */}
        <a
          href="https://maps.app.goo.gl/QiL8Q3eNCE4zAhTVA"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-llegar mt-4"
        >
          ¿CÓMO LLEGAR?
        </a>
      </section>
    </div>
  );
}

export default Location;
