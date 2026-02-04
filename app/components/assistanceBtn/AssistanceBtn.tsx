import React from "react";

interface Props {}

function AssistanceBtn(props: Props) {
  const {} = props;

  return (
    <section className="invite-section">
      <h2 className="invite-title font-old-bold tracking-widest">SUSANA</h2>

      <p className="invite-text text-white font-old tracking-wide text-lg">
        Quiero compartir el inicio de mis sueños contigo. Prepárate para una
        noche de baile y alegría inolvidable.
      </p>

      <a
        href="https://wa.me/573233363409?text=Hola%20Susana%2C%20para%20confirmar%20mi%20asistencia%20mi%20nombre%20es%3A%20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="invite-button">Confirmar asistencia</button>
      </a>
      <p className="invite-footer text-white text-5xl mt-10">¡Te espero!</p>
    </section>
  );
}

export default AssistanceBtn;
