type Props = {
  title: string;
  nivel: string;
  tendencia: string;
  descripcion: string;
};

export default function IndicadorCard({
  title,
  nivel,
  tendencia,
  descripcion,
}: Props) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="text-md font-bold text-brand-dark mb-1">{title}</h3>
      <p className="text-sm font-semibold text-brand-green mb-1">
        Nivel actual: {nivel}
      </p>
      <p className="text-sm text-brand-coral mb-1">Tendencia: {tendencia}</p>
      <p className="text-sm text-brand-dark">{descripcion}</p>
    </div>
  );
}
