import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

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

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-[#F7F1E8]/95 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <button
          onClick={() => goTo("inicio")}
          className="text-left"
        >
          <span
            className={`block text-[10px] uppercase tracking-[0.35em] transition-colors ${
                scrolled ? "text-[#5B2C83]" : "text-white/80"
            }`}
            >
            Alma Viva
          </span>

          <span
            className={`block text-lg font-medium tracking-[0.18em] transition-colors ${
              scrolled ? "text-[#241C28]" : "text-white"
            }`}
          >
            AÇAÍ
          </span>
        </button>

        {/* Desktop */}
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

        {/* Mobile */}
        <button
          onClick={() => setOpen((current) => !current)}
          className={`lg:hidden ${
            scrolled ? "text-[#241C28]" : "text-white"
          }`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? (
            <HiOutlineX size={27} />
          ) : (
            <HiOutlineMenu size={27} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-[#F7F1E8] lg:hidden">
          <div className="flex flex-col px-6 py-7">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => goTo(link.id)}
                className="border-b border-black/5 py-4 text-left text-base text-[#241C28]"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}