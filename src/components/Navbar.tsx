import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">De-ChitFund</h1>
        <div className="flex items-center gap-4">
          <button className="hover:text-blue-400">Home</button>
          <button className="hover:text-blue-400">How it works?</button>
          <button className="hover:text-blue-400">Contact Us</button>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
