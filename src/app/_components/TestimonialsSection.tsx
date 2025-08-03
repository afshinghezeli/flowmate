"use client";

import Image from "next/image";

interface Testimonial {
  id: number;
  rating: number;
  title: string;
  content: string;
  avatar: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5.0,
    title: "A Game Changer for Our Business",
    content: "Thanks to the integrated tools, managing our inventory and orders has never been easier. We&apos;ve seen a 30% increase in sales within three months!",
    avatar: "/images/avatars/avatar1.svg",
    name: "Siti Sarah",
    role: "Small Business Owner"
  },
  {
    id: 2,
    rating: 5.0,
    title: "Seamless and Easy to Use", 
    content: "The platform is incredibly user-friendly. Setting up promotions and tracking customer orders is a breeze. It&apos;s been a key part of our growth.",
    avatar: "/images/avatars/avatar2.svg",
    name: "David",
    role: "E-Commerce Entrepreneur"
  },
  {
    id: 3,
    rating: 4.8,
    title: "Boosted Our Productivity",
    content: "We used to struggle with managing multiple sales channels, but now everything is centralized in one place. Our team is more productive, and our customers are happier!",
    avatar: "/images/avatars/avatar3.svg", 
    name: "Lina",
    role: "Online Store Owner"
  }
];

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-greyscale-0 text-xl font-bold">{rating}</span>
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className="w-5 h-5 text-yellow-400 fill-current" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-greyscale-800 border border-greyscale-700 rounded-2xl p-8 hover:border-greyscale-600 transition-colors duration-200">
      {/* Rating */}
      <StarRating rating={testimonial.rating} />
      
      {/* Title */}
      <h3 className="text-greyscale-0 text-xl font-semibold mt-6 mb-4">
        {testimonial.title}
      </h3>
      
      {/* Content */}
      <p className="text-greyscale-400 text-base leading-relaxed mb-8">
        {testimonial.content}
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <h4 className="text-greyscale-0 font-semibold">
            {testimonial.name}
          </h4>
          <p className="text-greyscale-400 text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-greyscale-900 py-20 font-interTight">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Testimonials Tag */}
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-tint-6 rounded-full mb-6">
            <span className="text-greyscale-0 text-sm font-medium">Testimonials</span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-greyscale-0 text-5xl font-bold mb-6 leading-tight">
            What Our Users Are Saying
          </h2>
          
          {/* Description */}
          <p className="text-greyscale-400 text-lg leading-relaxed max-w-2xl mx-auto">
            From solo founders to enterprise teams, Flowmate is helping<br />
            people automate smarter every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}