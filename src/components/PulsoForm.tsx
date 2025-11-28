"use client";

import { useState } from "react";
import LikertQuestion from "./LikertQuestion";

const contextOptions = [
  "Carga Laboral Excesiva",
  "Falta de Claridad en Objetivos",
  "Interacción Negativa con Liderazgo",
  "Falta de Colaboración en el Equipo",
  "Problemas con Recursos/Herramientas",
  "Equilibrio Vida/Trabajo",
];

const predictiveQuestions = [
  "Mi trabajo esta semana fue reconocido equitativamente.",
  "Veo oportunidades claras de crecimiento profesional en mi rol.",
  "Siento que tengo autonomía para tomar decisiones en mi trabajo.",
  "Siento que mi salario es justo en comparación con mis pares.",
  "Recibí el apoyo necesario de mi líder para completar mis tareas.",
];

export default function PulsoForm() {
  const [energia, setEnergia] = useState<number | null>(null);
  const [contexto, setContexto] = useState<string[]>([]);
  const [respuestas, setRespuestas] = useState<number[]>(
    Array(predictiveQuestions.length).fill(null)
  );

  const toggleContext = (value: string) => {
    setContexto((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleLikertChange = (index: number, value: number) => {
    const newRespuestas = [...respuestas];
    newRespuestas[index] = value;
    setRespuestas(newRespuestas);
  };

  const handleSubmit = () => {
    console.log("Check-in enviado:", {
      energia,
      contexto,
      respuestas,
      timestamp: new Date().toISOString(),
    });
    alert("✅ Check-in registrado. ¡Gracias por compartir tu estado!");
  };

  return (
    <div className="space-y-6">
      {/* Escala de energía */}
      <div>
        <label className="block font-semibold text-brand-dark mb-2">
          ¿Cómo te sientes hoy en energía?
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setEnergia(val)}
              className={`w-10 h-10 rounded-full border text-sm font-bold ${
                energia === val
                  ? "bg-brand-green text-white"
                  : "text-brand-dark border-brand-dark"
              }`}
            >
              {val}
            </button>
          ))}
        </div>
        <p className="text-xs mt-1 text-brand-dark/60">
          1 = Totalmente Agotado, 5 = Totalmente Energizado
        </p>
      </div>

      {/* Contexto si energía baja */}
      {energia && energia <= 3 && (
        <div>
          <label className="block font-semibold text-brand-dark mb-2">
            ¿Qué está influyendo en tu energía? (Selecciona una o más)
          </label>
          <div className="flex flex-wrap gap-2">
            {contextOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => toggleContext(opt)}
                type="button"
                className={`px-3 py-1 rounded-full text-sm border ${
                  contexto.includes(opt)
                    ? "bg-brand-coral text-white border-brand-coral"
                    : "border-brand-dark/30 text-brand-dark"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Preguntas predictivas */}
      <div className="space-y-4">
        <h3 className="font-semibold text-brand-dark mb-2">
          Preguntas de Retención
        </h3>
        {predictiveQuestions.map((q, i) => (
          <LikertQuestion
            key={i}
            index={i}
            question={q}
            value={respuestas[i]}
            onChange={(val) => handleLikertChange(i, val)}
          />
        ))}
      </div>

      {/* Enviar */}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-brand-dark text-white px-6 py-2 rounded hover:bg-brand-dark/80"
      >
        Enviar Check-in
      </button>
    </div>
  );
}
