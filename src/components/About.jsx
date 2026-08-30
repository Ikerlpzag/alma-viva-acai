import { motion } from "framer-motion";
import aboutImage from "/images/about.png";

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-[#F7F1E8] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden">
              <img
                src={aboutImage}
                alt="Alma Viva Açaí en Aguadulce"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#5B2C83]">
              Sobre nosotros
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.08] tracking-tight text-[#241C28] md:text-6xl">
              Un lugar para
              <br />
              conectar contigo.
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-[#241C28]/70">
              <p>
                Alma Viva Açaí nace con una idea sencilla: acercar a Aguadulce
                una propuesta de comida saludable y de alta calidad, sin
                renunciar al sabor.
              </p>

              <p>
                Nuestro producto estrella es el açaí. Elaboramos nuestra base
                de manera totalmente artesanal en el momento, combinando
                banana y guaraná para conseguir una textura cremosa y un sabor
                único.
              </p>

              <p>
                Además, puedes elegir los toppings que quieres añadir y crear
                una combinación personalizada, hecha exactamente a tu gusto.
              </p>

              <p>
                Todo esto en un espacio de estética limpia y cuidada, situado
                en el Paseo Marítimo de Aguadulce, donde queremos que puedas
                desconectar del mundo exterior y conectar contigo mismo.
              </p>
            </div>

            <button
              onClick={() =>
                document.getElementById("acai")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="mt-9 border-b border-[#5B2C83] pb-1 text-sm text-[#5B2C83] transition-colors hover:border-[#241C28] hover:text-[#241C28]"
            >
              Descubre nuestro açaí
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}