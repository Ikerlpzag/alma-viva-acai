import { motion } from "framer-motion";

const products = [
  {
    name: "Açaí Clásico",
    description:
      "Nuestra base artesanal de açaí preparada al momento y acompañada de tus toppings favoritos.",
    image: "images/about.png",
  },
  {
    name: "Açaí Tropical",
    description:
      "Una combinación fresca y tropical para disfrutar del sabor del açaí de una forma diferente.",
    image: "images/about.png",
  },
  {
    name: "Açaí Berry",
    description:
      "Açaí acompañado de frutos rojos para quienes buscan una combinación intensa y fresca.",
    image: "images/about.png",
  },
  {
    name: "Crea el tuyo",
    description:
      "Elige tus toppings y crea una combinación completamente personalizada a tu gusto.",
    image: "images/about.png",
  },
];

export default function Products() {
  const scrollToVisit = () => {
    document.getElementById("visitanos")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="productos"
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
            Productos
          </p>

          <h2 className="mt-5 text-4xl font-medium leading-[1.08] tracking-tight text-[#241C28] md:text-6xl">
            Sabor que se adapta
            <br />
            a ti.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#241C28]/65">
            Descubre nuestra selección de açaí y crea tu combinación favorita
            eligiendo los toppings que más te gustan.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#E9E0D5]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="pt-5">
                <h3 className="text-xl font-medium text-[#241C28]">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#241C28]/60">
                  {product.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <button
            onClick={scrollToVisit}
            className="border-b border-[#5B2C83] pb-1 text-sm text-[#5B2C83] transition-colors hover:border-[#241C28] hover:text-[#241C28]"
          >
            Visítanos y descubre la carta
          </button>
        </motion.div>

      </div>
    </section>
  );
}