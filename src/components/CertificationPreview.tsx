"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { useEffect } from "react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function CertificationPreview() {
  const chartData = {
    labels: [
      "Equidad Salarial",
      "Promoción Justa",
      "Estabilidad",
      "Prevención",
    ],
    datasets: [
      {
        label: "Nivel de Cumplimiento",
        data: [92, 88, 84, 90],
        backgroundColor: ["#8BB8A8", "#8BB8A8", "#8BB8A8", "#8BB8A8"],
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const generatePDF = async () => {
    const html2pdf = (await import("html2pdf.js")).default;

    const element = document.getElementById("certification-pdf");

    if (element) {
      html2pdf()
        .from(element)
        .set({
          margin: 0.5,
          filename: "equilibra-certificacion.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        })
        .save();
    }
  };

  return (
    <div>
      <div id="certification-pdf">
        <section className="bg-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto border border-brand-beige">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">
            Certificación Oficial – EQUI-Score
          </h2>

          <div className="bg-brand-light border border-brand-beige p-6 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div>
                <p className="text-lg font-semibold text-brand-dark mb-1">
                  Empresa:
                </p>
                <p className="text-xl text-brand-dark">TechCorp S.A.</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-brand-dark mb-1">
                  Fecha de Emisión:
                </p>
                <p className="text-xl text-brand-dark">
                  28 de Noviembre de 2025
                </p>
              </div>
              <div className="text-center mt-6 md:mt-0">
                <p className="text-lg font-semibold text-brand-dark mb-1">
                  EQUI-Score:
                </p>
                <p className="text-4xl font-bold text-brand-green">84 / 100</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-24 h-24 bg-brand-coral text-white font-bold flex items-center justify-center rounded-full text-center text-xs shadow-md">
                Sello
                <br />
                Oficial
              </div>
            </div>
          </div>
          {/* Gráfico de cumplimiento */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-brand-dark mb-4">
              Áreas Evaluadas
            </h3>
            <Bar data={chartData} options={chartOptions} />
          </div>

          {/* Matriz de impacto */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-brand-dark mb-4">
              Impacto Financiero Estimado
            </h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-sm text-brand-dark border-b border-brand-beige">
                  <th className="py-2">Área</th>
                  <th className="py-2">Costo de Rotación</th>
                  <th className="py-2">Ahorro Estimado</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-brand-beige">
                  <td className="py-2">Ingeniería</td>
                  <td className="py-2">$18,000</td>
                  <td className="py-2 text-brand-green font-semibold">
                    $6,200
                  </td>
                </tr>
                <tr className="border-b border-brand-beige">
                  <td className="py-2">Ventas</td>
                  <td className="py-2">$12,500</td>
                  <td className="py-2 text-brand-green font-semibold">
                    $4,000
                  </td>
                </tr>
                <tr>
                  <td className="py-2">Administración</td>
                  <td className="py-2">$8,400</td>
                  <td className="py-2 text-brand-green font-semibold">
                    $2,800
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <br />
      </div>
      <div className="text-center">
        <button
          onClick={generatePDF}
          className="bg-brand-dark text-white px-8 py-3 rounded-lg shadow hover:bg-brand-green transition"
        >
          Descargar Informe PDF
        </button>
      </div>
    </div>
  );
}
