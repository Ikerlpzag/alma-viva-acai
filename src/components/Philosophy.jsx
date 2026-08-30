import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Ingredientes reales",
    text: "Seleccionamos frutas locales del poniente de Almería e importamos nuestro açaí brasileño.",
  },
  {
    number: "02",
    title: "Elaboración honesta",
    text: "Preparamos cada producto al momento, sin atajos y cuidando cada detalle.",
  },
  {
    number: "03",
    title: "Hecho con amor",
    text: "Creemos en tomarnos el tiempo necesario para conseguir una experiencia que disfrutes.",
  },
];

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="bg-[#F7F1E8] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#5B2C83]">
            Nuestra filosofía
          </p>

          <h2 className="mt-6 text-5xl font-medium leading-[0.96] tracking-[-0.04em] text-[#241C28] sm:text-6xl md:text-7xl lg:text-[7rem]">
            Hecho con amor.
            <br />
            <span className="text-[#5B2C83]">
              Ingredientes reales.
            </span>
          </h2>
        </motion.div>

        {/* Frase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 ml-auto max-w-xl md:mt-24 md:mr-[8%]"
        >
          <p className="text-2xl font-medium leading-tight text-[#241C28] md:text-3xl">
            Una forma más sencilla de disfrutar de algo bueno.
          </p>

          <p className="mt-6 text-sm leading-7 text-[#241C28]/60 md:text-base">
            En Alma Viva creemos que la calidad está en los pequeños detalles:
            buenos ingredientes, preparación cuidada y tiempo para hacer las
            cosas bien.
          </p>
        </motion.div>

        {/* Valores */}
        <div className="mt-20 border-t border-[#241C28]/15 md:mt-28">
          <div className="grid md:grid-cols-3">

            {values.map((value, index) => (
              <motion.article
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group border-b border-[#241C28]/15 py-9 md:border-b-0 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-[0.2em] text-[#5B2C83]">
                    {value.number}
                  </span>

                  <span className="text-xl text-[#5B2C83]/40 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-14 text-2xl font-medium tracking-tight text-[#241C28] md:text-3xl">
                  {value.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-[#241C28]/60">
                  {value.text}
                </p>
              </motion.article>
            ))}

          </div>
        </div>

        {/* Cierre */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-[#241C28]/15 pt-8 md:mt-28"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#241C28]/35">
            Alma Viva Açaí · Aguadulce
          </p>
        </motion.div>

      </div>
    </section>
  );
}