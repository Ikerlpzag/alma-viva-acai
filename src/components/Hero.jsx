import { motion } from "framer-motion";
import hero from "/images/hero.png";

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById("productos")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToVisit = () => {
    document.getElementById("visitanos")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Imagen */}
      <img
        src={hero}
        alt="Açaí artesanal de Alma Viva"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/80">
              Pureza brasileña · Esencia mediterránea
            </p>

            <h1 className="text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
              El sabor de Brasil
              <br />
              bajo el sol de Almería.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/85 md:text-lg">
              Açaí artesanal preparado al momento, ingredientes de calidad y
              toppings para crear una combinación hecha a tu gusto.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={scrollToProducts}
                className="bg-[#5B2C83] px-7 py-4 text-sm text-white transition hover:bg-[#472167]"
              >
                Descubrir productos
              </button>

              <button
                onClick={scrollToVisit}
                className="border border-white/70 px-7 py-4 text-sm text-white transition hover:bg-white hover:text-[#241C28]"
              >
                Dónde estamos
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-8 w-px bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  );
}