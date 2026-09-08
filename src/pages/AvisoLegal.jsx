import { Link } from "react-router-dom";

export default function AvisoLegal() {
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
          Aviso legal
        </h1>

        <div className="mt-12 space-y-8 text-sm leading-7 text-[#241C28]/70">
          <section>
            **Titular del sitio**

            Alma Viva Açaí
          </section>

          <section>
            **Actividad**

            Restaurante especializado en açaí, smoothies y productos saludables.
          </section>

          <section>
            **Ubicación**

            Paseo Marítimo de Aguadulce, Almería.
          </section>

          <section>
            **Propiedad intelectual**

            Todos los contenidos, fotografías, textos y elementos gráficos de esta
            web pertenecen a Alma Viva Açaí o cuentan con autorización para su uso.
          </section>
        </div>
      </div>
    </main>
  );
}