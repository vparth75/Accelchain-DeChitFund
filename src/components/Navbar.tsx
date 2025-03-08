import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button as ConnectWalletButton } from '@cred/neopop-web/lib/components';


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["home", "how-it-works", "why-us", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full p-3 shadow-lg transition-all z-50 ${
        isScrolled ? "bg-black/90 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-10">
        <h1 className="text-xl font-bold text-white">De-ChitFunds</h1>
        <div className="flex gap-4">
          <div className="flex items-center gap-4">
            {[
              { name: "Home", id: "home" },
              { name: "How it Works?", id: "how-it-works" },
              { name: "Why Us?", id: "why-us" },
            
            ].map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className={`cursor-pointer font-main px-2 py-1 rounded-md transition-all ${
                  activeSection === item.id
                    ? "bg-gray-700 text-white"
                    : "text-white hover:text-gray-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <ConnectWalletButton variant="primary" kind="elevated" size="medium" colorMode="light">
            Connect Wallet
          </ConnectWalletButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
