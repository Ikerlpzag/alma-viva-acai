import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Ingredientes reales",
    text: "Seleccionamos ingredientes de calidad, combinando productos locales con nuestro açaí brasileño.",
  },
  {
    number: "02",
    title: "Elaboración honesta",
    text: "Preparamos cada producto cuidando el proceso y respetando el sabor de cada ingrediente.",
  },
  {
    number: "03",
    title: "Hecho con amor",
    text: "Ponemos atención en cada detalle para que venir a Alma Viva sea mucho más que simplemente comer.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="overflow-hidden bg-[#F7F1E8] px-6 py-28 text-[#241C28] md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#5B2C83]">
            Nuestra filosofía
          </p>

          <h2 className="mt-6 max-w-6xl text-5xl font-medium leading-[0.98] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            Hecho con amor.
            <br />
            <span className="text-[#5B2C83]">Ingredientes reales.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-[0.7fr_1.3fr] md:items-start md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl font-medium leading-tight md:text-3xl">
              Una forma más sencilla de disfrutar de algo bueno.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-sm leading-7 text-[#241C28]/65 md:text-base">
              En Alma Viva creemos que las cosas buenas empiezan por lo
              esencial: ingredientes de calidad, preparación cuidada y atención
              a cada detalle.
            </p>

            <p className="mt-6 text-sm leading-7 text-[#241C28]/65 md:text-base">
              Nos gusta hacer las cosas sin prisas y ofrecer productos que
              puedas disfrutar sabiendo qué hay detrás de cada uno.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 border-t border-[#241C28]/15 md:mt-28">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="grid gap-5 border-b border-[#241C28]/15 py-8 md:grid-cols-[0.15fr_0.35fr_1fr] md:items-start md:py-10"
            >
              <span className="text-xs tracking-[0.2em] text-[#5B2C83]">
                {value.number}
              </span>

              <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                {value.title}
              </h3>

              <p className="max-w-xl text-sm leading-7 text-[#241C28]/60 md:text-base">
                {value.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
