import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Açaí brasileño",
    text: "El ingrediente que define nuestra esencia, con su sabor intenso y característico.",
  },
  {
    number: "02",
    title: "Ingredientes de calidad",
    text: "Combinamos el açaí con fruta, granola, frutos secos y otros ingredientes seleccionados.",
  },
  {
    number: "03",
    title: "Hecho al momento",
    text: "Preparamos cada bowl cuando lo pides para que lo disfrutes fresco y con la textura que buscamos.",
  },
  {
    number: "04",
    title: "A tu manera",
    text: "Elige tus toppings favoritos y crea una combinación que sea realmente tuya.",
  },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="overflow-hidden bg-[#F7F1E8] px-6 py-28 text-[#241C28] md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#5B2C83]">
            Beneficios
          </p>

          <h2 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            Lo bueno también
            <br />
            <span className="text-[#5B2C83]">puede disfrutarse.</span>
          </h2>
        </motion.div>

        {/* Introducción */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 max-w-2xl md:mt-24 md:ml-auto"
        >
          <p className="text-xl font-medium leading-tight md:text-2xl">
            Una forma diferente de disfrutar de ingredientes que nos encantan.
          </p>

          <p className="mt-6 text-sm leading-7 text-[#241C28]/60 md:text-base">
            En Alma Viva cuidamos lo que hay detrás de cada bowl: ingredientes
            seleccionados, preparación al momento y libertad para combinarlo a
            tu manera.
          </p>
        </motion.div>

        {/* Beneficios */}
        <div className="mt-20 border-t border-[#241C28]/15 md:mt-28">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="grid gap-5 border-b border-[#241C28]/15 py-8 md:grid-cols-[0.15fr_0.35fr_1fr] md:items-start md:py-10"
            >
              <span className="text-xs tracking-[0.2em] text-[#5B2C83]">
                {benefit.number}
              </span>

              <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                {benefit.title}
              </h3>

              <p className="max-w-xl text-sm leading-7 text-[#241C28]/60 md:text-base">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
