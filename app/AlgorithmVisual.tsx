export default function AlgorithmVisual() {
  return (
    <svg
      className="absolute left-0 top-0 h-full w-2/3 opacity-60 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 800"
      fill="none"
    >
      {/* Main vertical lines */}
      <line x1="250" y1="-400" x2="280" y2="-220" stroke="#c026d3" strokeWidth="8" />
      <line x1="280" y1="-220" x2="220" y2="-40" stroke="#c026d3" strokeWidth="8" />
      <line x1="220" y1="-40" x2="320" y2="140" stroke="#c026d3" strokeWidth="8" />
      <line x1="320" y1="140" x2="260" y2="320" stroke="#c026d3" strokeWidth="8" />
      <line x1="260" y1="320" x2="340" y2="500" stroke="#c026d3" strokeWidth="8" />
      <line x1="340" y1="500" x2="240" y2="680" stroke="#c026d3" strokeWidth="8" />
      <line x1="240" y1="680" x2="380" y2="860" stroke="#c026d3" strokeWidth="8" />
      <line x1="380" y1="860" x2="280" y2="1040" stroke="#c026d3" strokeWidth="8" />
      <line x1="280" y1="1040" x2="360" y2="1220" stroke="#c026d3" strokeWidth="8" />
      <line x1="360" y1="1220" x2="220" y2="1400" stroke="#c026d3" strokeWidth="8" />
      <line x1="220" y1="1400" x2="400" y2="1580" stroke="#c026d3" strokeWidth="8" />
      <line x1="400" y1="1580" x2="240" y2="1760" stroke="#c026d3" strokeWidth="8" />
      <line x1="240" y1="1760" x2="380" y2="1940" stroke="#c026d3" strokeWidth="8" />
      <line x1="380" y1="1940" x2="300" y2="2120" stroke="#c026d3" strokeWidth="8" />
      <line x1="300" y1="2120" x2="420" y2="2300" stroke="#c026d3" strokeWidth="8" />

      {/* Angled branches with shapes - varied angles */}
      {/* Upward branches (into headphones area) */}
      {/* Branch - right side, steep upward angle */}
      <line x1="280" y1="-220" x2="480" y2="-300" stroke="#c026d3" strokeWidth="6" />
      <polygon points="470,-310 480,-300 475,-290 465,-290 460,-300" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - left side, shallow downward angle */}
      <line x1="220" y1="-40" x2="180" y2="0" stroke="#c026d3" strokeWidth="6" />
      <circle cx="175" cy="5" r="24" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - right side, medium upward angle */}
      <line x1="320" y1="140" x2="480" y2="100" stroke="#c026d3" strokeWidth="6" />
      <polygon points="470,90 480,100 475,110 465,110 460,100" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - left side, steep downward angle */}
      <line x1="260" y1="320" x2="80" y2="380" stroke="#c026d3" strokeWidth="6" />
      <polygon points="75,375 85,370 80,380 70,380 65,370" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - right side, shallow upward angle */}
      <line x1="340" y1="500" x2="480" y2="480" stroke="#c026d3" strokeWidth="6" />
      <circle cx="475" cy="485" r="24" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - left side, medium downward angle */}
      <line x1="240" y1="680" x2="120" y2="720" stroke="#c026d3" strokeWidth="6" />
      <polygon points="115,715 125,710 120,720 110,720 105,710" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - right side, steep downward angle */}
      <line x1="380" y1="860" x2="580" y2="940" stroke="#c026d3" strokeWidth="6" />
      <rect x="570" y="935" width="60" height="60" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - left side, shallow upward angle */}
      <line x1="280" y1="1040" x2="200" y2="1000" stroke="#c026d3" strokeWidth="6" />
      <circle cx="195" cy="995" r="24" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - right side, medium upward angle */}
      <line x1="360" y1="1220" x2="520" y2="1180" stroke="#c026d3" strokeWidth="6" />
      <polygon points="510,1175 520,1180 515,1190 505,1190 500,1180" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - left side, steep downward angle */}
      <line x1="220" y1="1400" x2="60" y2="1480" stroke="#c026d3" strokeWidth="6" />
      <polygon points="55,1475 65,1470 60,1480 50,1480 45,1470" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - right side, shallow upward angle */}
      <line x1="400" y1="1580" x2="540" y2="1560" stroke="#c026d3" strokeWidth="6" />
      <circle cx="535" cy="1565" r="24" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - left side, medium downward angle */}
      <line x1="240" y1="1760" x2="160" y2="1800" stroke="#c026d3" strokeWidth="6" />
      <rect x="150" y="1795" width="60" height="60" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - right side, steep upward angle */}
      <line x1="380" y1="1940" x2="580" y2="1860" stroke="#c026d3" strokeWidth="6" />
      <polygon points="570,1855 580,1860 575,1870 565,1870 560,1860" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - left side, shallow downward angle */}
      <line x1="300" y1="2120" x2="240" y2="2160" stroke="#c026d3" strokeWidth="6" />
      <circle cx="235" cy="2165" r="24" fill="none" stroke="#c026d3" strokeWidth="4" />
      
      {/* Branch - right side, medium upward angle */}
      <line x1="420" y1="2300" x2="580" y2="2260" stroke="#c026d3" strokeWidth="6" />
      <polygon points="570,2255 580,2260 575,2270 565,2270 560,2260" fill="none" stroke="#c026d3" strokeWidth="4" />

      {/* Main nodes */}
      <circle cx="250" cy="-400" r="15" fill="#c026d3" />
      <circle cx="280" cy="-220" r="15" fill="#c026d3" />
      <circle cx="220" cy="-40" r="15" fill="#c026d3" />
      <circle cx="320" cy="140" r="15" fill="#c026d3" />
      <circle cx="260" cy="320" r="15" fill="#c026d3" />
      <circle cx="340" cy="500" r="15" fill="#c026d3" />
      <circle cx="240" cy="680" r="15" fill="#c026d3" />
      <circle cx="380" cy="860" r="15" fill="#c026d3" />
      <circle cx="280" cy="1040" r="15" fill="#c026d3" />
      <circle cx="360" cy="1220" r="15" fill="#c026d3" />
      <circle cx="220" cy="1400" r="15" fill="#c026d3" />
      <circle cx="400" cy="1580" r="15" fill="#c026d3" />
      <circle cx="240" cy="1760" r="15" fill="#c026d3" />
      <circle cx="380" cy="1940" r="15" fill="#c026d3" />
      <circle cx="300" cy="2120" r="15" fill="#c026d3" />
      <circle cx="420" cy="2300" r="15" fill="#c026d3" />
    </svg>
  );
}
