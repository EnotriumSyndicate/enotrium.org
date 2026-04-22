export function IndustrialAgricultureScene() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(128,128,128,0.1)" />
        </linearGradient>
        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="800" height="600" fill="url(#bgGradient)" />

      {/* Complex grid pattern */}
      <g stroke="rgba(255,255,255,0.02)" strokeWidth="1">
        <line x1="0" y1="50" x2="800" y2="50" />
        <line x1="0" y1="100" x2="800" y2="100" />
        <line x1="0" y1="150" x2="800" y2="150" />
        <line x1="0" y1="200" x2="800" y2="200" />
        <line x1="0" y1="250" x2="800" y2="250" />
        <line x1="0" y1="300" x2="800" y2="300" />
        <line x1="0" y1="350" x2="800" y2="350" />
        <line x1="0" y1="400" x2="800" y2="400" />
        <line x1="0" y1="450" x2="800" y2="450" />
        <line x1="0" y1="500" x2="800" y2="500" />
        <line x1="0" y1="550" x2="800" y2="550" />
        <line x1="50" y1="0" x2="50" y2="600" />
        <line x1="100" y1="0" x2="100" y2="600" />
        <line x1="150" y1="0" x2="150" y2="600" />
        <line x1="200" y1="0" x2="200" y2="600" />
        <line x1="250" y1="0" x2="250" y2="600" />
        <line x1="300" y1="0" x2="300" y2="600" />
        <line x1="350" y1="0" x2="350" y2="600" />
        <line x1="400" y1="0" x2="400" y2="600" />
        <line x1="450" y1="0" x2="450" y2="600" />
        <line x1="500" y1="0" x2="500" y2="600" />
        <line x1="550" y1="0" x2="550" y2="600" />
        <line x1="600" y1="0" x2="600" y2="600" />
        <line x1="650" y1="0" x2="650" y2="600" />
        <line x1="700" y1="0" x2="700" y2="600" />
        <line x1="750" y1="0" x2="750" y2="600" />
      </g>

      {/* Diagonal grid lines */}
      <g stroke="rgba(255,255,255,0.01)" strokeWidth="1">
        <line x1="0" y1="0" x2="800" y2="600" />
        <line x1="100" y1="0" x2="800" y2="500" />
        <line x1="200" y1="0" x2="800" y2="400" />
        <line x1="300" y1="0" x2="800" y2="300" />
        <line x1="400" y1="0" x2="800" y2="200" />
        <line x1="500" y1="0" x2="800" y2="100" />
        <line x1="0" y1="100" x2="700" y2="600" />
        <line x1="0" y1="200" x2="600" y2="600" />
        <line x1="0" y1="300" x2="500" y2="600" />
        <line x1="0" y1="400" x2="400" y2="600" />
        <line x1="0" y1="500" x2="300" y2="600" />
      </g>

      {/* Central glow */}
      <circle cx="400" cy="300" r="300" fill="url(#glowGradient)" />

      {/* Concentric circles */}
      <circle cx="400" cy="300" r="250" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <circle cx="400" cy="300" r="200" fill="url(#accentGradient)" opacity="0.4" />
      <circle cx="400" cy="300" r="150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <circle cx="400" cy="300" r="100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <circle cx="400" cy="300" r="50" fill="rgba(255,255,255,0.03)" />

      {/* Hexagon pattern */}
      <g stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none">
        <polygon points="400,100 473,150 473,250 400,300 327,250 327,150" />
        <polygon points="400,300 473,350 473,450 400,500 327,450 327,350" />
        <polygon points="250,200 273,250 250,300 227,250" />
        <polygon points="550,200 573,250 550,300 527,250" />
        <polygon points="250,400 273,450 250,500 227,450" />
        <polygon points="550,400 573,450 550,500 527,450" />
      </g>

      {/* Decorative geometric elements */}
      <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none">
        <rect x="150" y="150" width="500" height="300" rx="4" />
        <rect x="170" y="170" width="460" height="260" rx="4" stroke="rgba(255,255,255,0.08)" />
        <rect x="190" y="190" width="420" height="220" rx="4" stroke="rgba(255,255,255,0.05)" />
      </g>

      {/* Corner brackets */}
      <g stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none">
        {/* Top left */}
        <polyline points="100,100 100,150 150,150" />
        {/* Top right */}
        <polyline points="700,100 700,150 650,150" />
        {/* Bottom left */}
        <polyline points="100,500 100,450 150,450" />
        {/* Bottom right */}
        <polyline points="700,500 700,450 650,450" />
      </g>

      {/* Corner dots */}
      <g fill="rgba(255,255,255,0.3)">
        <circle cx="100" cy="100" r="3" />
        <circle cx="700" cy="100" r="3" />
        <circle cx="100" cy="500" r="3" />
        <circle cx="700" cy="500" r="3" />
      </g>

      {/* Data points */}
      <g fill="rgba(255,255,255,0.15)">
        <circle cx="200" cy="200" r="2" />
        <circle cx="600" cy="200" r="2" />
        <circle cx="200" cy="400" r="2" />
        <circle cx="600" cy="400" r="2" />
        <circle cx="300" cy="250" r="2" />
        <circle cx="500" cy="250" r="2" />
        <circle cx="300" cy="350" r="2" />
        <circle cx="500" cy="350" r="2" />
      </g>

      {/* Main title */}
      <text x="400" y="250" textAnchor="middle" fill="white" fontSize="56" fontWeight="normal" fontFamily="var(--font-tektur)" letterSpacing="2">
        The Agri-Industrial
      </text>
      <text x="400" y="310" textAnchor="middle" fill="white" fontSize="56" fontWeight="normal" fontFamily="var(--font-tektur)" letterSpacing="2">
        Economy
      </text>

      {/* Subtitle text */}
      <text x="400" y="370" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="20" fontWeight="300" fontFamily="var(--font-inter)">
        AI-driven strategy,
      </text>
      <text x="400" y="400" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="20" fontWeight="300" fontFamily="var(--font-inter)">
        execution of the bio-economy,
      </text>
      <text x="400" y="430" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="20" fontWeight="300" fontFamily="var(--font-inter)">
        and establishment of the
      </text>
      <text x="400" y="460" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="20" fontWeight="300" fontFamily="var(--font-inter)">
        industrial base.
      </text>

      {/* Decorative lines */}
      <line x1="200" y1="480" x2="600" y2="480" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="250" y1="485" x2="550" y2="485" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <line x1="300" y1="490" x2="500" y2="490" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    </svg>
  );
}
