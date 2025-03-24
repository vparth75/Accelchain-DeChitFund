import React from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BetaSignup: React.FC = () => {
  return (
    <section className="py-16 text-white text-center">
      <h2 className="text-3xl font-bold font-title">Join Our Beta!</h2>
      <p className="mt-4 mb-4 font-main">Be among the first to test and earn rewards.</p>
      <div className="flex justify-center items-center gap-2">
        <div className="p-1">
          <Input placeholder="Enter your email"/>
        </div>
        <Button variant="secondary">
          Sign up
        </Button>
      </div>
    </section>
  );
};

export default BetaSignup;
