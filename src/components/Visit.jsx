import { motion } from "framer-motion";

const INSTAGRAM_URL = "https://www.instagram.com/almavivaacai/";
const GLOVO_URL =
  "https://glovoapp.com/es/es/aguadulce/stores/alma-viva-acai-aguadulce";

export default function Visit() {
  return (
    <section
      id="visitanos"
      className="bg-[#241C28] px-6 py-28 text-[#F7F1E8] md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#D9C3E8]">
            Visítanos
          </p>

          <h2 className="mt-6 max-w-6xl text-5xl font-medium leading-[0.98] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            Tu momento.
            <br />
            <span className="text-[#D9C3E8]">Frente al mar.</span>
          </h2>
        </motion.div>

        {/* Location */}
        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-[1.15fr_0.85fr] md:items-stretch md:gap-20">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="min-h-[420px] overflow-hidden md:min-h-[560px]"
          >
            <iframe
              title="Ubicación de Alma Viva Açaí"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.006579004665!2d-2.5698314237297906!3d36.81265236699688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7071e42ad8a18f%3A0x8d1682a34e45719b!2zQUxNQSBWSVZBIEHDh0HDjQ!5e1!3m2!1ses!2ses!4v1788881784997!5m2!1ses!2ses"
              className="h-full min-h-[420px] w-full border-0 md:min-h-[560px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="border-t border-[#F7F1E8]/15 py-7">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9C3E8]">
                  Dirección
                </p>

                <p className="mt-4 text-xl font-medium leading-tight md:text-2xl">
                  Paseo Marítimo 23
                  <br />
                  Aguadulce, Almería
                </p>
              </div>

              <div className="border-t border-[#F7F1E8]/15 py-7">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9C3E8]">
                  Horario
                </p>

                <p className="mt-4 text-xl font-medium leading-tight md:text-2xl">
                  Lunes a viernes
                  <br />
                  16:00 — 23:30
                </p>
                <p className="mt-4 text-xl font-medium leading-tight md:text-2xl">
                  Sábados y domingos
                  <br />
                  10:00 — 14:00
                  <br />
                  16:00 — 00:00
                </p>
              </div>

              <div className="border-y border-[#F7F1E8]/15 py-7">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#D9C3E8]">
                  Instagram
                </p>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-xl font-medium transition-colors duration-300 hover:text-[#D9C3E8] md:text-2xl"
                >
                  @almavivaacai
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-10 flex gap-3">
              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-12 w-12 items-center justify-center border border-[#F7F1E8]/20 transition-all duration-300 hover:border-[#D9C3E8] hover:bg-[#D9C3E8]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[21px] w-[21px] transition-all duration-300 group-hover:brightness-0"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="#F7F1E8"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="#F7F1E8"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="17.3"
                    cy="6.7"
                    r="1"
                    fill="#F7F1E8"
                  />
                </svg>
              </a>

              {/* Glovo */}
              <a
                href={GLOVO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pedir en Glovo"
                className="group flex h-12 w-12 items-center justify-center border border-[#F7F1E8]/20 transition-all duration-300 hover:border-[#D9C3E8] hover:bg-[#D9C3E8]"
              >
                <svg
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F7F1E8"
                  className="h-[23px] w-[23px] transition-all duration-300 group-hover:brightness-0"
                >
                  <path
                    d="M0 0h192v192H0z"
                    style={{ fill: "none" }}
                  />

                  <path
                    d="m96 146 36.93-54.02C153.23 62.29 131.97 22 96 22h0c-35.97 0-57.23 40.29-36.93 69.98L96 146Z"
                    style={{
                      stroke: "#F7F1E8",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 12,
                      fill: "none",
                    }}
                  />

                  <circle
                    cx="96"
                    cy="168.5"
                    r="7.5"
                    fill="#F7F1E8"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-28 border-t border-[#F7F1E8]/15 pt-12 md:mt-36 md:pt-16"
        >
          <p className="max-w-5xl text-4xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl">
            Un bowl, algo fresco
            <br />
            y el mar delante.
          </p>

          <p className="mt-6 text-sm text-[#F7F1E8]/50 md:text-base">
            A veces no hace falta mucho más.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
