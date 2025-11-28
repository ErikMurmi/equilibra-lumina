"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const data = {
  labels: ["Ventas", "Ingeniería", "RRHH", "Operaciones", "Marketing"],
  datasets: [
    {
      label: "Ahorro Estimado ($)",
      data: [18000, 24000, 12000, 15000, 8000],
      backgroundColor: ["#10B981", "#F59E0B", "#EF4444", "#3B82F6", "#8B5CF6"],
      borderRadius: 6,
      barThickness: 32,
    },
  ],
};

const options = {
  indexAxis: "y" as const,
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: any) => `$${ctx.raw.toLocaleString()}`,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        callback: (value: any) => `$${value}`,
      },
    },
  },
};

export default function ImpactoFinancieroChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-brand-dark mb-4">
        Impacto Financiero Estimado por Área
      </h3>
      <Bar data={data} options={options} />
    </div>
  );
}
