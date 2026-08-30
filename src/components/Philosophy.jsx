import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Ingredientes reales",
    text: "Frutas, açaí y toppings seleccionados para que cada combinación tenga su propio sabor.",
  },
  {
    number: "02",
    title: "Elaboración honesta",
    text: "Preparamos nuestra base al momento, cuidando el proceso desde el primer ingrediente.",
  },
  {
    number: "03",
    title: "Hecho con amor",
    text: "Porque creemos que la diferencia está en cuidar cada pequeño detalle.",
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#5B2C83]">
              Nuestra filosofía
            </p>
          </div>

          <h2 className="max-w-4xl text-4xl font-medium leading-[1.03] tracking-tight text-[#241C28] sm:text-5xl md:text-6xl lg:text-7xl">
            Lo sencillo, cuando está bien hecho,
            <span className="text-[#5B2C83]"> se nota.</span>
          </h2>
        </motion.div>

        {/* Imagen protagonista */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-20"
        >
          <div className="relative h-[420px] overflow-hidden sm:h-[520px] md:h-[620px]">
            <img
              src="/images/hero.png"
              alt="Alma Viva Açaí"
              loading="lazy"
              className="h-full w-full object-cover"
            />

            {/* Texto sobre la imagen */}
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 md:p-14">
              <p className="max-w-xl text-2xl leading-tight text-white sm:text-3xl md:text-4xl">
                Una forma de disfrutar de lo que comes,
                <br className="hidden sm:block" />
                sin complicaciones.
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Tres pilares */}
        <div className="mt-16 grid border-t border-[#241C28]/15 md:mt-20 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.article
              key={value.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group border-b border-[#241C28]/15 py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs tracking-[0.2em] text-[#5B2C83]">
                  {value.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-[#5B2C83] opacity-40 transition-transform duration-500 group-hover:scale-[2]" />
              </div>

              <h3 className="mt-10 text-2xl font-medium text-[#241C28] md:text-3xl">
                {value.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#241C28]/60">
                {value.text}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}