import React from "react";

const PricingCard = ({ plan, price, features }) => {
  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2d0d0d] text-white flex flex-col items-center p-8 rounded-2xl shadow-lg w-72 hover:scale-105 transition-transform duration-300">
      {/* Plan Name */}
      <h3 className="text-xl font-bold mb-4">{plan}</h3>

      {/* Price */}
      <p className="text-4xl font-extrabold mb-6">
        ₹{price}
        <span className="text-sm font-light">/mo</span>
      </p>

      {/* Features */}
      <ul className="space-y-3 text-sm text-gray-300 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            ✅ {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors font-semibold">
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
