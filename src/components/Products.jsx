import { motion } from "framer-motion";

const bowls = [
  {
    name: "Typical Bowl",
    description:
      "Açaí, granola, fresa, crema de cacahuete y banana.",
    price: "9,90 €",
    image: "/images/typical.webp",
  },
  {
    name: "Fresh Bowl",
    description:
      "Açaí, copos de avena, miel, piña y kiwi.",
    price: "9,90 €",
    image: "/images/fresh.webp",
  },
  {
    name: "Brasileiro Bowl",
    description:
      "Açaí, leche en polvo, leche condensada, fresa y kiwi.",
    price: "9,90 €",
    image: "/images/brasileiro.webp",
  },
  {
    name: "Goku Bowl",
    description:
      "Açaí, granola, mango, pudding de chía y bayas de goji.",
    price: "9,90 €",
    image: "/images/goku.webp",
  },
];

const sizes = [
  {
    size: "S",
    ml: "350 ml",
    price: "7,90 €",
    ingredients: "4 ingredientes",
  },
  {
    size: "M",
    ml: "470 ml",
    price: "9,90 €",
    ingredients: "5 ingredientes",
  },
  {
    size: "L",
    ml: "590 ml",
    price: "11,90 €",
    ingredients: "6 ingredientes",
  },
];

const fruits = [
  "Banana",
  "Fresa",
  "Mango",
  "Kiwi",
  "Arándanos",
  "Piña",
  "Uva",
];

const creams = [
  "Cacao",
  "Pudding de chía",
  "Cacahuete",
  "Pistacho",
  "Miel",
  "Leche condensada",
  "Leche condensada SL",
];

const toppings = [
  "Granola",
  "Granola SG",
  "Copos de avena",
  "Bayas de goji",
  "Pistacho",
  "Coco rallado",
  "Coco laminado",
  "Almendra laminada",
  "Almendra triturada",
  "Cacahuete",
  "Anacardo",
  "Leche en polvo",
  "Semillas de chía",
  "Semillas de lino",
  "Gotas de chocolate",
  "Semillas de cáñamo",
];

const smoothies = [
  {
    name: "Carrot",
    description: "Zanahoria, manzana, pera y jengibre.",
    base: "Zumo de manzana",
  },
  {
    name: "Berry",
    description: "Plátano, arándanos, mango y açaí.",
    base: "Leche de soja",
  },
  {
    name: "Coco",
    description: "Plátano, piña y coco.",
    base: "Leche de soja",
  },
  {
    name: "Tropical",
    description: "Mango, limón, piña y fruta de la pasión.",
    base: "Zumo de manzana",
  },
  {
    name: "Green",
    description: "Piña, espinacas, pepinillo y col.",
    base: "Zumo de manzana",
  },
  {
    name: "Spirulina",
    description:
      "Espirulina, plátano, mango, melón, piña y coco.",
    base: "Leche de soja",
  },
  {
    name: "Pitaya",
    description: "Pitaya, mango y fresa.",
    base: "Zumo de manzana",
  },
  {
    name: "Kiwi",
    description: "Mango, melón, piña y kiwi.",
    base: "Zumo de manzana",
  },
];

