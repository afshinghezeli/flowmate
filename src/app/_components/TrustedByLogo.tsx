"use client";

import Image from "next/image";

const companies = [
  { name: "Google", logo: "/images/companyLogo/google.png" },
  { name: "Microsoft", logo: "/images/companyLogo/microsoft.png" },
  { name: "Monday", logo: "/images/companyLogo/monday.png" },
  { name: "ProductBoard", logo: "/images/companyLogo/productboard.png" },
  { name: "Shopify", logo: "/images/companyLogo/shopify.png" },
  { name: "Upwork", logo: "/images/companyLogo/upwork.png" },
];

export default function TrustedByLogo() {
  // Duplicate the companies array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="w-full py-16 font-interTight">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-greyscale-0 text-2xl font-semibold">
            We are Trusted by
          </p>
        </div>

        {/* Infinite Scrolling Company Logos with Fade Effects */}
        <div className="trusted-logos-container overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center"
                style={{ marginRight: '80px', minWidth: '120px' }}
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}