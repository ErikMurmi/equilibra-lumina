"use client";

import { useState } from "react";
import {
  CreditCardIcon,
  BanknotesIcon,
  DocumentTextIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function FinanzasPage() {
  const [empleados, setEmpleados] = useState(120);
  const [score, setScore] = useState(78);

  // Cálculo simulado del costo del sello
  const tarifa = Math.round(200 + empleados * 0.9 + (100 - score) * 1.2);

  return (
    <main className="min-h-screen bg-brand-light p-10">
      <h1 className="text-3xl font-semibold text-brand-dark mb-8">
        Finanzas & Suscripción
      </h1>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* PANEL DE SUSCRIPCIÓN */}
        <section className="bg-white shadow p-6 rounded-xl border border-brand-beige">
          <h2 className="text-xl font-semibold text-brand-dark mb-4 flex items-center gap-2">
            <CreditCardIcon className="w-6 h-6 text-brand-dark" />
            Suscripción Mensual
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-brand-light rounded-lg border border-brand-beige">
              <p className="text-brand-dark font-medium">Plan Actual:</p>
              <p className="text-brand-dark text-lg font-semibold">
                Plan Empresa Pro
              </p>
              <p className="text-sm text-brand-dark/70 mt-1">
                Hasta 250 empleados — Acceso total a IA Predictiva y Pulso
                Diario.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-lg border border-brand-beige">
              <p className="text-brand-dark font-medium">
                Próxima Facturación:
              </p>
              <p className="text-green-700 font-semibold">15 de Marzo 2025</p>
              <p className="text-sm text-brand-dark/70 mt-1">
                Monto mensual: <strong>$89 USD</strong>
              </p>
            </div>

            {/* HISTORIAL DE PAGOS */}
            <div>
              <h3 className="text-brand-dark font-semibold mb-2">
                Historial de Pagos
              </h3>

              <div className="space-y-2">
                {[
                  { fecha: "15 Ene 2025", estado: "Pagado" },
                  { fecha: "15 Dic 2024", estado: "Pagado" },
                  { fecha: "15 Nov 2024", estado: "Pagado" },
                ].map((pago, i) => (
                  <div
                    key={i}
                    className="flex justify-between bg-brand-light rounded p-3 border border-brand-beige"
                  >
                    <span className="text-brand-dark">{pago.fecha}</span>
                    <span className="text-green-600 font-medium">
                      {pago.estado}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTÓN */}
            <button className="w-full bg-brand-dark text-white py-2 rounded-lg hover:bg-brand-dark/80">
              Actualizar Plan
            </button>
          </div>
        </section>

        {/* PANEL DE TARIFA DE CERTIFICACIÓN */}
        <section className="bg-white shadow p-6 rounded-xl border border-brand-beige">
          <h2 className="text-xl font-semibold text-brand-dark mb-4 flex items-center gap-2">
            <SparklesIcon className="w-6 h-6 text-brand-dark" />
            Tarifas de Certificación EQUI-Score
          </h2>

          <div className="space-y-4">
            {/* INPUT EMPLEADOS */}
            <div>
              <label className="text-brand-dark font-medium">
                Número de empleados
              </label>
              <input
                type="range"
                min={20}
                max={500}
                value={empleados}
                onChange={(e) => setEmpleados(Number(e.target.value))}
                className="w-full mt-2"
              />
              <p className="text-brand-dark font-semibold">
                {empleados} empleados
              </p>
            </div>

            {/* INPUT SCORE */}
            <div>
              <label className="text-brand-dark font-medium">
                EQUI-Score Actual
              </label>
              <input
                type="range"
                min={40}
                max={100}
                value={score}
                onChange={(e) => setScore(Number(e.target.value))}
                className="w-full mt-2"
              />
              <p className="text-brand-dark font-semibold">{score} puntos</p>
            </div>

            {/* RESULTADO */}
            <div className="p-5 bg-brand-light rounded-lg border border-brand-beige">
              <p className="text-brand-dark text-lg font-semibold">
                Costo estimado del sello:
              </p>
              <p className="text-3xl font-bold text-brand-dark">
                ${tarifa} USD
              </p>
              <p className="text-xs text-brand-dark/70 mt-1">
                *Simulación visual basada en tamaño de empresa y salud
                organizacional.
              </p>
            </div>

            <button className="w-full bg-brand-green text-white py-2 rounded-lg hover:bg-brand-green/80 flex items-center justify-center gap-2">
              <DocumentTextIcon className="w-5 h-5" />
              Generar Cotización PDF
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
