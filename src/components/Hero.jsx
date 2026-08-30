import { motion } from "framer-motion";
import hero from "../assets/images/hero.png";

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
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <img
        src={hero}
        alt="Açaí artesanal"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="mb-4 uppercase tracking-[0.35em] text-white/80 text-xs">
              Pureza Amazónica · Brisa Mediterránea
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-white">
              Encuentra el sabor más puro de Brasil bajo el sol de Almería.
            </h1>

            <p className="mt-6 text-white/90 text-lg leading-8 max-w-xl">
              Elaboramos cada açaí al momento con plátano, guaraná y fruta
              natural. Una experiencia artesanal frente al Paseo Marítimo de
              Aguadulce.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="bg-[#5B2C83] hover:bg-[#472167] text-white px-7 py-4 rounded-full transition"
              >
                Descubrir productos
              </button>

              <button
                onClick={scrollToVisit}
                className="border border-white text-white hover:bg-white hover:text-black px-7 py-4 rounded-full transition"
              >
                Dónde estamos
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-10 w-6 rounded-full border border-white/60 flex justify-center">
          <div className="mt-2 h-2 w-1 rounded-full bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}