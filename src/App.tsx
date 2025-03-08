import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import BetaSignup from "./components/BetaSignup";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      
      {/* Fixed Navbar */}
      <Navbar />

      {/* Add top padding so content isn't covered by navbar */}
      <div className="pt-20">
        <section id="home">
          <Hero />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="why-us">
          <WhyUs />
        </section>
        <section id="contact">
          <BetaSignup />
        </section>
        <Footer />
      </div>
    </div>
  );
}