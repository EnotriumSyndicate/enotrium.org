"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { HUDReticle } from "@/components/ui/HUDReticle";

const features = [
  {
    title: "Edge Compute Infrastructure",
    description: "To put AI onboard drones in the physical world.",
    useHUD: true
  },
  {
    title: "Edge Deployed Intelligence",
    description: "Deploy on drones, in manufacturing facilities, across real industrial systems. No cloud dependency.",
    icon: "🚀"
  },
  {
    title: "Locally Hosted LLMs",
    description: "Run offline with minimal power. Industrial sovereignty. Independence from centralized infrastructure.",
    icon: "🧠"
  }
];

export function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16 w-full">
        <ScrollReveal animation="fade-up" duration={1}>
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
            {features[currentIndex].useHUD ? (
              <div className="w-full max-w-2xl mb-8">
                <HUDReticle />
              </div>
            ) : (
              <div className="text-8xl mb-8">{features[currentIndex].icon}</div>
            )}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-8 font-[family-name:var(--font-inter)] text-balance leading-[1.1]">
              {features[currentIndex].title}
            </h2>
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-[family-name:var(--font-inter)] font-light max-w-3xl">
              {features[currentIndex].description}
            </p>
            
            {/* Carousel indicators */}
            <div className="flex gap-3 mt-12">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/50 pointer-events-none" />
    </section>
  );
}
