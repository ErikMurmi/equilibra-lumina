
import PulsoForm from "../../components/PulsoForm";

export default function PulsoPage() {
  return (
    <main className="min-h-screen bg-brand-light p-6">
      <h1 className="text-2xl font-semibold text-brand-dark mb-6">
        Check-in Diario de Bienestar
      </h1>
      <div className="bg-white p-6 rounded shadow">
        <PulsoForm />
      </div>
    </main>
  );
}
