import { motion } from "framer-motion";
import acaiImage from "../assets/images/about.png";

const steps = [
  {
    number: "01",
    title: "Base artesanal",
    description:
      "Preparamos nuestra base de açaí al momento, combinando açaí, banana y guaraná para conseguir una textura cremosa y un sabor único.",
  },
  {
    number: "02",
    title: "Tú eliges",
    description:
      "Personaliza tu açaí escogiendo los toppings que más te apetezcan y crea una combinación completamente a tu gusto.",
  },
  {
    number: "03",
    title: "Disfruta el momento",
    description:
      "Un producto preparado para ti, en un espacio pensado para desconectar y disfrutar sin prisas.",
  },
];

export default function Acai() {
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
        <div className="flex items-center px-6 py-20 md:px-16 lg:px-24">
          <div className="max-w-xl">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/60">
                Nuestro açaí
              </p>

              <h2 className="text-4xl leading-tight md:text-6xl">
                El sabor de Brasil,
                <br />
                hecho al momento.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-7 text-white/75">
                Nuestro producto estrella nace de una elaboración totalmente
                artesanal. Preparamos la base en el momento con açaí, banana y
                guaraná, cuidando cada detalle para conseguir la textura y el
                sabor que buscamos.
              </p>
            </motion.div>

            {/* Pasos */}
            <div className="mt-14 border-t border-white/20">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="grid grid-cols-[50px_1fr] gap-5 border-b border-white/20 py-7"
                >
                  <span className="text-sm text-white/50">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-lg">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() =>
                document.getElementById("productos")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="mt-10 border-b border-white pb-1 text-sm transition-opacity hover:opacity-60"
            >
              Ver nuestros productos
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}