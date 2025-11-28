"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white text-sm pt-12 pb-6 px-6 mt-16">
      {/* Sección de columnas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <h4 className="text-base font-semibold mb-4">Empresa</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Alianzas
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4">Recursos</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Guías de Usuario
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Plantillas
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Documentación de nuestros estándares
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Documentación Legal
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4">Certificación</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                EQUI-Score
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Beneficios
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Afiliación
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior con términos y copyright */}
      <div className="border-t border-brand-beige pt-6 text-xs text-brand-beige flex flex-col md:flex-row justify-between items-center gap-2">
        <p>
          © {new Date().getFullYear()} Equilibra. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            Términos
          </a>
          <a href="#" className="hover:underline">
            Privacidad
          </a>
          <a href="#" className="hover:underline">
            Seguridad
          </a>
        </div>
      </div>
    </footer>
  );
}
