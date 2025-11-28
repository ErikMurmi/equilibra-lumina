
"use client";

export default function AlertBanner({ historial }: { historial: number[] }) {
  const negativos = historial.filter((v) => v <= 1).length;

  if (negativos >= 3) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg text-sm mt-4 text-center">
        Notamos que tu semana ha sido retadora. Si necesitas ayuda, recuerda que Equilibra te escucha 💙.
      </div>
    );
  }

  return null;
}
