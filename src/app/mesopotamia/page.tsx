"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

type TagType = "TECHNOLOGY" | "CORPORATE" | "LEGISLATION" | "CHEMICAL";

interface Milestone {
  year: string;
  description: string;
  tag: TagType;
  farmPopulation?: number;
  note?: string;
  link?: string;
}

const milestones: Milestone[] = [
  {
    year: "10000 BC",
    description: "Neolithic Revolution – First Agriculture",
    tag: "TECHNOLOGY",
    note: "The birth of agriculture. Humans transition from hunter-gatherers to farmers. The foundation of civilization.",
  },
  {
    year: "6000 BC",
    description: "Ancient Mesopotamians – Irrigation Systems",
    tag: "TECHNOLOGY",
    note: "The first large-scale irrigation. The Tigris and Euphrates tamed. The Fertile Crescent earns its name.",
  },
  {
    year: "4000 BC",
    description: "Sumerians – The Plow",
    tag: "TECHNOLOGY",
    note: "The plow transforms agriculture. One farmer can feed more people. Cities grow. Civilization accelerates.",
  },
  {
    year: "3000 BC",
    description: "Ancient Egyptians – Crop Rotation",
    tag: "TECHNOLOGY",
    note: "The Nile floods predictably. Egyptians learn to rotate crops. Soil health preserved for millennia.",
  },
  {
    year: "2000 BC",
    description: "Ancient Chinese – Silk Production",
    tag: "TECHNOLOGY",
    note: "Sericulture begins. The Silk Road will eventually connect East and West through agriculture.",
  },
  {
    year: "900 BC",
    description: "Ancient Greeks – Viticulture",
    tag: "TECHNOLOGY",
    note: "Wine becomes central to Greek culture. Vineyards spread across the Mediterranean. Terroir matters.",
  },
  {
    year: "100 BC",
    description: "Romans – Large-Scale Farming",
    tag: "CORPORATE",
    note: "Latifundia emerge. Large estates worked by slaves. The first industrial agriculture model.",
  },
  {
    year: "900 AD",
    description: "Medieval Europeans – Three-Field System",
    tag: "TECHNOLOGY",
    note: "The three-field system revolutionizes medieval farming. Crop rotation becomes systematic. Yields increase.",
  },
  {
    year: "1701",
    description: "Jethro Tull – Seed Drill",
    tag: "TECHNOLOGY",
    note: "The seed drill allows precise planting. Less waste. Higher yields. The agricultural revolution begins.",
  },
  {
    year: "1843",
    description: "John Lawes – Superphosphate Fertilizer",
    tag: "CHEMICAL",
    note: "The first artificial fertilizer. Chemistry enters the field. Yields soar. Soil dependency begins.",
  },
  {
    year: "1866",
    description: "Gregor Mendel – Genetics of Inheritance",
    tag: "TECHNOLOGY",
    note: "The laws of inheritance discovered. Breeding becomes science. The foundation of modern genetics.",
  },
  {
    year: "1793",
    description: "Cotton gin invented – mechanizing harvest, entrenching slavery and monoculture",
    tag: "TECHNOLOGY",
    farmPopulation: 6.8,
    note: "The first mechanical harvester. It seemed like progress. It was the beginning of the end for small-scale farming in America.",
  },
  {
    year: "1862",
    description: "USDA established – the first federal hand reaches into the field",
    tag: "LEGISLATION",
    farmPopulation: 6.6,
    note: "Agriculture becomes a federal concern. The government's role in farming would only grow from here.",
  },
  {
    year: "1910",
    description: "American Century – 6 million farms – peak of US agricultural self-sufficiency",
    tag: "TECHNOLOGY",
    farmPopulation: 6.0,
    note: "The high water mark. More farms than ever before. More independence than ever before. It would never be this good again.",
  },
  {
    year: "1922",
    description: "Capper-Volstead Act – cooperatives shielded from antitrust, consolidation begins",
    tag: "LEGISLATION",
    farmPopulation: 5.5,
    note: "The law that let farmers organize also let them consolidate. The first step toward industrial agriculture.",
  },
  {
    year: "1928",
    description: "Baruch & Ruml – Wall Street designs the New Deal's agricultural price controls",
    tag: "CORPORATE",
    farmPopulation: 5.2,
    note: "Bernard Baruch and Beardsley Ruml, architects of the Federal Reserve, turn their attention to farm prices. The market becomes a policy tool.",
  },
  {
    year: "1933",
    description: "FDR & the AAA – Agricultural Adjustment Act – farmers paid not to farm, production controlled",
    tag: "LEGISLATION",
    farmPopulation: 4.8,
    note: "The government begins paying farmers to destroy crops. 'The curious task of economics is to demonstrate to men how little they really know about what they imagine they can design.' – Hayek",
  },
  {
    year: "1944",
    description: "Green Revolution – high-yield monocrops scale globally, chemical dependence institutionalized",
    tag: "TECHNOLOGY",
    farmPopulation: 4.5,
    note: "Norman Borlaug's miracle seeds. Yields soar. So does chemical dependency. The land becomes a factory.",
  },
  {
    year: "1950",
    description: "American Agribusiness – Rapid consolidation – small farms absorbed into industrial operations",
    tag: "CORPORATE",
    farmPopulation: 4.0,
    note: "The family farm begins its long decline. Corporations enter the field. The era of agribusiness begins.",
  },
  {
    year: "1974",
    description: "Monsanto – Glyphosate introduced to the US market – herbicide dependency begins",
    tag: "CHEMICAL",
    farmPopulation: 3.2,
    note: "Roundup hits the market. Farmers become dependent on a single chemical. A single company. A single way of farming.",
  },
  {
    year: "1985",
    description: "Farm Bill reformed – commodity subsidies formalized, specialty crops sidelined",
    tag: "LEGISLATION",
    farmPopulation: 2.8,
    note: "The government picks winners. Corn, soy, wheat. Everything else is on its own. The food system becomes a monoculture.",
  },
  {
    year: "1996",
    description: "Monsanto – Roundup Ready soybean – GMO seed patents bind farmers to chemical ecosystems",
    tag: "CORPORATE",
    farmPopulation: 2.5,
    note: "Patented seeds. Farmers can't save them. They must buy them every year. From Monsanto. The lock-in is complete.",
  },
  {
    year: "2008",
    description: "Global recession – Commodity price collapse – USDA bailouts begin normalizing ad hoc payments",
    tag: "CORPORATE",
    farmPopulation: 2.2,
    note: "The first of many bailouts. The government becomes the lender of last resort. The safety net becomes a trap.",
  },
  {
    year: "2012",
    description: "Doudna & Charpentier – CRISPR – biology becomes editable, agriculture's genetic future opens",
    tag: "TECHNOLOGY",
    farmPopulation: 2.1,
    note: "The gene editor. A tool that could free agriculture from chemical dependency. Or deepen it. The choice is ours.",
  },
  {
    year: "2023",
    description: "USDA – $12 billion Farmer Bridge Assistance – ad hoc bailout exceeds $30B since January",
    tag: "CORPORATE",
    farmPopulation: 2.0,
    note: "The bailouts continue. The system is broken. The farmers are trapped. The only way out is to build something new.",
  },
  {
    year: "Future",
    description: "The new order – bridging agriculture to real industry",
    tag: "TECHNOLOGY",
    farmPopulation: 1.9,
    note: "Enotrium. A new path. A new model. A new future for American agriculture.",
    link: "/aip",
  },
];

