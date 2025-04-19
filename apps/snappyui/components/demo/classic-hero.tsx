"use client";
import React from "react";

import { ClassicHero } from "../ui/snappy-hero";

export default function ClassicHeroDemo() {
  return (
    <div>
      <ClassicHero
        companyName="Acme Corp"
        coreFeaturesText="Features"
        coreFeaturesLink="https://github.com/the-ajay-panigrahi"
        pricingText="Pricing"
        pricingTextLink="https://www.linkedin.com/in/ajay-panigrahi/"
        integrationsText="Integrations"
        integrationsTextLink="https://www.youtube.com/"
        loginText="Login"
        getStartedText="Get Started"
        tagline="The Future of Business"
        mainTitle="Revolutionize Your Workflow"
        description="Streamline your operations and achieve unprecedented results."
        freeTrialText="Start your free trial today!"
        learnMoreText2="Learn More"
        className="mb-12"
        onLoginClick={() => {
          console.log("Login Button Clicked");
        }}
        onGetStartedNavClick={() => {
          console.log("Get Started Nav button clicked!");
        }}
        onGetStartedClick={() => {
          console.log("Get Started button clicked!");
        }}
        onLearnMoreClick={() => {
          console.log("Learn More Button Clicked");
        }}
      />
    </div>
  );
}
