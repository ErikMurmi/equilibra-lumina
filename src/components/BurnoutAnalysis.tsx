"use client";

import HexagonRadarChart from "./HexagonRadarChart";
import { useState } from "react";

const AREAS = ["Ventas", "Ingeniería", "Marketing"];

const ANALISIS = {
  Ventas: {
    data: [80, 70, 65, 60, 55, 75],
    labels: [
      "Carga Laboral",
      "Emociones Negativas",
      "Horas Extra",
      "Ascensos Pendientes",
      "Incertidumbre",
      "Rotación Histórica",
    ],
    resumen: "Riesgo Alto por fatiga acumulada y poca movilidad interna.",
    detalle:
      "Diagnóstico de Riesgo de Rotación Alto (Factor Inmediato). La IA detecta una peligrosa correlación entre la Carga Laboral (80%) y el nivel de Emociones Negativas (70%), superando el umbral de fatiga crítica en un 15% respecto al promedio de la industria. El bajo índice de Ascensos Pendientes (60%) sugiere que la sobrecarga no está siendo compensada con desarrollo de carrera, creando una sensación de estancamiento. Esto indica que el equipo está en fase avanzada de burnout, con riesgo de fuga de talento clave en los próximos 60 a 90 días. Costo Potencial de Reemplazo: Alto.",
    recomendaciones: [
      "Acción de ROI Prioritaria: Identificar y promover a los 3 empleados clave con mayor tiempo en la misma posición (Ascensos Pendientes) para monetizar su experiencia y reducir la Incertidumbre (ROI estimado: $15,000 en costo de reemplazo por empleado).",
      "Implementar un Plan de Choque de Descarga Operativa para reducir la Carga Laboral, reasignando tareas administrativas a un soporte externo durante las próximas 4 semanas.",
      "Integrar sesiones de coaching enfocadas en la gestión del tiempo y el establecimiento de límites, vendiéndolo como una mejora de productividad, no de bienestar.",
    ],
  },
  Ingeniería: {
    data: [60, 50, 45, 40, 35, 55],
    labels: [
      "Carga Laboral",
      "Emociones Negativas",
      "Horas Extra",
      "Ascensos Pendientes",
      "Incertidumbre",
      "Rotación Histórica",
    ],
    resumen: "Riesgo Medio: indicadores moderados pero estables.",
    detalle:
      "Diagnóstico de Riesgo de Estancamiento (Factor Latente). Los indicadores de rotación actual y carga laboral se mantienen en niveles moderados (60%), lo que sugiere estabilidad a corto plazo. Sin embargo, la acumulación de Ascensos Pendientes (40%) y una gestión de expectativas débil (Incertidumbre 35%) genera una presión latente en el pipeline de talento. La IA advierte que este estancamiento es el principal factor de riesgo a mediano plazo (9 a 12 meses), especialmente para el talento calificado que busca crecimiento rápido. Riesgo de Bloqueo de Meritocracia identificado.",
    recomendaciones: [
      "Acción Proactiva de Retención: Formalizar rutas de crecimiento profesional y salarial. Crear un plan de promoción acelerada para el 10% del personal técnico con mayor antigüedad y performance.",
      "Diseñar espacios de feedback trimestrales obligatorios dirigidos por líderes técnicos para gestionar expectativas y mitigar la Incertidumbre.",
      "Implementar un sistema de 'Mentoring Inverso' que empareje a los ingenieros senior con los nuevos, fortaleciendo el sentido de propósito y reduciendo el 'Ascenso Pendiente' percibido.",
    ],
  },
  Marketing: {
    data: [30, 25, 20, 15, 20, 18],
    labels: [
      "Carga Laboral",
      "Emociones Negativas",
      "Horas Extra",
      "Ascensos Pendientes",
      "Incertidumbre",
      "Rotación Histórica",
    ],
    resumen: "Riesgo Bajo: clima organizacional saludable.",
    detalle:
      "Diagnóstico de Sostenibilidad (Factor Bajo Riesgo). Este equipo opera con un equilibrio excepcional, demostrando baja Rotación Histórica y un manejo eficiente de la Carga Laboral. La baja incidencia de Emociones Negativas y Horas Extra sugiere un liderazgo eficaz y procesos bien definidos. La IA califica este equipo como un 'Ancla de Estabilidad' y recomienda replicar su estructura de gestión en otras áreas. No obstante, la Incertidumbre (20%) debe ser monitoreada para evitar la complacencia.",
    recomendaciones: [
      "Acción Estratégica: Documentar el modelo de liderazgo y la estructura operativa de Marketing para exportarlo a los equipos de Ventas e Ingeniería como una práctica probada para **reducir el burnout.",
      "Establecer un programa de Reconocimiento Interno por Contribución (no solo por resultados) en reuniones semanales, para reforzar el clima positivo y mantener la moral alta.",
      "Aplicar microencuestas mensuales dirigidas específicamente a la visión a futuro** para validar continuamente la baja Incertidumbre.",
    ],
  },
};

export default function BurnoutAnalysis() {
  const [areaSeleccionada, setAreaSeleccionada] =
    useState<keyof typeof ANALISIS>("Ventas");

  const { data, labels, resumen, detalle, recomendaciones } =
    ANALISIS[areaSeleccionada];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-brand-dark">
          Análisis Predictivo por Área
        </h2>
        <select
          className="border border-brand-beige px-4 py-2 rounded-md"
          value={areaSeleccionada}
          onChange={(e) =>
            setAreaSeleccionada(e.target.value as keyof typeof ANALISIS)
          }
        >
          {AREAS.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-full md:w-1/2">
          <HexagonRadarChart data={data} labels={labels} />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold text-brand-dark mb-4">
            Diagnóstico IA
          </h3>
          <ul className="list-disc list-inside text-sm mb-4 text-brand-dark space-y-1">
            {labels.map((label, index) => (
              <li key={index}>
                {label}: <strong>{data[index]}%</strong>
              </li>
            ))}
          </ul>
          <p className="italic text-brand-coral">{resumen}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-brand-dark mb-2">
          Análisis Detallado
        </h3>
        <p className="text-sm text-brand-dark leading-relaxed">{detalle}</p>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-brand-dark mb-2">
          Recomendaciones
        </h3>
        <ul className="list-disc list-inside text-sm text-brand-dark space-y-2">
          {recomendaciones.map((rec, i) => (
            <li key={i}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
