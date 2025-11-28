"use client";

import clsx from "clsx";

type Props = {
  area: string;
  nivel: "Alto" | "Medio" | "Bajo";
  motivo: string;
};

export default function BurnoutCard({ area, nivel, motivo }: Props) {
  const colorMap = {
    Alto: "bg-brand-coral",
    Medio: "bg-brand-beige",
    Bajo: "bg-brand-green",
  };

  return (
    <div
      className={clsx(
        "p-6 rounded-lg text-white shadow-md",
        colorMap[nivel as keyof typeof colorMap]
      )}
    >
      <h3 className="text-xl font-bold mb-2">{area}</h3>
      <p className="text-sm uppercase font-semibold tracking-wide">
        Riesgo: {nivel}
      </p>
      <p className="text-sm mt-2 italic">{motivo}</p>
    </div>
  );
}
