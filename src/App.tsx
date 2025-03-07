import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import BetaSignup from "./components/BetaSignup";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyUs />
      <BetaSignup />
      <Footer />
    </>
  );
}
