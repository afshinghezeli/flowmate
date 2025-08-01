"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatedBeam } from "./AnimatedBeam";

const integrations = [
  { name: "Notion", icon: "/images/notion.svg" },
  { name: "MailChimp", icon: "/images/mailchimp.svg" },
  { name: "Slack", icon: "/images/slack.svg" },
  { name: "Gmail", icon: "/images/gmail.svg" },
  { name: "Claude", icon: "/images/claude.svg" },
  { name: "Meta", icon: "/images/meta.svg" },
];

// Central FlowMate logo component - exact match to Container.png
function CentralLogo({ logoRef }: { logoRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={logoRef}
      className="relative z-20 flex items-center justify-center w-[75px] h-[75px] bg-gradient-to-br from-greyscale-600 to-greyscale-800 rounded-2xl border border-[#A1ADFF]"
    >
      {/* Actual FlowMate Logo SVG */}
      <Image
        src="/images/flowmateLogo.svg"
        alt="FlowMate"
        width={40}
        height={40}
        className="w-10 h-10"
      />
    </div>
  );
}

// Integration icon component for flexbox layout
function IntegrationIcon({ 
  integration, 
  iconRef 
}: { 
  integration: typeof integrations[0]; 
  iconRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={iconRef}
      className="z-10 flex items-center justify-center w-[40px] h-[40px] bg-[#1D1B58] rounded-xl border border-gray-600/40 shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={integration.icon}
        alt={integration.name}
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </div>
  );
}

export default function IntegrationDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centralLogoRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(React.RefObject<HTMLDivElement | null>)[]>(
    integrations.map(() => React.createRef<HTMLDivElement>())
  );

  // Force re-render of beams after layout stabilizes
  useEffect(() => {
    const timer = setTimeout(() => {
      // Trigger window resize to force AnimatedBeam recalculation
      window.dispatchEvent(new Event('resize'));
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-[600px] h-[280px] mx-auto"
    >
      {/* Central FlowMate Logo - positioned at top center */}
      <div className="absolute left-1/2 top-[40px] transform -translate-x-1/2">
        <CentralLogo logoRef={centralLogoRef} />
      </div>

      {/* Integration Icons - flexbox with 60px gap exactly 200px below center */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-row gap-[60px] justify-center" style={{ top: '240px' }}>
        {integrations.map((integration, index) => (
          <IntegrationIcon
            key={integration.name}
            integration={integration}
            iconRef={iconRefs.current[index]}
          />
        ))}
      </div>

      {/* Animated Beams - Bézier curves converging from bottom to top */}
      {integrations.map((_, index) => {
        return (
          <AnimatedBeam
            key={`beam-${index}`}
            containerRef={containerRef}
            fromRef={centralLogoRef}
            toRef={iconRefs.current[index]}
            reverse={true} // Animation flows from top to bottom
            duration={3 + Math.random() * 2}
            delay={index * 0.3}
            pathColor="#3F3788"
            pathWidth={3}
            pathOpacity={0.6}
            gradientStartColor="#713DDD"
            gradientStopColor="#713DDD"
            startYOffset={37.5} // Bottom center of large container (75px / 2)
            endYOffset={-20} // Top center of small icons (40px / 2)
          />
        );
      })}
    </div>
  );
}