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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F1E8]/95 backdrop-blur border-b border-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => goTo("inicio")}
          className="flex flex-col leading-none"
        >
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#5B2C83]">
            Alma Viva
          </span>
          <span className="text-lg font-semibold tracking-wide text-[#241C28]">
            AÇAÍ
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className="text-sm text-[#241C28] hover:text-[#5B2C83] transition"
            >
              {link.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#241C28]"
        >
          {open ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-[#F7F1E8] border-t border-black/5">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => goTo(link.id)}
                className="text-left text-[#241C28] text-lg"
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