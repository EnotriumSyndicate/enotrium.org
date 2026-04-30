import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function QuantumHackathonPage() {
  return (
    <main className="min-h-screen bg-black text-white font-[family-name:var(--font-inter)]">
      <Navbar darkText />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-32">
        {/* Back Link */}
        <Link href="/announcements" className="inline-block text-white/60 hover:text-white transition-colors mb-16 font-light">
          ← Back to Announcements
        </Link>

        {/* Page Header */}
        <header className="mb-16">
          <h1 className="font-[family-name:var(--font-tektur)] font-normal text-[60px] md:text-[80px] lg:text-[100px] leading-none mb-4">
            Enotrium x Do Quantum Hackathon
          </h1>
          <div className="h-px bg-white w-full"></div>
        </header>

        {/* Event Details */}
        <section className="max-w-4xl space-y-8">
          <div className="border-b border-white/20 pb-8">
            <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
            <div className="space-y-3 text-white/80">
              <p>
                <span className="text-white/60 block text-xs tracking-[0.05em] mb-1">DATE</span>
                Saturday, May 16, 2026
              </p>
              <p>
                <span className="text-white/60 block text-xs tracking-[0.05em] mb-1">TIME</span>
                1:00 PM
              </p>
            </div>
          </div>

          <div className="border-b border-white/20 pb-8">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-white/80 leading-relaxed">
              Join the Enotrium x DO Quantum Hackathon! This exciting event brings together developers, researchers, and quantum computing enthusiasts to collaborate on innovative projects at the intersection of quantum computing and AI.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Registration</h2>
            <p className="text-white/80 leading-relaxed">
              Registration details coming soon. Stay tuned for more information on how to participate in this groundbreaking hackathon.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
