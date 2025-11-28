"use client";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type Props = {
  data: number[];
};

export default function PulsoRadarChart({ data }: Props) {
  const labels = [
    "Carga Laboral",
    "Reconocimiento",
    "Autonomía",
    "Claridad de Objetivos",
    "Seguridad Psicológica",
    "Propósito",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Nivel percibido",
        data,
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        borderColor: "#22c55e",
        pointBackgroundColor: "#22c55e",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          display: false,
        },
        pointLabels: {
          font: {
            size: 12,
          },
        },
        grid: {
          circular: true,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow w-full max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold text-brand-dark mb-2">
        Indicadores de Bienestar
      </h2>
      <Radar data={chartData} options={options} />
    </div>
  );
}