const farmPopulationData = [
  { year: 1793, population: 6.8 },
  { year: 1862, population: 6.6 },
  { year: 1910, population: 6.0 },
  { year: 1922, population: 5.5 },
  { year: 1928, population: 5.2 },
  { year: 1933, population: 4.8 },
  { year: 1944, population: 4.5 },
  { year: 1950, population: 4.0 },
  { year: 1974, population: 3.2 },
  { year: 1985, population: 2.8 },
  { year: 1996, population: 2.5 },
  { year: 2008, population: 2.2 },
  { year: 2012, population: 2.1 },
  { year: 2023, population: 2.0 },
  { year: 2025, population: 1.9 },
];

const tagColors: Record<TagType, string> = {
  TECHNOLOGY: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  CORPORATE: "text-red-400 bg-red-400/10 border-red-400/20",
  LEGISLATION: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  CHEMICAL: "text-pink-400 bg-pink-400/10 border-pink-400/20",
};

export default function MesopotamiaPage() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);
  const [currentFarmPopulation, setCurrentFarmPopulation] = useState<number>(2.0);
  const [currentNote, setCurrentNote] = useState<string>("Hover any event to see the farming population at that moment in history.");

  useEffect(() => {
    const prev = document.documentElement.style.backgroundColor;
    document.documentElement.style.backgroundColor = "#0a0a0a";
    return () => {
      document.documentElement.style.backgroundColor = prev;
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-index]").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleHover = (milestone: Milestone) => {
    setHoveredYear(milestone.year);
    setCurrentFarmPopulation(milestone.farmPopulation || 2.0);
    setCurrentNote(milestone.note || "Hover any event to see the farming population at that moment in history.");
  };

  const handleLeave = () => {
    setHoveredYear(null);
    setCurrentFarmPopulation(2.0);
    setCurrentNote("Hover any event to see the farming population at that moment in history.");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-neutral-500 mb-4 font-[family-name:var(--font-inter)]">
          From the soil, a reckoning
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-[family-name:var(--font-tektur)] leading-tight">
          THE FUTURE OF AGRICULTURE
        </h1>
        <div className="mt-8 mb-12 h-px w-full bg-neutral-800" />
      </section>

      {/* Main Content */}
      <section className="px-6 lg:px-16 max-w-[1400px] mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          {/* Timeline */}
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                data-index={index}
                className={`transition-all duration-700 ease-out ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                onMouseEnter={() => handleHover(milestone)}
                onMouseLeave={handleLeave}
              >
                <div
                  className={`group py-4 border-b border-neutral-800 hover:border-neutral-600 transition-colors cursor-pointer ${
                    hoveredYear === milestone.year ? "bg-neutral-900/50" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-mono text-neutral-500 min-w-[80px] shrink-0 font-[family-name:var(--font-inter)]">
                      {milestone.year}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors font-[family-name:var(--font-inter)] leading-relaxed">
                        {milestone.description}
                      </p>
                      <span
                        className={`inline-block mt-2 px-2 py-1 text-[10px] font-semibold tracking-wider uppercase border ${tagColors[milestone.tag]}`}
                      >
                        {milestone.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar - US Farmers */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-neutral-500 mb-4 font-[family-name:var(--font-inter)]">
                US FARMERS
              </p>
              
              {/* Farm Population Display */}
              <div className="mb-6">
                <p className="text-5xl font-bold font-[family-name:var(--font-tektur)] text-white mb-2">
                  {currentFarmPopulation.toFixed(1)}M
                </p>
                <p className="text-xs text-neutral-400 font-[family-name:var(--font-inter)]">
                  farms in {hoveredYear || "2025"}
                </p>
              </div>

              {/* Sparkline Chart */}
              <div className="mb-6">
                <svg
                  width="100%"
                  height="120"
                  viewBox="0 0 300 120"
                  className="overflow-visible"
                >
                  {/* Grid lines */}
                  <line x1="0" y1="0" x2="300" y2="0" stroke="#333" strokeWidth="1" />
                  <line x1="0" y1="60" x2="300" y2="60" stroke="#333" strokeWidth="1" strokeDasharray="4" />
                  <line x1="0" y1="120" x2="300" y2="120" stroke="#333" strokeWidth="1" />
                  
                  {/* Sparkline */}
                  <polyline
                    points={farmPopulationData
                      .map((d, i) => {
                        const x = (i / (farmPopulationData.length - 1)) * 300;
                        const y = 120 - ((d.population - 1.5) / (6.8 - 1.5)) * 120;
                        return `${x},${y}`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Current point indicator */}
                  {hoveredYear && (() => {
                    const hoveredData = farmPopulationData.find(d => d.year.toString() === hoveredYear);
                    if (!hoveredData) return null;
                    const i = farmPopulationData.indexOf(hoveredData);
                    const x = (i / (farmPopulationData.length - 1)) * 300;
                    const y = 120 - ((hoveredData.population - 1.5) / (6.8 - 1.5)) * 120;
                    return (
                      <>
                        <circle cx={x} cy={y} r="6" fill="#fff" />
                        <circle cx={x} cy={y} r="10" fill="none" stroke="#fff" strokeWidth="2" opacity="0.3" />
                      </>
                    );
                  })()}
                </svg>
              </div>

              {/* Contextual Note */}
              <div className="border-t border-neutral-800 pt-4">
                <p className="text-xs text-neutral-400 leading-relaxed font-[family-name:var(--font-inter)]">
                  {currentNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
