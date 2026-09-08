import { Link } from "react-router-dom";

export default function Privacidad() {
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
          Política de privacidad
        </h1>

        <div className="mt-12 space-y-8 text-sm leading-7 text-[#241C28]/70">
          <section>
            Esta web únicamente recopila los datos que el usuario facilite de
            forma voluntaria mediante los medios de contacto disponibles.
          </section>

          <section>
            Los datos serán utilizados exclusivamente para responder consultas o
            gestionar la relación con el cliente y no se cederán a terceros salvo
            obligación legal.
          </section>

          <section>
            El usuario podrá ejercer sus derechos de acceso, rectificación,
            supresión y demás derechos reconocidos por el RGPD contactando con el
            titular del negocio.
          </section>
        </div>
      </div>
    </main>
  );
}