import React from "react";
import Dresscode from "./Dresscode";
import Tips from "./Tips";
import Music from "./Music";
import QR from "./QR";

interface Props {}

function Party(props: Props) {
  const {} = props;

  return (
    <section
      className=" w-dvw bg-repeat bg-top min-h-screen max-w-[700px]"
      style={{
        backgroundImage: "url('/party/partybg2.png')",
        backgroundRepeat: "repeat",
        backgroundPosition: "top center",
      }}
    >
      <h2 className="text-center text-4xl font-old-italic tracking-wider pt-5">
        Fiesta
      </h2>

      <div className="flex gap-10 flex-col mt-5 pb-10">
        <Dresscode />
        <Tips />
        <QR />
        {/* <Music /> */}
      </div>
    </section>
  );
}

export default Party;
