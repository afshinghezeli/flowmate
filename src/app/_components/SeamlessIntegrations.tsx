"use client";

import Image from "next/image";

export default function SeamlessIntegrations() {
  return (
    <section className="w-full bg-greyscale-900 py-20 font-interTight">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Seamless Integrations Tag */}
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-tint-6 rounded-full mb-6">
            <span className="text-greyscale-0 text-sm font-medium">Seamless Integrations</span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-greyscale-0 text-5xl font-bold mb-6 leading-tight">
            Instant 250+ App<br />
            Integrations for Automations
          </h2>
          
          {/* Description */}
          <p className="text-greyscale-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Flowmate is packed with smart, scalable features designed<br />
            to simplify workflows, boost efficiency
          </p>
        </div>

        {/* Integration Diagram */}
        <div className="relative w-full max-w-4xl mx-auto">
          <Image
            src="/images/integration/integration.png"
            alt="Integration Diagram showing 250+ app connections"
            width={800}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}