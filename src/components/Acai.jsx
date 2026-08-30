import { motion } from "framer-motion";
import acaiImage from "../assets/images/about.png";

const steps = [
  {
    number: "01",
    title: "La base",
    description:
      "Preparamos nuestra base de açaí al momento, combinándola con banana y guaraná hasta conseguir una textura cremosa y equilibrada.",
  },
  {
    number: "02",
    title: "A tu manera",
    description:
      "Elige los toppings que más te gustan y crea una combinación completamente personalizada.",
  },
  {
    number: "03",
    title: "Disfruta",
    description:
      "Te lo servimos en vaso, listo para disfrutarlo paseando por el paseo marítimo o tomándote tu tiempo con nosotros.",
  },
];

export default function Acai() {
  const scrollToProducts = () => {
    document.getElementById("productos")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="acai" className="bg-[#5B2C83] text-white">
      <div className="grid min-h-screen md:grid-cols-2">

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[500px] md:min-h-screen"
        >
          <img
            src={acaiImage}
            alt="Açaí artesanal de Alma Viva"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Contenido */}
        <div className="flex items-center px-6 py-24 md:px-14 lg:px-20">
          <div className="w-full max-w-xl">

            {/* Cabecera */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/55">
                Nuestro açaí
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl">
                El sabor de Brasil,
                <br />
                hecho al momento.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-7 text-white/70">
                Nuestro producto estrella se prepara de manera totalmente
                artesanal. Elaboramos la base en el momento con açaí, banana y
                guaraná, cuidando cada detalle para conseguir una textura
                cremosa y un sabor que nos representa.
              </p>
            </motion.div>

            {/* Proceso */}
            <div className="mt-14 border-t border-white/15">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="grid grid-cols-[45px_1fr] gap-5 border-b border-white/15 py-7"
                >
                  <span className="text-xs tracking-wider text-white/40">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-white/60">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={scrollToProducts}
              className="mt-10 border-b border-white pb-1 text-sm transition-opacity hover:opacity-60"
            >
              Descubre nuestros productos
            </motion.button>

          </div>
        </div>

      </div>
    </section>
  );
}