"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const researchProjects = [
  {
    title: "Arthedain — Edge AI for Autonomous Systems",
    href: "/research/arthedain",
    date: "April 2026",
  },
  {
    title: "Vegard — Autonomous Drone Fleet Coordination",
    href: "/research/vegard",
    date: "April 2026",
  },
  {
    title: "Icarus — Hyperspectral Soil Intelligence",
    href: "/research/icarus",
    date: "March 2026",
  },
  {
    title: "Questions Concerning the Future of Technology",
    href: "/research/questions-technology",
    date: "February 2026",
  },
  {
    title: "A New Mesopotamia — The Future of Farming is Autonomous",
    href: "/research/a-new-mesopotamia",
    date: "January 2026",
  },
  {
    title: "Agri Intelligence — Enotrium AIP: A Decentralized Intelligence Platform",
    href: "/research/agri-intelligence",
    date: "January 2026",
  },
  {
    title: "Free Trade Accounts — Untraceable Control Systems",
    href: "/research/orpheus",
    date: "July 2025",
  },
];

export default function ResearchPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111111] font-[family-name:var(--font-dm-mono)] font-light text-[14px] leading-[1.75]">
      {/* Nav */}
      <nav className="sticky top-0 z-100 bg-white/92 backdrop-blur-[12px] border-b border-[#e4e4e0] py-[18px]">
        <div className="max-w-[720px] mx-auto px-[32px] flex items-center justify-between">
          <Link href="/" className="block">
            <img src="/logo.png" alt="Enotrium" className="h-[28px] w-auto" />
          </Link>
          <ul className="flex gap-[28px] list-none">
            <li><Link href="/" className="text-[11px] tracking-[0.09em] uppercase text-[#777777] no-underline hover:text-[#111111] transition-colors">Home</Link></li>
            <li><Link href="/research" className="text-[11px] tracking-[0.09em] uppercase text-[#111111] no-underline">Research</Link></li>
            <li><Link href="/aip" className="text-[11px] tracking-[0.09em] uppercase text-[#777777] no-underline hover:text-[#111111] transition-colors">AIP</Link></li>
          </ul>
        </div>
      </nav>

      <div className="max-w-[720px] mx-auto px-[32px]">
        {/* Hero */}
        <div className="py-[88px_0_64px] border-b border-[#e4e4e0]">
          <div className="text-[11px] tracking-[0.14em] uppercase text-[#777777] mb-[22px] flex items-center gap-[10px]">
            <span className="inline-block w-[20px] h-[1px] bg-[#777777]"></span>
            Research — Enotrium
          </div>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-[clamp(30px,5vw,50px)] font-normal text-[#111111] leading-[1.15] mb-[24px]">
            Building the future<br />of <em className="italic text-[#777777]">agri-intelligence.</em>
          </h1>
          <p className="max-w-[520px] text-[#777777] text-[14px] leading-[1.85] mb-[40px]">
            Enotrium Labs develops <strong className="font-normal text-[#111111]">edge-deployed AI systems</strong> for autonomous drone fleets, hyperspectral soil analysis, and decentralized intelligence platforms. Our research focuses on practical applications that transform industrial agriculture and environmental monitoring.
          </p>
          <div className="flex gap-[40px] flex-wrap pt-[32px] border-t border-[#e4e4e0]">
            <div className="flex flex-col gap-[4px]">
              <span className="font-[family-name:var(--font-dm-serif)] text-[26px] text-[#111111] leading-[1]">7</span>
              <span className="text-[10px] tracking-[0.09em] uppercase text-[#bbbbbb]">Projects</span>
            </div>
            <div className="flex flex-col gap-[4px]">
              <span className="font-[family-name:var(--font-dm-serif)] text-[26px] text-[#111111] leading-[1]">4</span>
              <span className="text-[10px] tracking-[0.09em] uppercase text-[#bbbbbb]">Core Areas</span>
            </div>
            <div className="flex flex-col gap-[4px]">
              <span className="font-[family-name:var(--font-dm-serif)] text-[26px] text-[#111111] leading-[1]">2025</span>
              <span className="text-[10px] tracking-[0.09em] uppercase text-[#bbbbbb]">Founded</span>
            </div>
          </div>
        </div>

        {/* Research Projects */}
        <section className={`py-[68px_0] border-b border-[#e4e4e0] transition-opacity duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[14px]'}`}>
          <div className="text-[10px] tracking-[0.14em] uppercase text-[#bbbbbb] mb-[18px]">Projects</div>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-[clamp(20px,3vw,28px)] font-normal text-[#111111] mb-[18px] leading-[1.25]">
            Research initiatives
          </h2>
          <p className="text-[#777777] leading-[1.85] mb-[14px]">
            Our projects span <strong className="font-normal text-[#111111]">edge AI, drone coordination, hyperspectral analysis, and decentralized systems</strong> — all focused on practical applications for agriculture and environmental monitoring.
          </p>

          <ul className="list-none border border-[#e4e4e0] mt-[28px]">
            {researchProjects.map((project, index) => (
              <li key={index} className="flex gap-[20px] py-[18px] px-[20px] border-b border-[#e4e4e0] last:border-b-0 hover:bg-[#f7f7f5] transition-colors">
                <span className="font-[family-name:var(--font-dm-serif)] text-[20px] text-[#e4e4e0] leading-[1] flex-shrink-0 pt-[2px] min-w-[26px]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <Link href={project.href} className="block group">
                    <strong className="block text-[#111111] mb-[3px] group-hover:text-[#777777] transition-colors">
                      {project.title}
                    </strong>
                    <span className="text-xs text-gray-300 font-serif">
                      {project.date}
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section className={`py-[68px_0] transition-opacity duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[14px]'}`}>
          <div className="text-[10px] tracking-[0.14em] uppercase text-[#bbbbbb] mb-[18px]">About</div>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-[clamp(20px,3vw,28px)] font-normal text-[#111111] mb-[18px] leading-[1.25]">
            Enotrium Labs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[32px]">
            <div>
              <p className="text-[#777777] leading-[1.85] mb-[14px]">
                Enotrium is an agri-intelligence research collective building the first scalable, drone-based soil health monitoring pipeline for regenerative agriculture.
              </p>
              <p className="text-[#777777] leading-[1.85]">
                Our mission is to <strong className="font-normal text-[#111111]">democratize precision agriculture</strong> through edge-deployed AI systems that operate without cloud dependency.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-dm-serif)] text-[17px] font-normal text-[#111111] mb-[8px]">Contact</h3>
              <p className="mt-[10px] text-[13px]">
                <a href="https://github.com/EnotriumSyndicate" target="_blank" rel="noopener noreferrer" className="text-[#777777] no-underline hover:text-[#111111] hover:underline">
                  GitHub — EnotriumSyndicate ↗
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-[28px_0] border-t border-[#e4e4e0]">
        <div className="max-w-[720px] mx-auto px-[32px] flex justify-between items-center flex-wrap gap-[10px]">
          <span className="text-[11px] text-[#bbbbbb] tracking-[0.05em]">© 2026 Enotrium</span>
          <ul className="flex gap-[20px] list-none">
            <li><Link href="/" className="text-[11px] text-[#bbbbbb] tracking-[0.05em] no-underline hover:text-[#111111]">Home</Link></li>
            <li><a href="https://github.com/EnotriumSyndicate" target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#bbbbbb] tracking-[0.05em] no-underline hover:text-[#111111]">GitHub</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

