import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Inicio", id: "inicio" },
  { name: "Sobre nosotros", id: "sobre" },
  { name: "Açaí", id: "acai" },
  { name: "Productos", id: "productos" },
  { name: "Beneficios", id: "beneficios" },
  { name: "Filosofía", id: "filosofia" },
  { name: "Visítanos", id: "visitanos" },
];

const GLOVO_URL =
  "https://glovoapp.com/es/es/aguadulce/stores/alma-viva-acai-aguadulce";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#F7F1E8]/95 text-[#241C28] backdrop-blur-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="relative z-50 text-left"
          >
            <span className="block text-lg font-medium tracking-[-0.03em]">
              Alma Viva
            </span>

            <span
              className={`block text-[9px] uppercase tracking-[0.3em] transition-colors duration-500 ${
                scrolled || menuOpen
                  ? "text-[#5B2C83]"
                  : "text-white/75"
              }`}
            >
              Açaí
            </span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-[11px] uppercase tracking-[0.16em] transition-opacity duration-300 hover:opacity-60 ${
                  scrolled || menuOpen ? "text-[#241C28]" : "text-white"
                }`}
              >
                {link.name}
              </button>
            ))}

            {/* Glovo */}
            <a
              href={GLOVO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 flex h-11 items-center justify-center border px-5 text-[10px] font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                scrolled || menuOpen
                  ? "border-[#5B2C83] bg-[#5B2C83] text-[#F7F1E8] hover:bg-transparent hover:text-[#5B2C83]"
                  : "border-white bg-white text-[#5B2C83] hover:bg-transparent hover:text-white"
              }`}
            >
               Pedir en Glovo
            </a>
          </div>

          {/* Mobile controls */}
          <div className="relative z-50 flex items-center gap-4 md:hidden">
            {/* Glovo mobile */}
            
            {/* Menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              className={`relative flex h-10 w-10 items-center justify-center border ${
                scrolled || menuOpen
                  ? "border-[#241C28]/20"
                  : "border-white/40"
              }`}
            >
              <div className="relative h-6 w-6 overflow-visible">
                {/* Superior */}
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`absolute left-0 top-1 h-[1.5px] w-6 ${
                    scrolled || menuOpen ? "bg-[#241C28]" : "bg-white"
                  }`}
                />

                {/* Central */}
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute left-0 top-3 h-[1.5px] w-6 ${
                    scrolled || menuOpen ? "bg-[#241C28]" : "bg-white"
                  }`}
                />

                {/* Inferior */}
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`absolute left-0 top-5 h-[1.5px] w-6 ${
                    scrolled || menuOpen ? "bg-[#241C28]" : "bg-white"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#F7F1E8] px-6 pb-10 pt-28 text-[#241C28] md:hidden"
          >
            <div className="flex flex-1 flex-col justify-center">
              {links.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  onClick={() => scrollToSection(link.id)}
                  className="border-b border-[#241C28]/10 py-5 text-left text-3xl font-medium tracking-[-0.03em]"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            <div className=" pt-6">
              <a
                href={GLOVO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center justify-center bg-[#5B2C83] text-xs uppercase tracking-[0.2em] text-[#F7F1E8]"
              >
                Pedir en Glovo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}