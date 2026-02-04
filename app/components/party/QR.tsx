import React from "react";
import Card from "../reusableComponents/Card";

interface Props {}

function QR(props: Props) {
  const {} = props;

  return (
    <Card>
      <h3 className="font-crimson-bold-italic text-3xl tracking-wide text-center p-1">
        Escanea este Codigo
      </h3>
      <div>
        <img
          src="/party/qrCode.png"
          alt="Codigo de vestimenta"
          className="w-[100%] m-auto"
        />
      </div>

      <div className="font-old-bold flex flex-col gap-2 pl-5 pr-5 mt-5 list-disc  leading-normal ">
        <p>Escanea el código QR y comparte tus mejores fotos</p>
        <button className="btn-invitacion">
          <a href="https://chat.whatsapp.com/D54SOyWwk8EIR26b4Xv2YJ">
            Unete al album compartido
          </a>
        </button>
      </div>
    </Card>
  );
}

export default QR;
