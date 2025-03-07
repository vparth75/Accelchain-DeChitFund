import React from "react";
import { Button } from '@cred/neopop-web/lib/components';

const Navbar: React.FC = () => {
  return (
    <nav className= "text-white p-4 shadow-lg">
      
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">De-ChitFunds</h1>
        <div className="flex items-center gap-4">
          <button className="hover:text-zinc-400 cursor-pointer font-main">Home</button>
          <button className="hover:text-zinc-400 cursor-pointer font-main">How it works?</button>
          <button className="hover:text-zinc-400 cursor-pointer font-main">Contact Us</button>

          <Button variant="primary" kind="elevated" size="medium" colorMode="light">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
