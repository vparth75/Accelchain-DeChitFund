import React from "react";
import { Button } from '@cred/neopop-web/lib/components';
import { InputField } from '@cred/neopop-web/lib/components';

const BetaSignup: React.FC = () => {
  return (
    <section className="py-16 text-white text-center">
      <h2 className="text-3xl font-bold font-title">Join Our Beta!</h2>
      <p className="mt-4 mb-4 font-main">Be among the first to test and earn rewards.</p>
      <div className="flex justify-center gap-2">
        <div className="border p-1 flex items-center">
          <InputField
            type="text"
            placeholder="Enter your email"
            id="text_field"
            colorMode='dark'
            caretColor="white"
          />
        </div>
        <Button variant="primary" kind="elevated" size="medium" colorMode="light">
          Sign up
        </Button>
      </div>
    </section>
  );
};

export default BetaSignup;
