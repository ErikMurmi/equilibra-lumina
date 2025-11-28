"use client";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
  Legend
);

export default function PulseChart() {
  const data: ChartData<"line"> = {
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    datasets: [
      {
        label: "Positivo",
        data: [60, 65, 70, 66, 72],
        fill: true,
        backgroundColor: "rgba(139, 184, 168, 0.2)", // Verde suave
        borderColor: "#8BB8A8",
        tension: 0.4,
      },
      {
        label: "Neutro",
        data: [25, 20, 15, 20, 18],
        fill: true,
        backgroundColor: "rgba(233, 221, 198, 0.2)", // Beige
        borderColor: "#E9DDC6",
        tension: 0.4,
      },
      {
        label: "Negativo",
        data: [15, 15, 15, 14, 10],
        fill: true,
        backgroundColor: "rgba(228, 138, 110, 0.2)", // Coral
        borderColor: "#E48A6E",
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (val: number | string) => `${val}%`,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4 text-brand-dark">
        Pulso Diario – Semana Actual
      </h2>
      <Line data={data} options={options} />
    </div>
  );
}
