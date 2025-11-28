"use client";

import KpiCard from "@/components/KpiCard";
import AlertCard from "@/components/AlertCard";
import PulseChart from "@/components/PulseChart";
import CertificationPreview from "@/components/CertificationPreview";
import ImpactoFinancieroChart from "@/components/ImpactoFinancieroChart";
import {
  ExclamationTriangleIcon,
  ArrowTrendingDownIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

const alertas = [
  {
    icon: ExclamationTriangleIcon,
    title: "Alta rotación en Ingeniería",
    description:
      "El equipo de backend tuvo 3 salidas no planificadas en los últimos 2 meses.",
    level: "alto",
  },
  {
    icon: ArrowTrendingDownIcon,
    title: "Riesgo de burnout en Ventas",
    description:
      "El 62% del equipo reportó emociones negativas durante 4 días seguidos.",
    level: "medio",
  },
  {
    icon: DocumentCheckIcon,
    title: "Bloqueo salarial detectado",
    description:
      "2 colaboradoras llevan 18 meses sin ascenso ni revisión salarial.",
    level: "bajo",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-brand-light px-6 py-10 space-y-16">
      {/* ENCABEZADO */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-brand-dark mb-2">
          Dashboard Ejecutivo
        </h1>
        <p className="text-sm text-brand-dark/60 max-w-xl">
          Estado actual del bienestar organizacional y su impacto en la
          rentabilidad. Este tablero justifica el modelo de suscripción y
          certificación.
        </p>
      </header>

      {/* KPIs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard label="EQUI-Score" value="82" unit="/100" color="green" />
        <KpiCard label="Rotación Anual" value="15%" color="coral" />
        <KpiCard label="Pulso Promedio" value="68%" color="coral" />
        <KpiCard label="Alertas Activas" value="3" color="coral" />
      </section>

      {/* Pulso */}
      <section className="space-y-10">
        <div className="bg-white p-6 rounded-xl shadow-md max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-brand-dark mb-4">
            Pulso Emocional Colectivo
          </h2>
          <PulseChart />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-brand-dark mb-4">
            Alertas Inteligentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {alertas.map((alerta, index) => (
              <AlertCard
                key={index}
                title={alerta.title}
                description={alerta.description}
                level={alerta.level as "alto" | "medio" | "bajo"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impacto financiero */}
      <section className="space-y-10">
        <div className="max-w-5xl mx-auto">
          <ImpactoFinancieroChart />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KpiCard label="Ahorro IA Proyectado" value="$34,000" color="green" />
          <KpiCard
            label="Certificación desbloquea"
            value="-15%"
            unit=" seguro"
            color="green"
          />
          <KpiCard
            label="Costo evitado rotación"
            value="$18,200"
            color="green"
          />
        </div>
      </section>

      {/* Certificación */}
      <section className="space-y-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-brand-dark">
          Progreso de Certificación EQUI-Score
        </h2>
        <CertificationPreview />
      </section>
    </main>
  );
}
