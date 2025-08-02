"use client";

import Image from "next/image";

// Glow Background component with purple gradient centered
function GlowBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Main glow in center */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-25">
        <svg
          className="block size-full"
          fill="none" 
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 600 600"
        >
          <g filter="url(#filter0_f_features)" id="Gradient">
            <ellipse
              cx="300"
              cy="300" 
              fill="#5024FF"
              rx="200"
              ry="200"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="800"
              id="filter0_f_features"
              width="800"
              x="-100"
              y="-100"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_features"
                stdDeviation="150"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Drag, Drop, Automate",
    description: "No code? No problem. Build powerful workflows with an interface so smooth, it's almost fun.",
    image: "/images/features/drag.png",
    colSpan: "col-span-12 lg:col-span-5"
  },
  {
    title: "Scale Without the Scream", 
    description: "Whether you've got 10 users or 10,000, Flowmate grows with you—minus the tech headaches.",
    image: "/images/features/scale.png",
    colSpan: "col-span-12 lg:col-span-7"
  },
  {
    title: "Plug It All In",
    description: "Integrates with your favorite tools like it was born to. Zapier, Slack, Google—you name it.",
    image: "/images/features/plugIt.png",
    colSpan: "col-span-12 lg:col-span-7"
  },
  {
    title: "Smart Enough to Chill",
    description: "Our AI does the thinking, so you don't have to. Optimize, predict, and adapt on autopilot.",
    image: "/images/features/smart.png",
    colSpan: "col-span-12 lg:col-span-5"
  }
];

export default function PowerFeatures() {
  return (
    <section className="w-full bg-greyscale-900 py-20 font-interTight relative">
      {/* Glow Background */}
      <GlowBackground />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Features Tag */}
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-tint-6 rounded-full mb-6">
            <span className="text-greyscale-0 text-sm font-medium">Features</span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-greyscale-0 text-5xl font-bold mb-6 leading-tight">
            Power Features to Supercharge<br />
            Your Automation
          </h2>
          
          {/* Description */}
          <p className="text-greyscale-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Flowmate is packed with smart, scalable features designed<br />
            to simplify workflows, boost efficiency
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-12 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.colSpan} bg-greyscale-800 rounded-2xl p-8 border border-greyscale-700 hover:border-greyscale-600 transition-colors duration-300`}
            >
              {/* Feature Content */}
              <div className="mb-8">
                <h3 className="text-greyscale-0 text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-greyscale-400 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Feature Image */}
              <div className="relative h-[17.313rem] w-full rounded-xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}