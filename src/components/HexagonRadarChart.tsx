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
  labels: string[];
};

export default function HexagonRadarChart({ data, labels }: Props) {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Indicadores de riesgo",
        data,
        backgroundColor: "rgba(228, 138, 110, 0.4)",
        borderColor: "#E48A6E",
        pointBackgroundColor: "#E48A6E",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          display: false,
        },
        grid: {
          circular: true,
        },
        pointLabels: {
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return <Radar data={chartData} options={chartOptions} />;
}
