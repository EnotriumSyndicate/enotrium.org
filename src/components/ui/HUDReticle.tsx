export function HUDReticle() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central reticle */}
      <g stroke="white" strokeWidth="1.5" fill="none">
        {/* Outer circle */}
        <circle cx="400" cy="300" r="120" opacity="0.8" />
        {/* Middle circle */}
        <circle cx="400" cy="300" r="80" opacity="0.6" />
        {/* Inner circle */}
        <circle cx="400" cy="300" r="40" opacity="0.4" />
        
        {/* Crosshair horizontal */}
        <line x1="250" y1="300" x2="550" y2="300" opacity="0.7" />
        {/* Crosshair vertical */}
        <line x1="400" y1="150" x2="400" y2="450" opacity="0.7" />
        
        {/* Center dot */}
        <circle cx="400" cy="300" r="4" fill="white" opacity="0.9" />
      </g>

      {/* Left side display - OBJECT 01 */}
      <g stroke="white" strokeWidth="1" fill="none">
        {/* Left bracket */}
        <path d="M 120 250 L 100 250 L 100 350 L 120 350" opacity="0.8" />
        <path d="M 180 250 L 200 250 L 200 350 L 180 350" opacity="0.8" />
        
        {/* Top triangle pointing in */}
        <path d="M 140 230 L 150 245 L 130 245 Z" opacity="0.7" />
        {/* Bottom triangle pointing in */}
        <path d="M 140 370 L 150 355 L 130 355 Z" opacity="0.7" />
        
        {/* Connection nodes */}
        <circle cx="100" cy="250" r="3" fill="white" opacity="0.6" />
        <circle cx="100" cy="350" r="3" fill="white" opacity="0.6" />
        <circle cx="200" cy="250" r="3" fill="white" opacity="0.6" />
        <circle cx="200" cy="350" r="3" fill="white" opacity="0.6" />
        
        {/* Dashed line to center */}
        <line x1="200" y1="300" x2="280" y2="300" strokeDasharray="5,5" opacity="0.5" />
        
        {/* Text */}
        <text x="150" y="295" fill="white" fontSize="14" textAnchor="middle" opacity="0.9" fontFamily="monospace">
          OBJECT 01
        </text>
        <text x="60" y="305" fill="white" fontSize="12" textAnchor="end" opacity="0.7" fontFamily="monospace">
          51143
        </text>
        <line x1="65" y1="300" x2="95" y2="300" strokeDasharray="3,3" opacity="0.5" />
      </g>

      {/* Right side display - OBJECT 02 */}
      <g stroke="white" strokeWidth="1" fill="none">
        {/* Right bracket */}
        <path d="M 680 250 L 700 250 L 700 350 L 680 350" opacity="0.8" />
        <path d="M 620 250 L 600 250 L 600 350 L 620 350" opacity="0.8" />
        
        {/* Top triangle pointing in */}
        <path d="M 660 230 L 650 245 L 670 245 Z" opacity="0.7" />
        {/* Bottom triangle pointing in */}
        <path d="M 660 370 L 650 355 L 670 355 Z" opacity="0.7" />
        
        {/* Connection nodes */}
        <circle cx="700" cy="250" r="3" fill="white" opacity="0.6" />
        <circle cx="700" cy="350" r="3" fill="white" opacity="0.6" />
        <circle cx="600" cy="250" r="3" fill="white" opacity="0.6" />
        <circle cx="600" cy="350" r="3" fill="white" opacity="0.6" />
        
        {/* Dashed line to center */}
        <line x1="600" y1="300" x2="520" y2="300" strokeDasharray="5,5" opacity="0.5" />
        
        {/* Text */}
        <text x="650" y="295" fill="white" fontSize="14" textAnchor="middle" opacity="0.9" fontFamily="monospace">
          OBJECT 02
        </text>
        <text x="740" y="305" fill="white" fontSize="12" textAnchor="start" opacity="0.7" fontFamily="monospace">
          52441
        </text>
        <line x1="735" y1="300" x2="705" y2="300" strokeDasharray="3,3" opacity="0.5" />
      </g>

      {/* Additional decorative elements */}
      <g stroke="white" strokeWidth="0.5" fill="none" opacity="0.3">
        {/* Corner brackets */}
        <path d="M 50 50 L 80 50 L 80 80" />
        <path d="M 750 50 L 720 50 L 720 80" />
        <path d="M 50 550 L 80 550 L 80 520" />
        <path d="M 750 550 L 720 550 L 720 520" />
        
        {/* Small ticks */}
        <line x1="390" y1="100" x2="410" y2="100" />
        <line x1="390" y1="500" x2="410" y2="500" />
        <line x1="100" y1="290" x2="100" y2="310" />
        <line x1="700" y1="290" x2="700" y2="310" />
      </g>
    </svg>
  );
}
