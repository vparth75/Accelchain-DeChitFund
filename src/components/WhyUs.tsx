import React from "react";

const features = [
  { title: "Trustless & Secure", description: "No fraud, everything runs on smart contracts." },
  { title: "No Middlemen", description: "100% decentralized, no extra fees." },
  { title: "Global Access", description: "Anyone with crypto can participate." },
  { title: "Transparent Transactions", description: "All transactions are verifiable on the blockchain." },
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-gray-100 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2 text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
