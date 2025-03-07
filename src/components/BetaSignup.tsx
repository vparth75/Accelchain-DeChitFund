import React from "react";

const BetaSignup: React.FC = () => {
  return (
    <section className="py-16 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold">Join Our Beta!</h2>
      <p className="mt-4">Be among the first to test and earn rewards.</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="mt-6 p-3 rounded text-black"
      />
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded">
        Sign Up
      </button>
    </section>
  );
};

export default BetaSignup;
