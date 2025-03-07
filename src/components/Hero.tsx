import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white text-center py-20">
      <h2 className="text-4xl font-bold">A Smarter, Transparent Way to Save & Borrow</h2>
      <p className="mt-4 text-lg">Join a decentralized chit fund where everything is secure & automated.</p>
      <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded">
        Join the Beta
      </button>
    </section>
  );
};

export default Hero;
