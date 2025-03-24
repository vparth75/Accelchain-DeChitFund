import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button as ConnectWalletButton } from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAccount, useConnect, useConnectors, useDisconnect, useReadContract, WagmiProvider } from 'wagmi';
import { config } from "../config";
import { disconnect } from "wagmi/actions";

const Navbar: React.FC = () => {
  const client = new QueryClient();

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
                className={`cursor-pointer font-medium px-2 py-1 rounded-md transition-all ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <WagmiProvider config={config}>
            <QueryClientProvider client={client}>
              <ConnectWallet/>
            </QueryClientProvider>
          </WagmiProvider>
        </div>
      </div>
    </nav>
  );
};

function ConnectWallet(){
  const connectors = useConnectors();
  const { connect } = useConnect();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const [showConnectPopup, setShowConnectPopup] = useState(false);
  const [showDisconnectPopup, setShowDisconnectPopup] = useState(false);
  const [connectedWalletIcon, setConnectedWalletIcon] = useState("");
  
  if(address){
    return <ConnectWalletButton variant="secondary" onClick={() => setShowDisconnectPopup(!showDisconnectPopup)}>
    {showDisconnectPopup && (
      <div className="absolute rounded-md h-fit p-2 mt-40 w-auto z-10 bg-black border text-white">
        <div className="p-2">Disconnect Wallet?</div>
        <Button variant="secondary" className="my-2" onClick={() => disconnect()}>Disconnect</Button>
      </div>
    )}
      <img src={connectedWalletIcon} className="w-4"></img>
      {address.slice(0, 8)}
    </ConnectWalletButton>
  }
  
  return (
    <div className="relative">
      <ConnectWalletButton variant="secondary" onClick={() => setShowConnectPopup(!showConnectPopup)}>
        Connect Wallet
      </ConnectWalletButton>
      <div>
        {showConnectPopup && (
            <div className="absolute right-0 rounded-md flex flex-col items-center h-fit p-2 mt-2 w-60 z-10 bg-black border text-white">
              <div className="p-2 w-full">Connect to De-ChitFunds</div>
              <div className="flex flex-col items-center">
                {
                  connectors.map(connector => {
                    return <div className="p-2">
                      <Button variant="secondary" onClick={() => {
                        connector.icon && (setConnectedWalletIcon(connector.icon.toString()));
                        connect({connector});
                        setShowConnectPopup(!showConnectPopup);
                      }}>
                        <img src={`${connector.icon}`} className="w-4"></img>
                        {connector.name}
                      </Button>
                    </div>
                  })
                }
              </div>
            </div>
          )}
        </div>
    </div>
  )
}  

export default Navbar;
