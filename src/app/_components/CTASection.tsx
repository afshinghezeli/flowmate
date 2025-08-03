"use client";

interface FloatingIcon {
  id: number;
  symbol: string;
  color: string;
  position: string;
  opacity: string;
  size?: string;
}

const floatingIcons: FloatingIcon[] = [
  {
    id: 1,
    symbol: '+',
    color: 'bg-purple-400',
    position: 'top-16 right-20',
    opacity: 'opacity-40',
    size: 'w-12 h-12'
  },
  {
    id: 2,
    symbol: '◐',
    color: 'bg-blue-400',
    position: 'top-32 right-32',
    opacity: 'opacity-30',
    size: 'w-10 h-10'
  },
  {
    id: 3,
    symbol: '◑',
    color: 'bg-green-400',
    position: 'top-20 right-44',
    opacity: 'opacity-35',
    size: 'w-8 h-8'
  },
  {
    id: 4,
    symbol: '⚡',
    color: 'bg-yellow-400',
    position: 'bottom-24 right-16',
    opacity: 'opacity-50',
    size: 'w-10 h-10'
  },
  {
    id: 5,
    symbol: '◇',
    color: 'bg-pink-400',
    position: 'bottom-32 right-36',
    opacity: 'opacity-25',
    size: 'w-6 h-6'
  },
  {
    id: 6,
    symbol: '●',
    color: 'bg-indigo-400',
    position: 'top-40 right-12',
    opacity: 'opacity-20',
    size: 'w-4 h-4'
  },
  {
    id: 7,
    symbol: '▲',
    color: 'bg-cyan-400',
    position: 'bottom-16 right-28',
    opacity: 'opacity-30',
    size: 'w-8 h-8'
  },
  {
    id: 8,
    symbol: '◈',
    color: 'bg-orange-400',
    position: 'top-28 right-60',
    opacity: 'opacity-15',
    size: 'w-6 h-6'
  }
];

function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((icon) => (
        <div
          key={icon.id}
          className={`absolute ${icon.position} ${icon.color} ${icon.opacity} ${icon.size || 'w-10 h-10'} rounded-lg flex items-center justify-center`}
        >
          <span className="text-white text-sm font-bold">
            {icon.symbol}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function CTASection() {
  return (
    <section className="w-full bg-greyscale-900 py-20 font-interTight">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Card */}
        <div className="relative bg-gradient-to-br from-primary-tint-5 via-primary-tint-6 to-purple-800 rounded-3xl p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Floating Icons Background */}
          <FloatingIcons />
          
          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Try it now Tag */}
            <div className="inline-flex items-center justify-center px-3 py-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-greyscale-0 text-sm font-medium">Try it now</span>
            </div>
            
            {/* Main Title */}
            <h2 className="text-greyscale-0 text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Automate Smarter?
            </h2>
            
            {/* Description */}
            <p className="text-greyscale-100 text-lg leading-relaxed mb-8 max-w-xl">
              Start building powerful workflows in minutes. Whether you're launching a startup or scaling an enterprise, gives you the tools to move faster—no code required.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button */}
              <button className="bg-greyscale-0 text-greyscale-900 font-semibold px-8 py-4 rounded-lg hover:bg-greyscale-100 transition-colors duration-200 shadow-lg">
                Get started
              </button>
              
              {/* Secondary Button */}
              <button className="border-2 border-greyscale-0 text-greyscale-0 font-semibold px-8 py-4 rounded-lg hover:bg-greyscale-0 hover:text-greyscale-900 transition-all duration-200">
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}