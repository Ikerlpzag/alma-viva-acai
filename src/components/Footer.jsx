import { motion } from "framer-motion";

const navigation = [
  { label: "Inicio", id: "inicio" },
  { label: "Sobre nosotros", id: "sobre" },
  { label: "Açaí", id: "acai" },
  { label: "Productos", id: "productos" },
  { label: "Filosofía", id: "filosofia" },
  { label: "Visítanos", id: "visitanos" },
];

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#241C28] px-6 pb-8 pt-24 text-[#F7F1E8] md:pt-32">
      <div className="mx-auto max-w-7xl">

        {/* Marca */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Alma Viva Açaí
          </p>

          <h2 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[7rem]">
            Açaí, sabor y
            <br />
            <span className="text-[#B994D1]">
              vida mediterránea.
            </span>
          </h2>
        </motion.div>

        {/* Navegación */}
        <div className="mt-20 grid gap-12 border-t border-white/15 pt-10 md:mt-28 md:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Explorar
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-fit text-left text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

        </div>

        {/* Información */}
        <div className="mt-16 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-3">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Visítanos
            </p>

            <p className="mt-5 text-sm leading-6 text-white/70">
              Paseo Marítimo de Aguadulce
              <br />
              Almería, España
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Instagram
            </p>

            <a
              href="https://www.instagram.com/almavivaacai/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 block w-fit text-sm text-white/70 transition-colors hover:text-white"
            >
              @almavivaacai
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Horario
            </p>

            <p className="mt-5 text-sm leading-6 text-white/70">
              Lunes a domingo
              <br />
              10:00 — 21:00
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-5 border-t border-white/15 pt-7 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Alma Viva Açaí
          </p>

          <p>
            Diseñado con amor mediterráneo.
          </p>

        </div>

      </div>
    </footer>
  );
}