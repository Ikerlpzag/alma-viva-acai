import { motion } from "framer-motion";
import hero from "/images/hero.png";

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById("productos")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-end overflow-hidden bg-[#241C28]"
    >
      {/* Imagen */}
      <img
        src={hero}
        alt="Açaí de Alma Viva"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Contenido */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-40 md:pb-20 lg:pb-24">

          {/* Descriptor */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 text-[10px] uppercase tracking-[0.4em] text-white/70 md:text-xs"
          >
            Pureza brasileña · Brisa mediterránea
          </motion.p>

          {/* Titular */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[6.5rem]"
          >
            El sabor de Brasil
            <br />
            <span className="text-[#D9C3E8]">
              bajo el sol de Almería.
            </span>
          </motion.h1>

          {/* Parte inferior */}
          <div className="mt-9 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="max-w-md text-sm leading-6 text-white/75 md:text-base"
            >
              Açaí preparado al momento, ingredientes de calidad y toppings para crear la combinación que más te guste.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              onClick={scrollToProducts}
              className="group flex w-fit items-center gap-4 text-sm text-white"
            >
              <span className="border-b border-white/60 pb-1 transition-colors group-hover:border-white">
                Descubre nuestros productos
              </span>

              <span className="text-white/60 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.button>

          </div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px bg-white/50"
        />
      </motion.div>
    </section>
  );
}