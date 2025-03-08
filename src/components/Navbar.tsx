import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";



const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change navbar background after scrolling 50px

      // Detect which section is currently in view
      const sections = ["home", "how-it-works", "why-us", "contact"];
      let currentSection = "home"; // Default section

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
      className={`fixed top-0 w-full p-2 shadow-lg transition-all z-50 ${
        isScrolled ? "bg-black/90 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-10">
        <h1 className="text-xl font-bold text-white">De-ChitFunds</h1>
        <div className="flex items-center gap-4">
          {/* Navbar Links with Highlight Effect */}
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
                  ? "bg-gray-700 text-white" // Highlighted section
                  : "text-white hover:text-gray-400"
              }`}
            >
              {item.name}
            </Link>
          ))}

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
