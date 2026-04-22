export function VineyardScene() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="50%" stopColor="#16213e" />
          <stop offset="100%" stopColor="#0f3460" />
        </linearGradient>
        <linearGradient id="groundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#0d1b2a" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="800" height="600" fill="url(#skyGradient)" />

      {/* Sun/Moon glow */}
      <circle cx="650" cy="100" r="60" fill="rgba(255, 200, 100, 0.1)" />
      <circle cx="650" cy="100" r="40" fill="rgba(255, 200, 100, 0.15)" />

      {/* Mountains in background */}
      <path d="M0 350 L150 250 L300 350 L450 280 L600 350 L800 300 L800 600 L0 600 Z" fill="rgba(30, 40, 60, 0.5)" />
      <path d="M0 400 L200 320 L400 400 L550 340 L800 380 L800 600 L0 600 Z" fill="rgba(20, 30, 50, 0.6)" />

      {/* Ground */}
      <rect x="0" y="400" width="800" height="200" fill="url(#groundGradient)" />

      {/* Vineyard rows */}
      <g stroke="rgba(100, 150, 100, 0.3)" strokeWidth="1" fill="none">
        {/* Row 1 */}
        <line x1="50" y1="420" x2="50" y2="550" />
        <line x1="50" y1="450" x2="120" y2="450" />
        <circle cx="50" cy="450" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="70" cy="450" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="90" cy="450" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="110" cy="450" r="8" fill="rgba(150, 200, 100, 0.4)" />

        {/* Row 2 */}
        <line x1="200" y1="430" x2="200" y2="560" />
        <line x1="200" y1="460" x2="270" y2="460" />
        <circle cx="200" cy="460" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="220" cy="460" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="240" cy="460" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="260" cy="460" r="8" fill="rgba(150, 200, 100, 0.4)" />

        {/* Row 3 */}
        <line x1="350" y1="425" x2="350" y2="555" />
        <line x1="350" y1="455" x2="420" y2="455" />
        <circle cx="350" cy="455" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="370" cy="455" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="390" cy="455" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="410" cy="455" r="8" fill="rgba(150, 200, 100, 0.4)" />

        {/* Row 4 */}
        <line x1="500" y1="435" x2="500" y2="565" />
        <line x1="500" y1="465" x2="570" y2="465" />
        <circle cx="500" cy="465" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="520" cy="465" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="540" cy="465" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="560" cy="465" r="8" fill="rgba(150, 200, 100, 0.4)" />

        {/* Row 5 */}
        <line x1="650" y1="440" x2="650" y2="570" />
        <line x1="650" y1="470" x2="720" y2="470" />
        <circle cx="650" cy="470" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="670" cy="470" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="690" cy="470" r="8" fill="rgba(150, 200, 100, 0.4)" />
        <circle cx="710" cy="470" r="8" fill="rgba(150, 200, 100, 0.4)" />
      </g>

      {/* Text overlay */}
      <text x="400" y="280" textAnchor="middle" fill="white" fontSize="48" fontWeight="300" fontFamily="var(--font-inter)">
        RESTORING AMERICAN
      </text>
      <text x="400" y="340" textAnchor="middle" fill="white" fontSize="48" fontWeight="300" fontFamily="var(--font-inter)">
        AGRICULTURE
      </text>
      <text x="400" y="380" textAnchor="middle" fill="rgba(6, 182, 212, 0.8)" fontSize="32" fontWeight="300" fontFamily="var(--font-inter)" letterSpacing="4">
        ENOTRIUM AIP
      </text>

      {/* Decorative lines */}
      <line x1="200" y1="400" x2="600" y2="400" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
      <line x1="250" y1="390" x2="550" y2="390" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
    </svg>
  );
}
