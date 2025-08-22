import React from "react";

type Plan = {
  plan: string;
  price: string;
  features: string[];
};

const plans: Plan[] = [
  {
    plan: "Plus",
    price: "$29/MONTH",
    features: ["Up to 100 automations", "5 team members", "Basic Support", "Community Support"],
  },
  {
    plan: "Plus",
    price: "$49/MONTH",
   features: ["Up to 100 automations", "5 team members", "Basic Support", "Community Support"],
  },
  {
    plan: "Plus",
    price: "$99/MONTH",
   features: ["Up to 100 automations", "5 team members", "Basic Support", "Community Support"],
  },
];

const PricingSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-16">
      {/* Section title */}
      <p className="text-xs tracking-widest text-white/70 mb-10">↓ PRICING PLANS</p>

      {/* Cards container */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 w-full max-w-[1400px] h-full ">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between bg-gradient-to-br from-[#1a1a1a] to-[#2d0d0d] p-6 rounded-xl shadow-lg w-full max-w-sm h-full"
          >
            {/* Top: Plan Title & Price */}
            <div className="mb-4">
              <h2 className="text-sm font-medium mb-2">{plan.plan}</h2>
              <p className="text-2xl font-medium">{plan.price}</p>
            </div>

            {/* Features list */}
            <ul className="flex-1 my-4 space-y-2 text-sm text-white/80">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center before:content-['✓'] before:text-green-400 before:mr-2">
                  {feature}
                </li>
              ))}
            </ul>

            {/* Bottom: Button & Trial Text */}
            <div className="mt-4">
              <button className="w-full bg-gradient-to-r from-red-600 to-white-500 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform">
                Subscribe Now
              </button>
              <p className="mt-2 text-sm text-white/70 text-center">30 Days Trial Available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
