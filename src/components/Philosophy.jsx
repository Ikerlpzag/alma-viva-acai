import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Ingredientes reales",
    description:
      "Seleccionamos frutas locales del poniente de Almería e importamos nuestro açaí brasileño.",
  },
  {
    number: "02",
    title: "Elaboración honesta",
    description:
      "Preparamos nuestros productos al momento, cuidando cada ingrediente y cada detalle.",
  },
  {
    number: "03",
    title: "Hecho con amor",
    description:
      "Creemos en tomarnos el tiempo necesario para conseguir una experiencia que puedas disfrutar.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="bg-[#F7F1E8] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#5B2C83]">
            Filosofía
          </p>

          <h2 className="mt-5 text-4xl leading-tight text-[#241C28] md:text-6xl">
            Hecho con amor e
            <br />
            ingredientes reales.
          </h2>
        </motion.div>

        {/* Valores */}
        <div className="mt-20 grid border-t border-[#241C28]/15 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="border-b border-[#241C28]/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <span className="text-sm text-[#5B2C83]/60">
                {value.number}
              </span>

              <h3 className="mt-8 text-2xl text-[#241C28]">
                {value.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#241C28]/60">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}