import { motion } from "framer-motion";

const bowls = [
  {
    name: "Typical Bowl",
    description: "Açaí, granola, banana, fresa y crema de cacahuete.",
    price: "9,90 €",
    image: "/images/typical.webp",
  },
  {
    name: "Fresh Bowl",
    description: "Açaí, granola, banana, fresa y fruta fresca.",
    price: "9,90 €",
    image: "/images/fresh.webp",
  },
  {
    name: "Brasileiro Bowl",
    description: "Açaí con una combinación inspirada en su origen brasileño.",
    price: "9,90 €",
    image: "/images/brasileiro.webp",
  },
  {
    name: "Goku Bowl",
    description: "Açaí, fruta fresca y una combinación llena de energía.",
    price: "9,90 €",
    image: "/images/goku.webp",
  },
];

const sizes = [
  ["S", "350 ml", "9,90 €"],
  ["M", "470 ml", "11,90 €"],
  ["L", "590 ml", "13,90 €"],
];

const smoothies = [
  {
    name: "Carrot",
    description: "Zanahoria, manzana, pera y jengibre.",
    price: "7,90 €",
  },
  {
    name: "Berry",
    description: "Plátano, arándanos, mango y açaí.",
    price: "7,90 €",
  },
  {
    name: "Tropical",
    description: "Mango, limón, piña y fruta de la pasión.",
    price: "7,90 €",
  },
  {
    name: "Coco",
    description: "Plátano, piña y coco.",
    price: "7,90 €",
  },
];

export default function Products() {
  return (
    <section
      id="productos"
      className="bg-[#F3EDE7] text-[#24102F]"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="max-w-5xl">
          <p className="eyebrow text-[#5F2D91]">
            Nuestra carta
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.8] tracking-[-0.075em]"
          >
            Hecho para
            <br />
            disfrutar.
          </motion.h2>
        </div>

        <div className="mt-24 md:mt-32">
          <div className="mb-8 flex items-end justify-between border-b border-[#24102F]/20 pb-5">
            <h3 className="text-2xl font-medium tracking-[-0.04em] md:text-3xl">
              Açaí bowls
            </h3>

            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#24102F]/45">
              Nuestras sugerencias
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {bowls.map((bowl, index) => (
              <motion.article
                key={bowl.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="group relative aspect-[0.82] overflow-hidden">
                  <img
                    src={bowl.image}
                    alt={bowl.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </div>

                <div className="flex items-start justify-between gap-5 border-b border-[#24102F]/20 py-5">
                  <div>
                    <h4 className="text-xl font-medium tracking-[-0.03em]">
                      {bowl.name}
                    </h4>

                    <p className="mt-2 max-w-[230px] text-sm leading-6 text-[#24102F]/55">
                      {bowl.description}
                    </p>
                  </div>

                  <span className="shrink-0 text-sm">
                    {bowl.price}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-16 border-t border-[#24102F]/20 pt-8 md:mt-32 lg:grid-cols-2 lg:gap-24">
          <div>
            <h3 className="text-2xl font-medium tracking-[-0.04em] md:text-3xl">
              Crea tu bowl
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#24102F]/55">
              Elige el tamaño que más te apetezca y crea tu combinación.
            </p>

            <div className="mt-10">
              {sizes.map(([size, ml, price]) => (
                <div
                  key={size}
                  className="flex items-center justify-between border-t border-[#24102F]/15 py-5"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-2xl font-medium">{size}</span>
                    <span className="text-sm text-[#24102F]/50">
                      {ml}
                    </span>
                  </div>

                  <span className="text-sm">{price}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium tracking-[-0.04em] md:text-3xl">
              Smoothies
            </h3>

            <div className="mt-10">
              {smoothies.map((smoothie) => (
                <div
                  key={smoothie.name}
                  className="border-t border-[#24102F]/15 py-5"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h4 className="text-lg font-medium">
                        {smoothie.name}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-[#24102F]/55">
                        {smoothie.description}
                      </p>
                    </div>

                    <span className="shrink-0 text-sm">
                      {smoothie.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-8 border-t border-[#24102F]/20 pt-8 md:mt-32 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-[#5F2D91]">
              ¿Te apetece?
            </p>

            <p className="mt-5 max-w-lg text-2xl leading-tight tracking-[-0.04em] md:text-3xl">
              Pide tu bowl y disfruta de Alma Viva donde quieras.
            </p>
          </div>

          <a
            href="https://glovoapp.com/es/es/aguadulce/stores/alma-viva-acai-aguadulce"
            target="_blank"
            rel="noreferrer"
            className="border-b border-[#24102F] pb-2 text-[0.65rem] uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
          >
            Pedir en Glovo
          </a>
        </div>
      </div>
    </section>
  );
}