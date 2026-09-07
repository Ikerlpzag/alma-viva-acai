import { motion } from "framer-motion";
import aboutImage from "/images/about.png";

export default function About() {
  return (
    <section
      id="sobre"
      className="overflow-hidden bg-[#F7F1E8] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#5B2C83]">
            Sobre nosotros
          </p>

          <h2 className="mt-6 max-w-6xl text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-[#241C28] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            Brasil en esencia.
            <br />
            <span className="text-[#5B2C83]">
              Mediterráneo en alma.
            </span>
          </h2>
        </motion.div>

        {/* Imagen + texto */}
        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-20">

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={aboutImage}
                alt="Alma Viva Açaí en Aguadulce"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
              />

              <div className="absolute bottom-6 left-6">
                <span className="bg-[#F7F1E8]/90 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#5B2C83] backdrop-blur-sm">
                  Aguadulce · Almería
                </span>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="pb-2 md:pb-10"
          >
            <p className="text-2xl font-medium leading-tight text-[#241C28] md:text-3xl">
              Un lugar para disfrutar, desconectar y conectar contigo mismo.
            </p>

            <div className="mt-8 space-y-5 text-sm leading-7 text-[#241C28]/65 md:text-base">
              <p>
                Alma Viva Açaí nace en Aguadulce con una idea muy sencilla:
                disfrutar de una alimentación saludable sin renunciar al
                sabor.
              </p>

              <p>
                Cuidamos cada detalle, desde la selección de los ingredientes
                hasta la preparación de cada producto, para ofrecerte una
                experiencia fresca, natural y hecha al momento.
              </p>

              <p>
                Y porque cada persona tiene sus propios gustos, tú decides
                cómo terminarlo. Elige tus toppings favoritos y crea una
                combinación hecha para ti.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-10 bg-[#5B2C83]" />

              <span className="text-xs uppercase tracking-[0.25em] text-[#241C28]/45">
                Hecho en Aguadulce
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
