import React from "react";

const steps = [
  { title: "Join a Chit Fund", description: "Deposit funds to participate." },
  { title: "Contribute Monthly", description: "Every member contributes a fixed amount." },
  { title: "Win Payouts", description: "Each month, one member gets the pooled funds." },
  { title: "Repeat Until Everyone Wins", description: "No one is left out!" },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="pb-16 text-center">
      <h2 className="text-3xl font-bold mb-16 text-white font-title">How It Works?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold font-title">{step.title}</h3>
            <p className="mt-2 text-gray-700 font-body">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
