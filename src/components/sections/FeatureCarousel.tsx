"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { HUDReticle } from "@/components/ui/HUDReticle";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    title: "Edge Compute Infrastructure",
    description: "To put AI onboard drones in the physical world.",
    useHUD: true,
    label: "DEFENSE"
  },
  {
    title: "Edge Deployed Intelligence",
    description: "Deploy on drones, in manufacturing facilities, across real industrial systems. No cloud dependency.",
    icon: "🚀",
    label: "COMMERCIAL"
  },
  {
    title: "Locally Hosted LLMs",
    description: "Run offline with minimal power. Industrial sovereignty. Independence from centralized infrastructure.",
    icon: "🧠",
    label: "INDUSTRIAL"
  }
];

export function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 15000); // Auto-scroll every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden">
      <div className="relative z-10 w-full">
        <ScrollReveal animation="fade-up" duration={1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            {/* Left side - Text content */}
            <div className="flex flex-col justify-center px-6 lg:px-16 py-12">
              <div className="max-w-xl">
                <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-500 mb-4 font-[family-name:var(--font-inter)] font-medium">
                  {features[currentIndex].label}
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 font-[family-name:var(--font-inter)] text-balance leading-[1.1]">
                  {features[currentIndex].title}
                </h2>
                <p className="text-lg md:text-xl text-white/50 leading-relaxed font-[family-name:var(--font-inter)] font-light mb-8">
                  {features[currentIndex].description}
                </p>
                
                {/* Navigation arrows */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={goToPrevious}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5 text-white/70" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5 text-white/70" />
                  </button>
                </div>

                {/* Carousel indicators */}
                <div className="flex gap-2 mt-8">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-white w-8"
                          : "bg-white/30 w-4 hover:bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Visual content */}
            <div className="flex items-center justify-center px-6 lg:px-16 py-12 bg-gradient-to-l from-white/[0.02] to-transparent">
              <div className="w-full max-w-lg aspect-square flex items-center justify-center">
                {features[currentIndex].useHUD ? (
                  <HUDReticle />
                ) : (
                  <div className="text-9xl">{features[currentIndex].icon}</div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/50 pointer-events-none" />
    </section>
  );
}
