"use client";

import React, { useEffect, useState } from "react";

function Countdown() {
  const targetDate = new Date("2026-04-18T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ⛔ Evita renderizar en SSR
  if (!mounted) return null;

  return (
    <div className="invitacion-borde">
      <section className="h-[25dvh] flex items-center justify-center flex-col gap-5">
        <h2 className="font-invitacion text-5xl tracking-wider">Faltan</h2>

        <div className="flex flex-row gap-6 text-center items-center">
          <div>
            <h3 className="text-2xl font-old">{timeLeft.days}</h3>
            <h4 className="font-old-italic text-sm">DÍAS</h4>
          </div>

          <div>
            <h3 className="text-2xl font-old">{timeLeft.hours}</h3>
            <h4 className="font-old-italic text-sm">HRS</h4>
          </div>

          <div>
            <h3 className="text-2xl font-old">{timeLeft.minutes}</h3>
            <h4 className="font-old-italic text-sm">MIN</h4>
          </div>

          <div>
            <h3 className="text-2xl font-old tabular-nums">
              {timeLeft.seconds}
            </h3>
            <h4 className="font-old-italic text-sm">SEG</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Countdown;
