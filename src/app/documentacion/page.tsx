"use client";

export default function EQUIPage() {
  return (
    <main className="min-h-screen bg-brand-light p-8">
      <h1 className="text-3xl font-bold text-brand-dark mb-6">
        Documentación del EQUI-SCORE
      </h1>

      <section className="bg-white rounded-xl shadow p-6 mb-10">
        <h2 className="text-2xl font-semibold text-brand-dark mb-2">
          ¿Qué es el EQUI-SCORE?
        </h2>
        <p className="text-brand-dark/80">
          El EQUI-SCORE es un índice certificado que cuantifica el nivel de
          equidad, estabilidad y riesgo operativo de una organización, basado en
          la gestión de su talento humano. Este score va más allá del
          cumplimiento legal, midiendo la salud predictiva de la empresa para
          mitigar el costo oculto de la rotación y calificar para beneficios
          exclusivos.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow p-6 mb-10">
        <h3 className="text-xl font-semibold text-brand-dark mb-4">
          1. Bases Metodológicas y Estándares
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-brand-dark border border-brand-beige">
            <thead className="bg-brand-light">
              <tr>
                <th className="p-3 border">Estándar</th>
                <th className="p-3 border">Aplicación en EQUI-SCORE</th>
                <th className="p-3 border">Valor Añadido</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 border">WEPs (ONU Mujeres)</td>
                <td className="p-3 border">
                  Evalúa pilares de meritocracia y equidad (35%). WEPs 4 y 6.
                </td>
                <td className="p-3 border">
                  Medición basada en marco social reconocido ONU.
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3 border">ISO 30414</td>
                <td className="p-3 border">
                  Pilar de riesgo predictivo (45%). Turnover y sucesión.
                </td>
                <td className="p-3 border">
                  Métrica validada y auditada globalmente.
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3 border">GRI Standards</td>
                <td className="p-3 border">
                  Indicadores GRI 404 y 405 para carrera y salario.
                </td>
                <td className="p-3 border">
                  Indicadores comparables con sostenibilidad corporativa.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow p-6 mb-10">
        <h3 className="text-xl font-semibold text-brand-dark mb-4">
          2. Criterios e Indicadores Clave
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-brand-dark border border-brand-beige">
            <thead className="bg-brand-light">
              <tr>
                <th className="p-3 border">Pilar</th>
                <th className="p-3 border">Peso</th>
                <th className="p-3 border">Indicadores</th>
                <th className="p-3 border">Fuente en Equilibra</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 border">Riesgo Predictivo</td>
                <td className="p-3 border">45%</td>
                <td className="p-3 border">
                  Burnout proyectado, permanencia femenina
                </td>
                <td className="p-3 border">Pulso y rotación</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 border">Meritocracia y Equidad</td>
                <td className="p-3 border">35%</td>
                <td className="p-3 border">
                  Brecha salarial, bloqueo en ascensos
                </td>
                <td className="p-3 border">Nómina y carrera</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 border">Benchmark Competitivo</td>
                <td className="p-3 border">20%</td>
                <td className="p-3 border">
                  Políticas internas, alertas críticas
                </td>
                <td className="p-3 border">Dashboard</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white rounded-xl shadow p-6 mb-10">
        <h3 className="text-xl font-semibold text-brand-dark mb-4">
          3. Niveles de Certificación
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          {[
            {
              nivel: "Platino (Éxito)",
              rango: "85 - 100",
              descripcion:
                "Estabilidad total. Acceso completo a beneficios preferenciales.",
              acceso: "Acceso Total",
            },
            {
              nivel: "Dorado (Estable)",
              rango: "70 - 84",
              descripcion: "Estabilidad aceptable. Requiere mejoras moderadas.",
              acceso: "Acceso Preferencial",
            },
            {
              nivel: "Plata (Alerta)",
              rango: "55 - 69",
              descripcion:
                "Riesgo medio-alto. Requiere intervención en 6 meses.",
              acceso: "Acceso Limitado",
            },
            {
              nivel: "Rojo (Crítico)",
              rango: "0 - 54",
              descripcion:
                "Riesgo máximo. Acceso denegado hasta mejora de score.",
              acceso: "Acceso Denegado",
            },
          ].map((item) => (
            <div
              key={item.nivel}
              className="bg-brand-light border border-brand-beige rounded p-4"
            >
              <h4 className="text-brand-dark font-semibold">{item.nivel}</h4>
              <p className="text-brand-dark/70 text-xs mb-1">
                Rango: {item.rango}
              </p>
              <p className="text-brand-dark/80 mb-1">{item.descripcion}</p>
              <p className="text-brand-dark font-medium">{item.acceso}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold text-brand-dark mb-2">
          4. Renovación y Validez
        </h3>
        <p className="text-brand-dark/80 mb-2">
          El certificado tiene una validez de 12 meses. Para mantener el acceso
          a beneficios, se requiere la renovación anual mediante una nueva
          auditoría.
        </p>
        <p className="text-brand-dark/60 text-sm">
          (Sujeto a tarifa anual de certificación)
        </p>
      </section>
    </main>
  );
}
