import React from "react";

function Gifts() {
  return (
    <section className="section-gifts">
      <div className="gifts-top">
        <h3 className="gifts-title font-old-bold text-2xl">
          Sugerencia de regalos
        </h3>

        <p className="gifts-text font-crimson-italic text-lg">
          “Tu presencia es el mayor regalo que me puedes dar, pero si deseas
          darme un regalo te lo agradezco de todo corazón.”
        </p>

        <div className="gifts-icon">
          <img src="/gifts/mail.png" alt="" className="w-[70%]" />
        </div>

        <h4 className="gifts-highlight text-3xl">¡Lluvia de sobres!</h4>
      </div>

      <div className="gift-image-wrapper">
        <div
          className="gift-image"
          style={{ backgroundImage: "url('/gifts/img1.jpg')" }}
        />
      </div>
    </section>
  );
}

export default Gifts;
