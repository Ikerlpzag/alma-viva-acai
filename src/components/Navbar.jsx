import { useEffect, useState } from "react";

const links = [
  { name: "Inicio", id: "inicio" },
  { name: "Sobre nosotros", id: "sobre" },
  { name: "Açaí", id: "acai" },
  { name: "Productos", id: "productos" },
  { name: "Filosofía", id: "filosofia" },
  { name: "Visítanos", id: "visitanos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Bloquear el scroll de la página cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id) => {
    setOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">

      {/* NAVBAR */}
      <nav
        className={`relative z-50 transition-all duration-500 ${
          scrolled && !open
            ? "border-b border-black/5 bg-[#F7F1E8]/95 py-3 backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

          {/* LOGO */}
          <button
            onClick={() => goTo("inicio")}
            className="relative z-50 text-left"
          >
            <span
              className={`block text-[10px] uppercase tracking-[0.35em] transition-colors duration-300 ${
                open
                  ? "text-[#5B2C83]"
                  : scrolled
                    ? "text-[#5B2C83]"
                    : "text-white/80"
              }`}
            >
              Alma Viva
            </span>

            <span
              className={`block text-lg font-medium tracking-[0.18em] transition-colors duration-300 ${
                open
                  ? "text-[#241C28]"
                  : scrolled
                    ? "text-[#241C28]"
                    : "text-white"
              }`}
            >
              AÇAÍ
            </span>
          </button>

          {/* DESKTOP */}
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => goTo(link.id)}
                className={`text-xs transition-colors ${
                  scrolled
                    ? "text-[#241C28]/70 hover:text-[#5B2C83]"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* HAMBURGER / X */}
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className={`relative z-[60] flex h-12 w-12 items-center justify-center lg:hidden ${
              open || scrolled ? "text-[#241C28]" : "text-white"
            }`}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {/* Contenedor con espacio suficiente para la X */}
            <span className="relative block h-7 w-7">

              {/* Línea superior */}
              <span
                className={`absolute left-0 top-1/2 block h-[2px] w-7 origin-center bg-current transition-transform duration-300 ease-in-out ${
                  open
                    ? "rotate-45"
                    : "-translate-y-[9px] rotate-0"
                }`}
              />

              {/* Línea central */}
              <span
                className={`absolute left-0 top-1/2 block h-[2px] w-7 bg-current transition-all duration-200 ease-in-out ${
                  open
                    ? "scale-x-0 opacity-0"
                    : "scale-x-100 opacity-100"
                }`}
              />

              {/* Línea inferior */}
              <span
                className={`absolute left-0 top-1/2 block h-[2px] w-7 origin-center bg-current transition-transform duration-300 ease-in-out ${
                  open
                    ? "-rotate-45"
                    : "translate-y-[9px] rotate-0"
                }`}
              />

            </span>
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL A PANTALLA COMPLETA */}
      <div
        className={`fixed inset-0 z-40 min-h-screen overflow-hidden bg-[#F7F1E8] transition-all duration-500 ease-in-out lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        
        {/* Contenido */}
        <div className="relative flex min-h-screen flex-col px-6 pb-8 pt-28">

          {/* Links */}
          <nav className="flex flex-1 flex-col justify-center">

            {links.map((link, index) => (
              <button
                key={link.id}
                type="button"
                onClick={() => goTo(link.id)}
                className={`group flex w-full items-center justify-between border-b border-[#241C28]/10 py-4 text-left transition-all duration-500 ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{
                  transitionDelay: open
                    ? `${100 + index * 60}ms`
                    : "0ms",
                }}
              >
                <span className="text-3xl font-medium tracking-tight text-[#241C28] transition-colors duration-300 group-hover:text-[#5B2C83] sm:text-4xl">
                  {link.name}
                </span>

                <span className="text-xl text-[#5B2C83]/60 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            ))}

          </nav>

          {/* Información inferior */}
          <div
            className={`flex items-end justify-between pt-8 transition-all duration-500 ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: open ? "500ms" : "0ms",
            }}
          >
            <a
              href="https://www.instagram.com/almavivaacai/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#5B2C83]"
            >
              @almavivaacai
            </a>

            <span className="text-[10px] uppercase tracking-[0.2em] text-[#241C28]/35">
              Aguadulce · Almería
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}