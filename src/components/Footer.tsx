import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white text-center py-6">
      <p>© {new Date().getFullYear()} ChitFund - All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
