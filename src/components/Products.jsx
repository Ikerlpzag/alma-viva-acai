import { motion } from "framer-motion";

const products = [
  {
    name: "Tropical Sunrise",
    description:
      "Mango, maracuyá, piña, plátano y base de agua de coco orgánica.",
    image: "/images/about.png",
  },
  {
    name: "Green Boost",
    description:
      "Espinaca baby, aguacate, manzana verde, jengibre y zumo de limón.",
    image: "/images/about.png",
  },
  {
    name: "Berry Bliss",
    description:
      "Frambuesas, arándanos, fresas de Huelva, plátano y leche de almendra.",
    image: "/images/about.png",
  },
  {
    name: "Mango Paradise",
    description:
      "Mango local, coco tierno, dátiles, vainilla y leche de avena.",
    image: "/images/about.png",
  },
];

export default function Products() {
  return (
    <section
      id="productos"
      className="bg-[#F7F1E8] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Cabecera */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#5B2C83]">
              Nuestra carta
            </p>
          </div>

          <h2 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-[#241C28] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            Elige tu combinación.
          </h2>
        </motion.div>

        {/* Introducción */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-xl text-sm leading-7 text-[#241C28]/60 md:ml-auto md:mr-[8%] md:mt-10 md:text-base"
        >
          Desde nuestras combinaciones favoritas hasta creaciones hechas a tu
          gusto. Descubre todo lo que puedes disfrutar en Alma Viva.
        </motion.p>

        {/* Productos */}
        <div className="mt-20 md:mt-28">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className={`grid gap-8 border-t border-[#241C28]/15 py-10 md:grid-cols-[80px_1fr_1fr] md:gap-10 md:py-14 ${
                index % 2 === 1 ? "md:pl-[8%]" : ""
              }`}
            >
              {/* Número */}
              <span className="text-xs tracking-[0.2em] text-[#5B2C83]">
                0{index + 1}
              </span>

              {/* Imagen */}
              <div className="group overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* Información */}
              <div className="flex flex-col justify-end md:pb-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#5B2C83]/70">
                  {product.category}
                </p>

                <h3 className="mt-4 text-3xl font-medium tracking-tight text-[#241C28] md:text-4xl">
                  {product.name}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#241C28]/60">
                  {product.description}
                </p>

                <span className="mt-7 text-xs uppercase tracking-[0.2em] text-[#241C28]/40">
                  Alma Viva Açaí
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Personalización */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[#241C28]/15 pt-12 md:mt-28 md:flex md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#5B2C83]">
              A tu manera
            </p>

            <h3 className="mt-4 max-w-2xl text-3xl font-medium leading-tight text-[#241C28] md:text-4xl">
              Porque no hay dos combinaciones perfectas iguales.
            </h3>
          </div>

          <p className="mt-6 max-w-sm text-sm leading-7 text-[#241C28]/60 md:mt-0">
            Elige los toppings que más te gustan y crea una combinación hecha
            especialmente para ti.
          </p>
        </motion.div>

      </div>
    </section>
  );
}