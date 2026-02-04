import React from "react";
import Card from "../reusableComponents/Card";

interface Props {}

function Dresscode(props: Props) {
  const {} = props;

  return (
    <Card>
      <h3 className="font-crimson-bold-italic text-3xl tracking-wide text-center p-1">
        Codigo de vestimenta
      </h3>
      <div>
        <img
          src="/party/dresscode.png"
          alt="Codigo de vestimenta"
          className="w-[80%] m-auto max-w-[250px]"
        />
      </div>

      <p className="font-old-bold text-xl">Formal</p>
    </Card>
  );
}

export default Dresscode;
