"use client";

import { useState } from "react";
import {
  CloudArrowUpIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  ArrowPathIcon,
  ChartBarIcon,
  ArrowUpTrayIcon,
  ShieldCheckIcon,
  UsersIcon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

import {
  UserPlusIcon,
  UserMinusIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const tabs = [
  { label: "Carga de Datos", icon: CloudArrowUpIcon },
  { label: "Mapeo de Esquema", icon: Cog6ToothIcon },
  { label: "Transacciones RRHH", icon: InboxArrowDownIcon },
  { label: "Políticas Internas", icon: DocumentTextIcon },
];

export default function IngestaPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="min-h-screen bg-brand-light p-8">
      <h1 className="text-2xl font-semibold text-brand-dark mb-6">
        Módulo de Ingesta de Data Histórica
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap space-x-4 border-b border-brand-beige mb-6">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`pb-2 px-4 flex items-center gap-2 text-sm font-medium ${
              i === activeTab
                ? "border-b-2 border-brand-dark text-brand-dark"
                : "text-brand-dark/60 hover:text-brand-dark"
            }`}
            onClick={() => setActiveTab(i)}
          >
            <tab.icon className="w-5 h-5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Section content */}
      <section className="bg-white rounded-lg shadow p-6 transition-all duration-300">
        {activeTab === 0 && <CargaDeDatos />}
        {activeTab === 1 && <MapeoDeEsquema />}
        {activeTab === 2 && <TransaccionesRRHH />}
        {activeTab === 3 && <PoliticasInternas />}
      </section>
    </main>
  );
}

// Subcomponentes

function CargaDeDatos() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-brand-dark mb-4">
        Carga de Datos Históricos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FileCard
          title="Remuneración y Estructura"
          description="Género, banda salarial, bonificaciones, tipo de contrato. Permite el análisis de brechas salariales."
          icon={CurrencyDollarIcon}
        />

        <FileCard
          title="Histórico de Carrera"
          description="Fechas de ingreso, ascensos, cambios de rol, y áreas. Detecta bloqueos en progresión profesional."
          icon={BriefcaseIcon}
        />

        <FileCard
          title="Transacciones de Personal"
          description="Fecha de baja, motivo, licencias. Proporciona insumos para el modelo de rotación."
          icon={ArrowPathIcon}
        />

        <FileCard
          title="Carga y Desempeño"
          description="Evaluación de desempeño, horas extra y asignaciones críticas. Correlación con agotamiento."
          icon={ChartBarIcon}
        />
      </div>

      <p className="text-xs text-brand-dark/50 mt-4">
        * Los datos deben estar despersonalizados y en formato CSV o Excel.
      </p>
    </div>
  );
}

function MapeoDeEsquema() {
  return (
    <div>
      <p className="text-brand-dark font-medium mb-2">
        Visualización del mapeo de datos:
      </p>
      <ul className="list-disc ml-5 text-sm text-brand-dark/80">
        <li>
          <strong>Columna:</strong> `salario_actual` →{" "}
          <strong>Variable:</strong> `SALARIO_BASE`
        </li>
        <li>
          <strong>Columna:</strong> `nivel_rendimiento` →{" "}
          <strong>Variable:</strong> `DESEMPENO`
        </li>
        <li>
          <strong>Columna:</strong> `anios_antiguedad` →{" "}
          <strong>Variable:</strong> `TIEMPO_EN_EMPRESA`
        </li>
      </ul>
      <p className="text-xs text-brand-dark/50 mt-2">
        Este mapeo es sólo de demostración visual.
      </p>
    </div>
  );
}

function TransaccionesRRHH() {
  const [dataStats, setDataStats] = useState({
    contrataciones: 12,
    bajas: 5,
    ascensos: 8,
  });

  const chartData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
    datasets: [
      {
        label: "Contrataciones",
        data: [2, 3, 4, 1, 2],
        backgroundColor: "#8BB8A8",
      },
      {
        label: "Bajas",
        data: [1, 2, 0, 1, 1],
        backgroundColor: "#E48A6E",
      },
      {
        label: "Ascensos",
        data: [0, 1, 2, 3, 2],
        backgroundColor: "#1F4E5F",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-brand-dark">
        Visión General de Transacciones de RRHH
      </h2>

      {/* Gráfico */}
      <div className="bg-white border border-brand-beige rounded-xl p-4">
        <Bar data={chartData} />
      </div>

      {/* Tarjetas de acción */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-brand-beige shadow p-6 flex flex-col items-center text-center">
          <UserPlusIcon className="w-10 h-10 text-brand-green mb-2" />
          <h3 className="font-semibold text-brand-dark">
            Nuevas Contrataciones
          </h3>
          <p className="text-3xl font-bold text-brand-dark">
            {dataStats.contrataciones}
          </p>
          <button className="mt-3 bg-brand-green text-white px-4 py-2 rounded hover:bg-green-700">
            Subir
          </button>
        </div>

        <div className="bg-white rounded-xl border border-brand-beige shadow p-6 flex flex-col items-center text-center">
          <UserMinusIcon className="w-10 h-10 text-brand-coral mb-2" />
          <h3 className="font-semibold text-brand-dark">Bajas</h3>
          <p className="text-3xl font-bold text-brand-dark">
            {dataStats.bajas}
          </p>
          <button className="mt-3 bg-brand-coral text-white px-4 py-2 rounded hover:bg-red-600">
            Subir
          </button>
        </div>

        <div className="bg-white rounded-xl border border-brand-beige shadow p-6 flex flex-col items-center text-center">
          <ArrowTrendingUpIcon className="w-10 h-10 text-brand-dark mb-2" />
          <h3 className="font-semibold text-brand-dark">Ascensos</h3>
          <p className="text-3xl font-bold text-brand-dark">
            {dataStats.ascensos}
          </p>
          <button className="mt-3 bg-brand-dark text-white px-4 py-2 rounded hover:bg-brand-dark/80">
            Subir
          </button>
        </div>
      </div>

      <p className="text-xs text-brand-dark/50 mt-2">
        * Esta es una visualización simulada para propósitos del prototipo.
      </p>
    </div>
  );
}

function PolicyCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: any;
}) {
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = () => {
    setUploaded(true);
  };

  return (
    <div className="border border-brand-beige rounded-xl p-5 bg-white shadow-sm flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-brand-dark" />
        <h3 className="text-md font-semibold text-brand-dark">{title}</h3>
      </div>
      <p className="text-sm text-brand-dark/70">{description}</p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <label className="flex items-center gap-2 text-sm text-brand-dark cursor-pointer">
          <ArrowUpTrayIcon className="w-5 h-5" />
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleUpload}
            className="hidden"
          />
          Suelta aquí tus archivos
        </label>

        <button className="bg-brand-dark text-white text-sm px-4 py-2 rounded hover:bg-brand-dark/80">
          Buscar archivos
        </button>

        <span className="text-xs text-brand-dark/50">
          {uploaded ? "✅ Archivo cargado" : "No has cargado archivos"}
        </span>
      </div>
    </div>
  );
}

function FileCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: any;
}) {
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = () => {
    setUploaded(true);
  };

  return (
    <div className="border border-brand-beige rounded-xl p-5 flex flex-col items-start shadow-sm w-full bg-white">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-6 h-6 text-brand-dark" />
        <h3 className="text-md font-semibold text-brand-dark">{title}</h3>
      </div>

      <p className="text-sm text-brand-dark/70 mb-4">{description}</p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
        <label className="flex items-center gap-2 text-sm text-brand-dark cursor-pointer">
          <ArrowUpTrayIcon className="w-5 h-5" />
          <input
            type="file"
            accept=".csv,.xlsx"
            onChange={handleUpload}
            className="hidden"
          />
          Suelta aquí tus archivos
        </label>

        <button className="bg-brand-dark text-white text-sm px-4 py-2 rounded hover:bg-brand-dark/80">
          Buscar archivos
        </button>

        <span className="text-xs text-brand-dark/50">
          {uploaded ? "✅ Archivo cargado" : "No has cargado archivos"}
        </span>
      </div>
    </div>
  );
}

function PoliticasInternas() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-brand-dark mb-4">
        Carga de documentos de políticas internas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PolicyCard
          title="Plan de Igualdad y No Discriminación"
          description="Documento base para evaluar compromisos estratégicos y brechas salariales."
          icon={DocumentTextIcon}
        />
        <PolicyCard
          title="Protocolo contra el Acoso y Violencia"
          description="Impacta la confianza y seguridad del entorno. Obligatorio por ley."
          icon={ShieldCheckIcon}
        />
        <PolicyCard
          title="Manual de Talento Humano"
          description="Incluye beneficios, licencias, teletrabajo. Insumo para benchmarking competitivo."
          icon={UsersIcon}
        />
        <PolicyCard
          title="Reglamento Interno de Trabajo"
          description="Evalúa la formalidad de normas y procedimientos de conducta."
          icon={BookOpenIcon}
        />
        <PolicyCard
          title="Manual de Contratación y Selección"
          description="Identifica sesgos de entrada. Aporta al análisis de equidad salarial."
          icon={ClipboardDocumentCheckIcon}
        />
        <PolicyCard
          title="Política de Diversidad e Inclusión"
          description="Apoya el cumplimiento de políticas de inclusión formalizadas."
          icon={IdentificationIcon}
        />
      </div>

      <p className="text-xs text-brand-dark/50 mt-4">
        * Los archivos deben estar en formato PDF o Word.
      </p>
    </div>
  );
}
