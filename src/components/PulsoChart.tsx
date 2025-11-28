
"use client";

import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";
Chart.register(BarElement, CategoryScale, LinearScale);

export default function PulsoChart({ historial }: { historial: number[] }) {
  const etiquetas = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  const colores = ["#F87171", "#FBBF24", "#60A5FA", "#4ADE80"];
  const datos = {
    labels: etiquetas.slice(-historial.length),
    datasets: [
      {
        label: "Estado Emocional",
        data: historial,
        backgroundColor: historial.map((v) => colores[v]),
        borderRadius: 6,
      },
    ],
  };

  const opciones = {
    scales: {
      y: {
        display: false,
        suggestedMin: 0,
        suggestedMax: 3,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <Bar data={datos} options={opciones} height={150} />
    </div>
  );
}
