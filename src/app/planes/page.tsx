"use client";

import {
  DocumentMagnifyingGlassIcon,
  Cog8ToothIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function PlanesEquilibra() {
  const planes = [
    {
      nombre: "Cultura Base",
      nivel: "Nivel 1 - PYMES",
      precio: "$39",
      frecuencia: "por mes",
      icono: ShieldCheckIcon,
      beneficios: [
        "Carga de documentos legales y políticas",
        "Diagnóstico organizacional básico",
        "Acceso al módulo de Cultura Organizacional",
        "Checklist de cumplimiento legal",
        "Soporte por email",
      ],
    },
    {
      nombre: "Rentabilidad PRO",
      nivel: "Nivel 2 - Corporativo",
      precio: "$89",
      frecuencia: "por mes",
      icono: Cog8ToothIcon,
      beneficios: [
        "Motor de IA Predictiva (Burnout y Fuga)",
        "Pulso Diario + Alertas automatizadas",
        "Dashboard Ejecutivo con ROI",
        "Benchmark de políticas internas",
        "Análisis de brechas y meritocracia",
        "Recomendaciones personalizadas",
        "Incluye todo lo de Cultura Base",
      ],
      destacado: true,
    },
    {
      nombre: "Certificación EQUI-Score",
      nivel: "Pago Anual Único",
      precio: "$250",
      frecuencia: "anual",
      icono: CheckBadgeIcon,
      beneficios: [
        "Auditoría final de cumplimiento",
        "Informe PDF oficial con EQUI-Score",
        "Emisión del Sello Certificado",
        "Acceso a beneficios con aseguradoras y universidades",
        "Revisión externa independiente",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-brand-light px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-brand-dark mb-3">
          Planes de Suscripción y Certificación
        </h1>
        <p className="text-brand-dark/70 text-sm">
          Elige el nivel que mejor se adapte a tu organización. Todos los planes
          protegen la confidencialidad de tus datos y fortalecen la cultura
          laboral.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {planes.map((plan) => (
          <div
            key={plan.nombre}
            className={`rounded-xl border shadow-md p-6 flex flex-col justify-between ${
              plan.destacado
                ? "border-brand-dark bg-white"
                : "border-brand-beige bg-white"
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <plan.icono className="w-6 h-6 text-brand-dark" />
                <div>
                  <h2 className="text-xl font-semibold text-brand-dark">
                    {plan.nombre}
                  </h2>
                  <p className="text-xs text-brand-dark/50">{plan.nivel}</p>
                </div>
              </div>

              <p className="text-3xl font-bold text-brand-dark">
                {plan.precio}
                <span className="text-sm text-brand-dark/60 ml-1">
                  {plan.frecuencia}
                </span>
              </p>

              <ul className="mt-4 space-y-2 text-sm text-brand-dark">
                {plan.beneficios.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <DocumentMagnifyingGlassIcon className="w-5 h-5 text-brand-coral" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 w-full py-2 px-4 rounded bg-brand-dark text-white hover:bg-brand-dark/90 text-sm">
              Solicitar este plan
            </button>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-brand-dark/50 mt-12">
        Todos los servicios incluyen anonimato garantizado y protección de datos
        según normativa vigente.
      </p>

      {/* Formulario de contacto */}
      <section className="mt-16 max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-brand-dark mb-2 text-center">
          ¿Interesado en alguno de nuestros planes?
        </h3>
        <p className="text-sm text-brand-dark/70 text-center mb-6">
          Déjanos tus datos y te contactaremos con una propuesta adaptada a tu
          empresa.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nombre completo"
              className="border border-brand-beige rounded px-4 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral"
              required
            />
            <input
              type="email"
              placeholder="Correo corporativo"
              className="border border-brand-beige rounded px-4 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Empresa"
            className="border border-brand-beige rounded px-4 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral"
          />

          <select
            className="border border-brand-beige rounded px-4 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral"
            required
          >
            <option value="">Selecciona el plan de tu interés</option>
            <option value="base">Cultura Base (Nivel 1)</option>
            <option value="pro">Rentabilidad PRO (Nivel 2)</option>
            <option value="certificacion">Certificación EQUI-Score</option>
          </select>

          <textarea
            placeholder="Mensaje adicional (opcional)"
            rows={3}
            className="border border-brand-beige rounded px-4 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral"
          />

          <button
            type="submit"
            className="w-full py-2 bg-brand-dark text-white rounded hover:bg-brand-dark/90 text-sm"
          >
            Enviar solicitud
          </button>
        </form>
      </section>
    </main>
  );
}