export default function Products() {
  return (
    <section
      id="productos"
      className="bg-[#F3EDE7] text-[#24102F]"
    >
      <div className="mx-auto max-w-[1800px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        {/* HEADER */}
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#5B2C83]">
            Nuestra carta
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.8] tracking-[-0.075em]"
          >
            Hecho para
            <br />
            disfrutar.
          </motion.h2>
        </div>

        {/* BOWLS */}
        <div className="mt-24 md:mt-32">
          <div className="mb-8 flex items-end justify-between border-b border-[#24102F]/20 pb-5">
            <h3 className="text-2xl font-medium tracking-[-0.04em] md:text-3xl">
              Nuestras sugerencias
            </h3>

            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#24102F]/45">
              4 bowls exclusivos
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bowls.map((bowl, index) => (
              <motion.article
                key={bowl.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="flex flex-col"
              >
                <div className="group aspect-[0.82] overflow-hidden">
                  <img
                    src={bowl.image}
                    alt={bowl.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col border-b border-[#24102F]/20 py-5">
                  <h4 className="text-xl font-medium tracking-[-0.03em]">
                    {bowl.name}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[#24102F]/60">
                    {bowl.description}
                  </p>

                  <div className="mt-6 border-t border-[#24102F]/10 pt-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#24102F]/45">
                          S
                        </p>
                        <p className="mt-1 text-sm font-medium">7,90€</p>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#24102F]/45">
                          M
                        </p>
                        <p className="mt-1 text-sm font-medium">9,90€</p>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#24102F]/45">
                          L
                        </p>
                        <p className="mt-1 text-sm font-medium">11,90€</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        {/* CREA TU BOWL */}
        <div className="mt-28 border-t border-[#24102F]/20 pt-10 md:mt-36">
          <div className="max-w-3xl">
            <h3 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Crea tu bowl
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#24102F]/55 md:text-base">
              Elige el tamaño que más te apetezca y personalízalo con tus
              ingredientes favoritos.
            </p>
          </div>

          {/* Tamaños */}
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {sizes.map((item) => (
              <div
                key={item.size}
                className="border border-[#24102F]/15 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-medium">{item.size}</span>

                  <span className="text-xs uppercase tracking-[0.15em] text-[#24102F]/45">
                    {item.ml}
                  </span>
                </div>

                <div className="mt-8 border-t border-[#24102F]/10 pt-5">
                  <p className="text-2xl font-medium">{item.price}</p>

                  <p className="mt-1 text-sm text-[#5B2C83]">
                    {item.ingredients}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Ingredientes */}
          <div className="mt-20">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.35em] text-[#5B2C83]">
                Ingredientes
              </p>

              <h4 className="mt-3 text-3xl font-medium tracking-[-0.03em]">
                Elige tus favoritos
              </h4>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">

              {/* Frutas */}
              <div className="border border-[#24102F]/10 p-6">

                <h5 className="mt-4 text-lg font-medium">Frutas</h5>

                <div className="mt-5 flex flex-wrap gap-2">
                  {fruits.map((item) => (
                    <span
                      key={item}
                      className="bg-[#ECE4D9] px-3 py-2 text-xs text-[#24102F]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cremas */}
              <div className="border border-[#24102F]/10 p-6">

                <h5 className="mt-4 text-lg font-medium">Cremas</h5>

                <div className="mt-5 flex flex-wrap gap-2">
                  {creams.map((item) => (
                    <span
                      key={item}
                      className="bg-[#ECE4D9] px-3 py-2 text-xs text-[#24102F]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Toppings */}
              <div className="border border-[#24102F]/10 p-6">

                <h5 className="mt-4 text-lg font-medium">Toppings secos</h5>

                <div className="mt-5 flex flex-wrap gap-2">
                  {toppings.map((item) => (
                    <span
                      key={item}
                      className="bg-[#ECE4D9] px-3 py-2 text-xs text-[#24102F]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* SMOOTHIES */}
        <div className="mt-28 border-t border-[#24102F]/20 pt-10 md:mt-36">
          <div className="max-w-3xl">
            <h3 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              Smoothies naturales
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#24102F]/55 md:text-base">
              Elaborados con fruta natural y preparados con leche de soja o
              zumo de manzana.
            </p>
          </div>

          <div className="mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {smoothies.map((smoothie) => (
              <div
                key={smoothie.name}
                className="border-b border-[#24102F]/15 pb-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-medium">
                      {smoothie.name}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[#24102F]/55">
                      {smoothie.description}
                    </p>

                    <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[#5B2C83]">
                      {smoothie.base}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-medium">5,90 €</p>
                    <p className="mt-1 text-xs text-[#24102F]/45">
                      6,90 € G
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-[#24102F]/20 pt-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#5B2C83]">
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
              className="flex h-11 items-center justify-center bg-[#5B2C83] px-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#F7F1E8] transition-all duration-300 hover:bg-transparent hover:text-[#5B2C83] border border-[#5B2C83]"
            >
              Pedir en Glovo
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}