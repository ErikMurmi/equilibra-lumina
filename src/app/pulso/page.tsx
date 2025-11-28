"use client";

import { useState } from "react";
import PulsoRadarChart from "@/components/PulsoRadarChart";
import IndicadorCard from "@/components/IndicadorCard";

const dataPorPeriodo = {
  "7": {
    datos: [35, 25, 50, 45, 70, 80],
    anteriores: [40, 30, 45, 50, 65, 75],
  },
  "30": {
    datos: [55, 40, 60, 48, 72, 78],
    anteriores: [60, 35, 58, 45, 70, 76],
  },
};

const nombres = [
  "Carga Laboral",
  "Reconocimiento",
  "Autonomía",
  "Claridad de Objetivos",
  "Seguridad Psicológica",
  "Propósito",
];

export default function PulsoPage() {
  const [periodo, setPeriodo] = useState<"7" | "30">("7");

  const { datos, anteriores } = dataPorPeriodo[periodo];

  return (
    <main className="min-h-screen bg-brand-light px-6 py-12">
      <div className="flex items-center justify-between max-w-4xl mx-auto mb-6">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">
            Pulso Organizacional
          </h1>
          <p className="text-sm text-brand-dark max-w-md">
            Análisis del estado emocional laboral colectivo, basado en
            respuestas anónimas.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setPeriodo("7")}
            className={`px-4 py-2 rounded text-sm ${
              periodo === "7"
                ? "bg-brand-dark text-white"
                : "bg-white text-brand-dark border"
            }`}
          >
            Últimos 7 días
          </button>
          <button
            onClick={() => setPeriodo("30")}
            className={`px-4 py-2 rounded text-sm ${
              periodo === "30"
                ? "bg-brand-dark text-white"
                : "bg-white text-brand-dark border"
            }`}
          >
            Últimos 30 días
          </button>
        </div>
      </div>

      <PulsoRadarChart data={datos} />

      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nombres.map((nombre, index) => {
          const actual = datos[index];
          const previo = anteriores[index];
          const diferencia = actual - previo;
          let tendencia = "→ sin cambios";

          if (diferencia > 2) tendencia = `🔼 +${diferencia}%`;
          else if (diferencia < -2) tendencia = `🔽 ${diferencia}%`;

          return (
            <IndicadorCard
              key={nombre}
              title={nombre}
              nivel={`${actual}%`}
              tendencia={tendencia}
              descripcion={`Variación respecto al período anterior.`}
            />
          );
        })}
      </section>

      <section className="mt-12 bg-white shadow-md p-6 rounded-xl max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-brand-dark mb-2">
          Análisis IA
        </h3>
        <p className="text-sm text-brand-dark leading-relaxed">
          En este período se observa un aumento progresivo en la percepción de
          carga laboral y una caída en el reconocimiento interno. Esto puede
          afectar la motivación general del equipo si no se implementan acciones
          correctivas.
        </p>
      </section>
    </main>
  );
}
