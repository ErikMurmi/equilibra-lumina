"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-brand-beige shadow-sm w-full">
      {/* Barra principal con logo y navegación */}
      <div className="w-full px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo Equilibra"
            width={160}
            height={48}
            priority
          />
        </div>

        <nav className="flex gap-8 text-sm text-brand-dark font-medium">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/ingesta" className="hover:underline">
            Carga de documentos
          </Link>
          <Link href="/certificacion" className="hover:underline">
            Certificacion
          </Link>
          <Link href="/predictivo" className="hover:underline">
            Predictivo
          </Link>
          <Link href="/sentimiento" className="hover:underline">
            Pulso Diario
          </Link>
          <Link href="/pulso" className="hover:underline">
            Pulso
          </Link>
          <Link href="/documentacion" className="hover:underline">
            Estandares
          </Link>
          <Link href="/finanzas" className="hover:underline">
            Mi plan
          </Link>
        </nav>
      </div>
    </header>
  );
}
