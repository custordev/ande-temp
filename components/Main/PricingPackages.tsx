"use client";
import React, { useState } from "react";
import ToggleSwitch from "../ToggleBtn";

function PricingPackages() {
  const [isMonthly, setIsMonthly] = useState(true);

  const packages = [
    {
      id: 1,
      name: "Basic Plan",
      price: isMonthly ? "22" : "19",
      bg: "slate-100",
      supportedFeatures: [
        "Social Payment tracking",
        "Basic reporting",
        "No credit card required",
        "Basic investment tracking",
        "Collaboration and sharing",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: isMonthly ? "50" : "49",
      bg: "gray-100",
      supportedFeatures: [
        "24/7",
        "Custom integration options",
        "Detailed analytics",
        "Multi-currency support",
        "Unlimited payment tracking",
        "Customizable reporting",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: isMonthly ? "99" : "89",
      bg: "[#EBFF74]",
      supportedFeatures: [
        "24/7",
        "Custom integration options",
        "Unlimited payment tracking",
        "Advanced payment tracking",
        "Detailed analytics",
        "Priority customer support",
        "Advanced reporting",
        "Customizable reporting",
      ],
    },
  ];

  function handleToggle() {
    setIsMonthly(!isMonthly);
  }

  return (
    <div className="flex flex-col px-8 gap-12 lg:py-4 py-1">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h2 className="lg:text-5xl font-semibold lg:w-96 md:text-4xl mb-8 text-2xl ">
          Discover our pricing options
        </h2>
        <div className="flex flex-col items-start gap-4">
          <h2>
            Our passion for customer excellence is just one reason <br /> why we
            are the market leader.
          </h2>
          <div>
            <ToggleSwitch isMonthly={isMonthly} handleToggle={handleToggle} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {packages.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col gap-8 bg-${item.bg} py-8 min-h-auto px-12 max-w-md rounded-lg `}
          >
            <h1 className="font-semibold">{item.name}</h1>
            <p className="font-semibold text-3xl">
              ${item.price}/ <small className="text-sm"> month</small>
            </p>
            <ul>
              {item.supportedFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="card-btns">
              <button className="bg-slate-800 py-1 px-8 rounded-lg text-slate-100">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPackages;
