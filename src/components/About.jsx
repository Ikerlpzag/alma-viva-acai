import { motion } from "framer-motion";
import aboutImage from "../assets/images/about.png";

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-[#F7F1E8] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <img
              src={aboutImage}
              alt="Alma Viva Açaí en Aguadulce"
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#5B2C83]">
              Sobre nosotros
            </p>

            <h2 className="max-w-xl text-4xl leading-tight text-[#241C28] md:text-5xl">
              Salud, calidad y sabor bajo el sol de Almería.
            </h2>

            <div className="mt-7 max-w-xl space-y-5 text-base leading-7 text-[#241C28]/70">
              <p>
                Alma Viva Açaí nace para ofrecer en Aguadulce una forma
                diferente de disfrutar de la comida saludable: productos de
                alta calidad, elaborados con mimo y pensados para disfrutar
                sin prisas.
              </p>

              <p>
                Nuestro producto estrella es el açaí. Preparamos nuestra base
                de manera artesanal en el momento, combinando plátano y
                guaraná para conseguir una textura cremosa y un sabor único.
              </p>

              <p>
                Tú eliges cómo hacerlo tuyo. Añade tus toppings favoritos y
                crea una combinación a tu medida.
              </p>

              <p>
                Todo esto en un espacio limpio y cuidado, frente al mar, donde
                queremos que puedas desconectar del mundo exterior y conectar
                contigo mismo.
              </p>
            </div>

            <button
              onClick={() =>
                document.getElementById("acai")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="mt-8 inline-flex border-b border-[#5B2C83] pb-1 text-sm text-[#5B2C83] transition hover:border-[#241C28] hover:text-[#241C28]"
            >
              Descubre nuestro açaí
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}