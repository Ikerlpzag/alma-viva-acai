import { motion } from "framer-motion";
import { FiInstagram, FiMapPin, FiClock } from "react-icons/fi";

export default function Visit() {
  return (
    <section
      id="visitanos"
      className="bg-[#241C28] text-white"
    >
      <div className="grid min-h-[650px] md:grid-cols-2">

        {/* Mapa */}
        <div className="relative min-h-[450px] bg-[#DDD6CC]">
          <iframe
            title="Ubicación de Alma Viva Açaí"
            src="https://www.google.com/maps?q=Paseo%20Marítimo%20de%20Aguadulce%2C%20Almería&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
          />
        </div>

        {/* Información */}
        <div className="flex items-center px-6 py-20 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-lg"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              Visítanos
            </p>

            <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
              Ven a vernos.
            </h2>

            <p className="mt-6 text-base leading-7 text-white/65">
              Un lugar para disfrutar de algo rico, desconectar y conectar
              contigo mismo frente al mar de Aguadulce.
            </p>

            <div className="mt-12 space-y-8">

              <div className="flex gap-5">
                <FiMapPin
                  size={20}
                  className="mt-1 shrink-0 text-white/60"
                />

                <div>
                  <p className="text-sm text-white/45">
                    Dirección
                  </p>
                  <p className="mt-1 leading-6">
                    Paseo Marítimo de Aguadulce
                    <br />
                    Almería, España
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <FiClock
                  size={20}
                  className="mt-1 shrink-0 text-white/60"
                />

                <div>
                  <p className="text-sm text-white/45">
                    Horario
                  </p>
                  <p className="mt-1">
                    Lunes a domingo · 10:00 – 21:00
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <FiInstagram
                  size={20}
                  className="mt-1 shrink-0 text-white/60"
                />

                <div>
                  <p className="text-sm text-white/45">
                    Instagram
                  </p>

                  <a
                    href="https://www.instagram.com/almavivaacai/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block border-b border-white/40 pb-1 transition hover:border-white"
                  >
                    @almavivaacai
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}