import { Link } from "react-router-dom";

export default function Cookies() {
  return (
    <main className="min-h-screen bg-[#F7F1E8] text-[#241C28]">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.25em] text-[#5B2C83]"
        >
          ← Volver
        </Link>

        <h1 className="mt-8 text-5xl font-medium tracking-[-0.04em]">
          Política de cookies
        </h1>

        <div className="mt-12 space-y-8 text-sm leading-7 text-[#241C28]/70">
          <section>
            Esta web utiliza cookies técnicas necesarias para su funcionamiento y
            servicios de terceros como Google Maps, que pueden instalar cookies
            propias al visualizar el mapa.
          </section>

          <section>
            Si en el futuro se incorporan herramientas de analítica o medición,
            esta política será actualizada para reflejar dichas cookies.
          </section>
        </div>
      </div>
    </main>
  );
}