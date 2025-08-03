"use client";

import { useState, useEffect } from "react";

interface PricingPlan {
  name: string;
  price: number;
  originalPrice: number | null;
  period: string;
  isPopular?: boolean;
  features: string[];
  buttonStyle: 'primary' | 'secondary' | 'outline';
}

const monthlyPlans: PricingPlan[] = [
  {
    name: "Free Plan",
    price: 0,
    originalPrice: null,
    period: "",
    features: [
      "Up to 2 active workflows",
      "1,000 tasks/month", 
      "Access to 20+ integrations",
      "Community support",
      "Basic templates & branding"
    ],
    buttonStyle: 'outline'
  },
  {
    name: "Professional Plan",
    price: 49,
    originalPrice: 59,
    period: "per month",
    isPopular: true,
    features: [
      "Up to 15 active workflows",
      "15,000 tasks/month",
      "Full library of 500+ integrations", 
      "Email & chat support",
      "Custom templates & branding"
    ],
    buttonStyle: 'secondary'
  },
  {
    name: "Business Plan", 
    price: 99,
    originalPrice: 109,
    period: "per month",
    features: [
      "Unlimited workflows & tasks",
      "Dedicated account manager",
      "Full library of 500+ integrations",
      "SLA-backed uptime",
      "SSO & advanced security"
    ],
    buttonStyle: 'primary'
  }
];

const yearlyPlans: PricingPlan[] = [
  {
    name: "Free Plan",
    price: 0,
    originalPrice: null,
    period: "",
    features: [
      "Up to 2 active workflows",
      "1,000 tasks/month",
      "Access to 20+ integrations", 
      "Community support",
      "Basic templates & branding"
    ],
    buttonStyle: 'outline'
  },
  {
    name: "Professional Plan",
    price: 39,
    originalPrice: 47,
    period: "per month",
    isPopular: true,
    features: [
      "Up to 15 active workflows",
      "15,000 tasks/month", 
      "Full library of 500+ integrations",
      "Email & chat support",
      "Custom templates & branding"
    ],
    buttonStyle: 'secondary'
  },
  {
    name: "Business Plan",
    price: 79,
    originalPrice: 87,
    period: "per month",
    features: [
      "Unlimited workflows & tasks",
      "Dedicated account manager",
      "Full library of 500+ integrations",
      "SLA-backed uptime", 
      "SSO & advanced security"
    ],
    buttonStyle: 'primary'
  }
];

interface PricingCardProps {
  plan: PricingPlan;
}

function PricingCard({ plan }: PricingCardProps) {
  const getButtonClasses = () => {
    switch (plan.buttonStyle) {
      case 'primary':
        return "w-full bg-primary-tint-6 text-greyscale-0 font-semibold py-3 px-6 rounded-lg hover:bg-primary-tint-5 transition-colors duration-200";
      case 'secondary':
        return "w-full bg-greyscale-0 text-primary-tint-6 font-semibold py-3 px-6 rounded-lg hover:bg-greyscale-100 transition-colors duration-200";
      case 'outline':
        return "w-full border-2 border-primary-tint-6 text-primary-tint-6 font-semibold py-3 px-6 rounded-lg hover:bg-primary-tint-6 hover:text-greyscale-0 transition-colors duration-200";
      default:
        return "";
    }
  };

  const getCardClasses = () => {
    if (plan.isPopular) {
      return "relative bg-primary-tint-6 border-2 border-primary-tint-5 rounded-2xl p-8 shadow-lg";
    }
    return "relative bg-greyscale-800 border-2 border-greyscale-700 rounded-2xl p-8 hover:border-greyscale-600 transition-colors duration-200";
  };

  const getTextColor = () => {
    return plan.isPopular ? "text-greyscale-0" : "text-greyscale-0";
  };

  const getSecondaryTextColor = () => {
    return plan.isPopular ? "text-greyscale-200" : "text-greyscale-400";
  };

  return (
    <div className={getCardClasses()}>
      {/* Most Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-greyscale-0 text-primary-tint-6 text-sm font-semibold px-4 py-2 rounded-full">
            Most popular
          </span>
        </div>
      )}

      {/* Plan Name */}
      <h3 className={`${getTextColor()} text-2xl font-semibold mb-6`}>
        {plan.name}
      </h3>

      {/* Pricing */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          {plan.originalPrice && (
            <span className={`${getSecondaryTextColor()} text-2xl line-through`}>
              ${plan.originalPrice}
            </span>
          )}
          <span className={`${getTextColor()} text-5xl font-bold`}>
            ${plan.price}
          </span>
          {plan.period && (
            <span className={`${getSecondaryTextColor()} text-lg`}>
              {plan.period}
            </span>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <button className={getButtonClasses()}>
        Get started
      </button>

      {/* Trial Text */}
      <div className="flex items-center justify-center gap-2 mt-4 mb-8">
        <div className={`w-4 h-4 rounded-full ${plan.isPopular ? 'bg-greyscale-200' : 'bg-primary-tint-6'} flex items-center justify-center`}>
          <svg className="w-2 h-2 text-greyscale-0" fill="currentColor" viewBox="0 0 8 8">
            <path d="M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z"/>
          </svg>
        </div>
        <span className={`${getSecondaryTextColor()} text-sm`}>
          Get your free 7-day trial today!
        </span>
      </div>

      {/* Features */}
      <div>
        <h4 className={`${getTextColor()} text-lg font-semibold mb-4`}>
          What's included
        </h4>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full ${plan.isPopular ? 'bg-greyscale-200' : 'bg-primary-tint-6'} flex items-center justify-center flex-shrink-0`}>
                <svg className="w-3 h-3 text-greyscale-0" fill="currentColor" viewBox="0 0 8 8">
                  <path d="M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z"/>
                </svg>
              </div>
              <span className={`${getSecondaryTextColor()} text-sm`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [plans, setPlans] = useState(monthlyPlans);

  useEffect(() => {
    setPlans(isYearly ? yearlyPlans : monthlyPlans);
  }, [isYearly]);

  return (
    <section className="w-full bg-greyscale-900 py-20 font-interTight">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Pricing Tag */}
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-tint-6 rounded-full mb-6">
            <span className="text-greyscale-0 text-sm font-medium">Pricing</span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-greyscale-0 text-5xl font-bold mb-6 leading-tight">
            Simple Plans, Scalable Power
          </h2>
          
          {/* Description */}
          <p className="text-greyscale-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Whether you're just getting started or running at full speed,<br />
            Flowmate has a plan that fits. No hidden fees.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg font-medium ${!isYearly ? 'text-greyscale-0' : 'text-greyscale-400'}`}>
              Monthly
            </span>
            <button 
              className="relative bg-primary-tint-6 w-14 h-7 rounded-full p-1 transition-colors duration-200"
              onClick={() => setIsYearly(!isYearly)}
            >
              <div className={`w-5 h-5 bg-greyscale-0 rounded-full shadow-md transform transition-transform duration-200 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-lg font-medium ${isYearly ? 'text-greyscale-0' : 'text-greyscale-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-500 text-greyscale-0 text-xs font-semibold px-3 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}