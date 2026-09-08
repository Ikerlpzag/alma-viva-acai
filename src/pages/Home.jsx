import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Acai from "../components/Acai";
import Products from "../components/Products";
import Benefits from "../components/Benefits";
import Philosophy from "../components/Philosophy";
import Visit from "../components/Visit";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Acai />
      <Products />
      <Benefits />
      <Philosophy />
      <Visit />
      <Footer />
    </>
  );
}