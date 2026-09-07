import { motion } from "framer-motion";
import acaiImage from "/images/about.png";

const steps = [
  {
    number: "01",
    title: "Preparamos",
    description:
      "Preparamos nuestra base al momento con açaí, banana y guaraná, cuidando la textura y el sabor.",
  },
  {
    number: "02",
    title: "Tú eliges",
    description:
      "Combina tus toppings favoritos y crea un açaí completamente a tu gusto.",
  },
  {
    number: "03",
    title: "Disfrutas",
    description:
      "Te lo servimos listo para disfrutarlo a tu manera, ya sea paseando junto al mar o simplemente desconectando un rato.",
  },
];

export default function Acai() {
  const scrollToProducts = () => {
    document.getElementById("productos")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="acai"
      className="overflow-hidden bg-[#5B2C83] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#D9C3E8]">
              Nuestro açaí
            </p>
          </div>

          <h2 className="text-5xl font-medium leading-[0.98] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            El sabor de Brasil,
            <br />
            <span className="text-[#D9C3E8]">
              hecho al momento.
            </span>
          </h2>
        </motion.div>

        {/* Imagen + texto */}
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-[1.25fr_0.75fr] md:items-end md:gap-20">

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden">
              <img
                src={acaiImage}
                alt="Açaí artesanal de Alma Viva"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover md:aspect-[4/5]"
              />
            </div>

            <div className="absolute bottom-5 left-5">
              <span className="bg-[#F7F1E8] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#5B2C83]">
                Alma Viva Açaí
              </span>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="pb-2"
          >
            <p className="text-2xl font-medium leading-tight md:text-3xl">
              Nuestro producto estrella, preparado al momento y fiel a su
              esencia.
            </p>

            <div className="mt-8 space-y-5 text-sm leading-7 text-white/65 md:text-base">
              <p>
                Preparamos nuestra base al momento con açaí, banana y guaraná,
                buscando una textura cremosa y un sabor equilibrado.
              </p>

              <p>
                Después llega la parte que más nos gusta: elegir. Combina tus
                toppings favoritos y crea tu propio açaí.
              </p>
            </div>

            <button
              onClick={scrollToProducts}
              className="mt-10 border-b border-[#D9C3E8] pb-2 text-xs uppercase tracking-[0.2em] text-[#D9C3E8] transition-opacity duration-300 hover:opacity-60"
            >
              Ver nuestros productos →
            </button>
          </motion.div>
        </div>

        {/* Proceso */}
        <div className="mt-20 border-t border-white/15 md:mt-28">
          <div className="grid md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0"
              >
                <span className="text-xs tracking-[0.2em] text-[#D9C3E8]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/55 md:text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
