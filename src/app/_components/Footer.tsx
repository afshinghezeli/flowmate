"use client";

import { useState } from "react";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
  color?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks = {
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#" },
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" }
    ]
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Product", href: "#" },
      { label: "Integration", href: "#" }
    ]
  },
  others: {
    title: "Others",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Affiliates", href: "#" }
    ]
  },
  socialMedia: {
    title: "Social Media",
    links: [
      { label: "Instagram", href: "#", color: "blue" },
      { label: "Facebook", href: "#", color: "blue" },
      { label: "Tiktok", href: "#", color: "blue" }
    ]
  }
};

function FooterGlowBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] opacity-20">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 600 300"
        >
          <g filter="url(#filter0_f_footer)" id="FooterGradient">
            <ellipse
              cx="300"
              cy="200"
              fill="#5024FF"
              rx="250"
              ry="120"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="440"
              id="filter0_f_footer"
              width="740"
              x="-70"
              y="20"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_footer"
                stdDeviation="60"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function BackgroundText() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <span className="text-greyscale-600 text-[12rem] sm:text-[16rem] lg:text-[24rem] xl:text-[32rem] 2xl:text-[40rem] font-bold opacity-15 select-none whitespace-nowrap leading-none">
        Flowmate
      </span>
    </div>
  );
}

interface FooterSectionProps {
  section: FooterSection;
}

function FooterSection({ section }: FooterSectionProps) {
  return (
    <div>
      <h4 className="text-greyscale-0 font-semibold mb-4">
        {section.title}
      </h4>
      <ul className="space-y-3">
        {section.links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href}
              className={`${
                link.color === 'blue' 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-greyscale-400 hover:text-greyscale-0'
              } transition-colors duration-200`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail("");
      // Here you would typically show a success message
    }, 1000);
  };

  return (
    <footer className="relative w-full bg-greyscale-900 font-interTight overflow-hidden">
      {/* Glow Background */}
      <FooterGlowBackground />
      
      {/* Background Text */}
      <BackgroundText />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="border-b border-greyscale-700 py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Contact Us Section */}
            <div className="flex-1">
              <h3 className="text-greyscale-0 text-3xl font-bold mb-4">
                Contact Us Now
              </h3>
              <p className="text-greyscale-400 text-lg mb-6">
                Automation you can build, adapt, and grow
              </p>
              <button className="bg-primary-tint-6 text-greyscale-0 font-semibold px-6 py-3 rounded-lg hover:bg-primary-tint-5 transition-colors duration-200">
                Contact Us
              </button>
            </div>
            
            {/* Newsletter Section */}
            <div className="flex-1 lg:max-w-md">
              <h3 className="text-greyscale-0 text-xl font-semibold mb-4">
                Subscribe to Flowmate Newsletter
              </h3>
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-greyscale-800 border border-greyscale-700 text-greyscale-0 placeholder-greyscale-400 px-4 py-3 rounded-lg focus:outline-none focus:border-primary-tint-6 transition-colors duration-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-primary-tint-6 text-greyscale-0 font-semibold px-6 py-3 rounded-lg hover:bg-primary-tint-5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isSubscribing ? "..." : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info - spans 2 columns on large screens */}
            <div className="md:col-span-2 lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/flowmateLogo.svg"
                  alt="Flowmate"
                  width={32}
                  height={32}
                />
                <span className="text-greyscale-0 text-xl font-bold">
                  Flowmate
                </span>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <p className="text-greyscale-300">
                  hello@flowmate.com
                </p>
                <p className="text-greyscale-300">
                  +1509121290102
                </p>
              </div>
            </div>
            
            {/* Link Sections */}
            <FooterSection section={footerLinks.quickLinks} />
            <FooterSection section={footerLinks.company} />
            <FooterSection section={footerLinks.others} />
            <FooterSection section={footerLinks.socialMedia} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-greyscale-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-greyscale-500 text-sm">
              © Flowmate 2025. All Rights Reserved
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-greyscale-400 hover:text-greyscale-0 text-sm transition-colors duration-200"
              >
                Changelog
              </a>
              <a 
                href="#" 
                className="text-greyscale-400 hover:text-greyscale-0 text-sm transition-colors duration-200"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}