import React from "react";
import HeroImage1 from "../assets/HeroImage1.svg"
import { Button } from '@cred/neopop-web/lib/components';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col gap-32 text-white h-screen">
      <h2 className="text-4xl font-bold font-title text-center pt-32">A Smarter, Transparent Way to Save & Borrow</h2>
      <div className="flex px-10 gap-20 ">
        <div className="flex flex-col items-center gap-10  justify-center">
          <p className="mt-4 text-lg font-main ">Join a decentralized chit fund powered by blockchain for complete security, transparency, and automation. Smart contracts handle fund collection and payouts seamlessly, ensuring trust and fairness without intermediaries. Save, invest, or borrow with confidence—experience a modern, efficient way to manage your funds!</p>
          <div>
            <Button variant="primary" kind="elevated" size="medium" colorMode="light" showArrow>
              Join the Beta
            </Button>
          </div>
        </div>
          <img src={HeroImage1} className="h-80"></img>
      </div>
    </section>
  );
};

export default Hero;
