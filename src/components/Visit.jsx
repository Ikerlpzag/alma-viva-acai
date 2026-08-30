import { motion } from "framer-motion";

export default function Visit() {
  return (
    <section
      id="visitanos"
      className="bg-[#241C28] px-6 py-28 text-[#F7F1E8] md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Titular */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#D9C3E8]">
            Visítanos
          </p>

          <h2 className="mt-6 max-w-6xl text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[7rem]">
            Tu momento.
            <br />
            <span className="text-[#B994D1]">
              Frente al mar.
            </span>
          </h2>
        </motion.div>

        {/* Mapa */}
        <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mt-16 md:mt-24"
        >
        <div className="relative h-[420px] overflow-hidden sm:h-[500px] md:h-[600px]">
            <iframe
            title="Ubicación de Alma Viva Açaí"
            src="https://www.google.com/maps?q=Paseo%20Marítimo%20de%20Aguadulce%2C%20Almería&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            />
        </div>
        </motion.div>

        {/* Información */}
        <div className="mt-16 grid border-t border-white/15 md:mt-20 md:grid-cols-3">

          {/* Dirección */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-white/40">
              Dirección
            </span>

            <p className="mt-6 max-w-xs text-lg leading-7">
              Paseo Marítimo de Aguadulce
              <br />
              Almería, España
            </p>
          </motion.div>

          {/* Horario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 md:py-10"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-white/40">
              Horario
            </span>

            <p className="mt-6 text-lg leading-7">
              Lunes a domingo
              <br />
              10:00 — 21:00
            </p>
          </motion.div>

          {/* Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-8 md:px-8 md:py-10 md:last:pr-0"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-white/40">
              Instagram
            </span>

            <a
              href="https://www.instagram.com/almavivaacai/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 block w-fit border-b border-white/40 pb-1 text-lg transition-opacity hover:opacity-60"
            >
              @almavivaacai
            </a>
          </motion.div>

        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 border-t border-white/15 pt-10 md:mt-28 md:flex md:items-center md:justify-between"
        >
          <p className="max-w-lg text-xl leading-tight text-white/80 md:text-2xl">
            Desconecta del mundo exterior.
            <br />
            Conecta contigo.
          </p>

          <a
            href="https://www.instagram.com/almavivaacai/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block border-b border-[#D9C3E8] pb-1 text-sm text-[#D9C3E8] transition-opacity hover:opacity-60 md:mt-0"
          >
            Síguenos en Instagram →
          </a>
        </motion.div>

      </div>
    </section>
  );
}