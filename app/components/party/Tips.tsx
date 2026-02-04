import React from "react";
import Card from "../reusableComponents/Card";

interface Props {}

function Tips(props: Props) {
  const {} = props;

  return (
    <Card>
      <h3 className="font-crimson-bold-italic text-3xl tracking-wide text-center p-1">
        Tips
      </h3>
      <div>
        <img
          src="/party/clipboard.png"
          alt="Codigo de vestimenta"
          className="w-[100%] m-auto"
        />
      </div>

      <ul className="font-old-bold flex flex-col gap-2 pl-5 pr-5 mt-5 list-disc  leading-normal ">
        <li>
          {" "}
          La celebración comenzará puntualmentea las 7:00 P.M. Les pedimos que
          lleguen al menos 15 minutos antes para evitar interrupciones.
        </li>
        <li>
          Les invitamos a compartir sus propias fotos en nuestro albúm
          compartido.
        </li>
      </ul>
    </Card>
  );
}

export default Tips;
