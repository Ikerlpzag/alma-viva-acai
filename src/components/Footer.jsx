import { FiInstagram, FiMail } from "react-icons/fi";

const navigation = [
  { name: "Inicio", id: "inicio" },
  { name: "Açaí", id: "acai" },
  { name: "Smoothies", id: "productos" },
  { name: "Contacto", id: "visitanos" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <footer className="bg-[#241C28] px-6 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Parte superior */}
        <div className="border-b border-white/10 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2">

            <div>
              <p className="text-xl tracking-[0.18em]">
                ALMA VIVA
              </p>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
                Alineando nutrición consciente y disfrute puro bajo el sol
                infinito de Aguadulce, Almería.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">

              {/* Navegación */}
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/35">
                  Explorar
                </p>

                <div className="flex flex-col items-start gap-3">
                  {navigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Legal */}
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/35">
                  Legal
                </p>

                <div className="flex flex-col items-start gap-3">
                  <a
                    href="#"
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    Privacidad
                  </a>

                  <a
                    href="#"
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    Términos
                  </a>

                  <a
                    href="#"
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    Cookies
                  </a>
                </div>
              </div>

              {/* Contacto */}
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/35">
                  Contacto
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:hello@almavivaacai.com"
                    className="flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                  >
                    <FiMail size={15} />
                    Email
                  </a>

                  <a
                    href="https://www.instagram.com/almavivaacai/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                  >
                    <FiInstagram size={15} />
                    Instagram
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Parte inferior */}
        <div className="flex flex-col gap-3 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Alma Viva Açaí. Todos los derechos reservados.
          </p>

          <p>
            Diseñado con amor mediterráneo.
          </p>
        </div>

      </div>
    </footer>
  );
}