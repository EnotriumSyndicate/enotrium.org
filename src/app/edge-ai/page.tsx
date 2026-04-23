"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function EdgeAIPage() {
  return (
    <div className="min-h-screen bg-white text-black font-[family-name:var(--font-inter)]">
      <Navbar lightScrollBg invertLogo darkText lightMegaMenu />

      <main className="max-w-[1400px] mx-auto px-6 lg:px-16 pt-16 pb-24">

        {/* Page Header - Tektur hero */}
        <div className="mb-10 md:mb-16">
          <h1 className="font-[family-name:var(--font-tektur)] text-[80px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[234px] tracking-tight text-black">
            <span className="block">Enotrium</span>
            <span className="block">
              Edge{" "}
              <span className="text-[0.5em] align-middle inline-block">↓</span>
            </span>
            <span className="block">AI</span>
          </h1>
        </div>

        {/* Description row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 mb-16">
          {/* Left - Inter Regular 24 */}
          <p className="font-[family-name:var(--font-inter)] text-base md:text-lg lg:text-[24px] font-normal leading-relaxed text-black/80 max-w-[240px] shrink-0">
            Real-time,
            <br />
            Spiking Neural
            <br />
            Networks
          </p>

          {/* Right - Inter Medium 48 (Line Height 58) */}
          <p className="font-[family-name:var(--font-inter)] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium lg:leading-[58px] leading-snug text-black max-w-2xl">
            A living nervous system that thinks, learns, and acts on-device while flying.
          </p>
        </div>

        <div className="h-px w-full bg-black/20 mb-16" />

        {/* Opening */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-8">
            Live-thinking UAVs with SNNs
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium text-black">
            Enotrium Edge AI runs spiking neural networks (SNNs) directly on UAVs and edge sensors, enabling on-device learning via local plasticity rules instead of backpropagation, ultra-low-power event-driven inference tailored for drone payloads, and dual-timescale adaptation that stabilizes long-term memory while responding instantly to environmental shifts.
          </p>
        </div>

        {/* Callout */}
        <div className="border-l-2 border-black pl-8 mb-20 max-w-3xl">
          <p className="text-base sm:text-lg leading-relaxed font-medium text-black/80">
            Rather than relying on pre-trained, static models, Enotrium's UAVs continuously adapt to changing fields, lighting, atmospheric conditions, and sensor drift — all without re-training or cloud connectivity.
          </p>
        </div>

        {/* Body Paragraphs */}
        <div className="space-y-10 max-w-3xl mb-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-8">
            Edge AI architecture for drones
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-medium text-black">
            Enotrium Edge AI sits between your drone hardware and your Agri-Intelligence Platform (AIP), forming a real-time perception-to-action loop:
          </p>

          <div className="space-y-6 pl-6">
            <div>
              <h3 className="text-xl font-bold text-black mb-2">Perception</h3>
              <p className="text-base sm:text-lg leading-relaxed font-medium text-black/80">
                Hyperspectral, RGB, and auxiliary sensors on UAVs feed raw spectral-spatial cubes into a custom 3D SNN that processes full wavelength stacks in real time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-2">Online learning</h3>
              <p className="text-base sm:text-lg leading-relaxed font-medium text-black/80">
                SNNs use local error-modulated plasticity (e.g., dual-timescale Hebbian accumulators) to update internal weights as contamination, soil chemistry, or weather shifts occur mid-flight.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-2">Decision & actuation</h3>
              <p className="text-base sm:text-lg leading-relaxed font-medium text-black/80">
                Edge-AI agents onboard the UAV generate low-latency decisions such as which sub-fields to rescan at higher resolution, when to trigger soil-remediation alerts, and how to route raw material directly to processing based on real-time spectral quality.
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg leading-relaxed font-medium text-black">
            This architecture keeps data localized, minimizes bandwidth, and enables deterministically bounded latency — critical for autonomous, safety-critical UAV operations.
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-8 mt-16">
            Why SNNs change the game
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-medium text-black">
            Compared with traditional transformers or deep CNNs, Enotrium Edge AI SNNs provide:
          </p>

          <div className="border border-black/20 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-black/5">
                <tr>
                  <th className="text-left p-4 text-sm font-bold text-black">Aspect</th>
                  <th className="text-left p-4 text-sm font-bold text-black">Transformers / CNNs</th>
                  <th className="text-left p-4 text-sm font-bold text-black">Enotrium SNN Edge AI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-black/10">
                  <td className="p-4 text-sm text-black">Compute paradigm</td>
                  <td className="p-4 text-sm text-black/80">Dense, batched, static inference</td>
                  <td className="p-4 text-sm text-black/80">Event-driven, streaming, on-device adaptation</td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="p-4 text-sm text-black">Power consumption</td>
                  <td className="p-4 text-sm text-black/80">High (often GPU-class)</td>
                  <td className="p-4 text-sm text-black/80">Orders of magnitude lower; fits UAV power budgets</td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="p-4 text-sm text-black">Memory footprint</td>
                  <td className="p-4 text-sm text-black/80">Growing with model size</td>
                  <td className="p-4 text-sm text-black/80">Constant-memory, fixed-point SNNs</td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="p-4 text-sm text-black">Learning at deployment</td>
                  <td className="p-4 text-sm text-black/80">Static after deployment</td>
                  <td className="p-4 text-sm text-black/80">Continuous online learning without backprop</td>
                </tr>
                <tr className="border-t border-black/10">
                  <td className="p-4 text-sm text-black">Handling sensor drift</td>
                  <td className="p-4 text-sm text-black/80">Degrades with distribution shift</td>
                  <td className="p-4 text-sm text-black/80">Recovers 3–10× faster via dual-timescale rules</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-base sm:text-lg leading-relaxed font-medium text-black">
            Enotrium's SNNs are not just "neural models on small hardware"; they are circuit-level, fixed-point designs that map cleanly to FPGA- or neuromorphic-class accelerators, enabling implantable, drone-mounted, and industrial-IoT deployments from the same core architecture.
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-8 mt-16">
            Live-thinking use cases
          </h2>

          <div className="space-y-8">
            <div className="border-l-2 border-black pl-6">
              <h3 className="text-xl font-bold text-black mb-2">1. Autonomous, hyperspectral UAVs</h3>
              <p className="text-base sm:text-lg leading-relaxed font-medium text-black/80">
                Drones equipped with Enotrium Edge AI fly austere routes, continuously updating soil-chemistry and contaminant maps in real time. When a field's spectral signature suddenly shifts (e.g., new pesticide runoff or PFAS spill), the SNN triggers targeted resampling and routes the data to the AIP's contracting layer, which can renegotiate offtake terms or reroute biomass to bio-remediation processing.
              </p>
            </div>

            <div className="border-l-2 border-black pl-6">
              <h3 className="text-xl font-bold text-black mb-2">2. Real-time anomaly detection & find-fix-track</h3>
              <p className="text-base sm:text-lg leading-relaxed font-medium text-black/80">
                Edge-AI SNNs on UAVs detect spectral anomalies indicative of agroterrorism, microbial contamination, or engineered biological agents. Metadata-only streams (coordinates, anomaly type, confidence) are sent to command centers, preserving bandwidth while enabling rapid, closed-loop decision-making.
              </p>
            </div>

            <div className="border-l-2 border-black pl-6">
              <h3 className="text-xl font-bold text-black mb-2">3. Predictive maintenance & system health</h3>
              <p className="text-base sm:text-lg leading-relaxed font-medium text-black/80">
                SNNs on UAV motors, batteries, and payload systems learn normal operating signatures and detect incipient failures. Alerts queue preventive maintenance without waiting for offline model retraining, extending fleet life and reducing downtime.
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-8 mt-16">
            Cloud dependency: the edge-AI story
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-medium text-black">
            Enotrium Edge AI is more than a drone-side accelerator; it is the live-thinking nervous system that closes the loop between raw hyperspectral percepts, economic incentives in the AIP, and physical material flows in downstream manufacturing.
          </p>

          <p className="text-base sm:text-lg leading-relaxed font-medium text-black">
            By pushing SNN-based intelligence to the edge, Enotrium ensures resilience against sensor drift and distribution shift, autonomy in low-bandwidth or disconnected environments, and sovereign control over the agri-industrial supply chain — from soil to fiber, from drones to decarbonization.
          </p>

          <p className="text-base sm:text-lg leading-relaxed font-bold text-black mt-8">
            This is what Enotrium is building. Not for today, for the next century.
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
