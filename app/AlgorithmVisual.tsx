export default function AlgorithmVisual() {
  return (
    <svg
      className="absolute left-0 top-0 h-full w-2/3 opacity-60 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 1000 800 10800"
      fill="none"
    >
      {/* Define the clipping path.
        This rectangle starts partway down the SVG (y="3500")
        and extends to the bottom. This makes the pattern appear
        to start from under the headphones.
      */}
      <defs>
        <clipPath id="headphone-clip">
          <rect x="0" y="3000" width="1000" height="8800" />
        </clipPath>
      </defs>

      {/* Apply the clip-path to a group containing all visual elements */}
      <g clipPath="url(#headphone-clip)">
        {/* Main vertical lines */}
        <line x1="350" y1="1000" x2="380" y2="1360" stroke="#A855F7" strokeWidth="8" />
        <line x1="380" y1="1360" x2="320" y2="1720" stroke="#A855F7" strokeWidth="8" />
        <line x1="320" y1="1720" x2="420" y2="2080" stroke="#A855F7" strokeWidth="8" />
        <line x1="420" y1="2080" x2="360" y2="2440" stroke="#A855F7" strokeWidth="8" />
        <line x1="360" y1="2440" x2="440" y2="2800" stroke="#A855F7" strokeWidth="8" />
        <line x1="440" y1="2800" x2="340" y2="3160" stroke="#A855F7" strokeWidth="8" />
        <line x1="340" y1="3160" x2="480" y2="3520" stroke="#A855F7" strokeWidth="8" />
        <line x1="480" y1="3520" x2="380" y2="3880" stroke="#A855F7" strokeWidth="8" />
        <line x1="380" y1="3880" x2="460" y2="4240" stroke="#A855F7" strokeWidth="8" />
        <line x1="460" y1="4240" x2="320" y2="4600" stroke="#A855F7" strokeWidth="8" />
        <line x1="320" y1="4600" x2="500" y2="4960" stroke="#A855F7" strokeWidth="8" />
        <line x1="500" y1="4960" x2="340" y2="5320" stroke="#A855F7" strokeWidth="8" />
        <line x1="340" y1="5320" x2="480" y2="5680" stroke="#A855F7" strokeWidth="8" />
        <line x1="480" y1="5680" x2="400" y2="6040" stroke="#A855F7" strokeWidth="8" />
        <line x1="400" y1="6040" x2="520" y2="6400" stroke="#A855F7" strokeWidth="8" />
        
        {/* Extended vertical lines */}
        <line x1="520" y1="6400" x2="360" y2="6760" stroke="#A855F7" strokeWidth="8" />
        <line x1="360" y1="6760" x2="490" y2="7120" stroke="#A855F7" strokeWidth="8" />
        <line x1="490" y1="7120" x2="330" y2="7480" stroke="#A855F7" strokeWidth="8" />
        <line x1="330" y1="7480" x2="470" y2="7840" stroke="#A855F7" strokeWidth="8" />
        <line x1="470" y1="7840" x2="390" y2="8200" stroke="#A855F7" strokeWidth="8" />
        <line x1="390" y1="8200" x2="510" y2="8560" stroke="#A855F7" strokeWidth="8" />
        <line x1="510" y1="8560" x2="350" y2="8920" stroke="#A855F7" strokeWidth="8" />
        <line x1="350" y1="8920" x2="450" y2="9280" stroke="#A855F7" strokeWidth="8" />
        <line x1="450" y1="9280" x2="380" y2="9640" stroke="#A855F7" strokeWidth="8" />
        <line x1="380" y1="9640" x2="500" y2="10000" stroke="#A855F7" strokeWidth="8" />
        <line x1="500" y1="10000" x2="340" y2="10360" stroke="#A855F7" strokeWidth="8" />
        <line x1="340" y1="10360" x2="460" y2="10720" stroke="#A855F7" strokeWidth="8" />

        {/* Angled branches with shapes - varied angles */}
        <line x1="380" y1="1360" x2="580" y2="1280" stroke="#A855F7" strokeWidth="6" />
        <polygon points="570,1270 580,1280 575,1290 565,1290 560,1280" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="320" y1="1720" x2="280" y2="1760" stroke="#A855F7" strokeWidth="6" />
        <circle cx="275" cy="1765" r="24" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="420" y1="2080" x2="580" y2="2040" stroke="#A855F7" strokeWidth="6" />
        <polygon points="570,2030 580,2040 575,2050 565,2050 560,2040" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="360" y1="2440" x2="180" y2="2500" stroke="#A855F7" strokeWidth="6" />
        <polygon points="175,2495 185,2490 180,2500 170,2500 165,2490" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="440" y1="2800" x2="580" y2="2780" stroke="#A855F7" strokeWidth="6" />
        <circle cx="575" cy="2785" r="24" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="340" y1="3160" x2="220" y2="3200" stroke="#A855F7" strokeWidth="6" />
        <polygon points="215,3195 225,3190 220,3200 210,3200 205,3190" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="480" y1="3520" x2="680" y2="3600" stroke="#A855F7" strokeWidth="6" />
        <rect x="670" y="3595" width="60" height="60" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="380" y1="3880" x2="300" y2="3840" stroke="#A855F7" strokeWidth="6" />
        <circle cx="295" cy="3835" r="24" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="460" y1="4240" x2="620" y2="4200" stroke="#A855F7" strokeWidth="6" />
        <polygon points="610,4195 620,4200 615,4210 605,4210 600,4200" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="320" y1="4600" x2="160" y2="4680" stroke="#A855F7" strokeWidth="6" />
        <polygon points="155,4675 165,4670 160,4680 150,4680 145,4670" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="500" y1="4960" x2="640" y2="4940" stroke="#A855F7" strokeWidth="6" />
        <circle cx="635" cy="4945" r="24" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="340" y1="5320" x2="260" y2="5360" stroke="#A855F7" strokeWidth="6" />
        <rect x="250" y="5355" width="60" height="60" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="480" y1="5680" x2="680" y2="5600" stroke="#A855F7" strokeWidth="6" />
        <polygon points="670,5595 680,5600 675,5610 665,5610 660,5600" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="400" y1="6040" x2="340" y2="6080" stroke="#A855F7" strokeWidth="6" />
        <circle cx="335" cy="6085" r="24" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="520" y1="6400" x2="680" y2="6360" stroke="#A855F7" strokeWidth="6" />
        <polygon points="670,6355 680,6360 675,6370 665,6370 660,6360" fill="none" stroke="#A855F7" strokeWidth="4" />
        
        {/* Extended branches */}
        <line x1="360" y1="6760" x2="240" y2="6820" stroke="#A855F7" strokeWidth="6" />
        <circle cx="235" cy="6825" r="24" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="490" y1="7120" x2="650" y2="7080" stroke="#A855F7" strokeWidth="6" />
        <polygon points="640,7075 650,7080 645,7090 635,7090 630,7080" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="330" y1="7480" x2="190" y2="7540" stroke="#A855F7" strokeWidth="6" />
        <rect x="180" y="7535" width="60" height="60" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="470" y1="7840" x2="610" y2="7800" stroke="#A855F7" strokeWidth="6" />
        <circle cx="605" cy="7805" r="24" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="390" y1="8200" x2="290" y2="8240" stroke="#A855F7" strokeWidth="6" />
        <polygon points="285,8235 295,8230 290,8240 280,8240 275,8230" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="510" y1="8560" x2="670" y2="8520" stroke="#A855F7" strokeWidth="6" />
        <polygon points="660,8515 670,8520 665,8530 655,8530 650,8520" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="350" y1="8920" x2="220" y2="8980" stroke="#A855F7" strokeWidth="6" />
        <circle cx="215" cy="8985" r="24" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="450" y1="9280" x2="650" y2="9240" stroke="#A855F7" strokeWidth="6" />
        <rect x="640" y="9235" width="60" height="60" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="380" y1="9640" x2="260" y2="9700" stroke="#A855F7" strokeWidth="6" />
        <polygon points="255,9695 265,9690 260,9700 250,9700 245,9690" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="500" y1="10000" x2="680" y2="9960" stroke="#A855F7" strokeWidth="6" />
        <circle cx="675" cy="9965" r="24" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="340" y1="10360" x2="200" y2="10420" stroke="#A855F7" strokeWidth="6" />
        <polygon points="195,10415 205,10410 200,10420 190,10420 185,10410" fill="none" stroke="#A855F7" strokeWidth="4" />
        <line x1="460" y1="10720" x2="620" y2="10680" stroke="#A855F7" strokeWidth="6" />
        <rect x="610" y="10675" width="60" height="60" fill="none" stroke="#A855F7" strokeWidth="4" />

        {/* Main nodes */}
        <circle cx="350" cy="1000" r="15" fill="#A855F7" />
        <circle cx="380" cy="1360" r="15" fill="#A855F7" />
        <circle cx="320" cy="1720" r="15" fill="#A855F7" />
        <circle cx="420" cy="2080" r="15" fill="#A855F7" />
        <circle cx="360" cy="2440" r="15" fill="#A855F7" />
        <circle cx="440" cy="2800" r="15" fill="#A855F7" />
        <circle cx="340" cy="3160" r="15" fill="#A855F7" />
        <circle cx="480" cy="3520" r="15" fill="#A855F7" />
        <circle cx="380" cy="3880" r="15" fill="#A855F7" />
        <circle cx="460" cy="4240" r="15" fill="#A855F7" />
        <circle cx="320" cy="4600" r="15" fill="#A855F7" />
        <circle cx="500" cy="4960" r="15" fill="#A855F7" />
        <circle cx="340" cy="5320" r="15" fill="#A855F7" />
        <circle cx="480" cy="5680" r="15" fill="#A855F7" />
        <circle cx="400" cy="6040" r="15" fill="#A855F7" />
        <circle cx="520" cy="6400" r="15" fill="#A855F7" />
        
        {/* Extended nodes */}
        <circle cx="360" cy="6760" r="15" fill="#A855F7" />
        <circle cx="490" cy="7120" r="15" fill="#A855F7" />
        <circle cx="330" cy="7480" r="15" fill="#A855F7" />
        <circle cx="470" cy="7840" r="15" fill="#A855F7" />
        <circle cx="390" cy="8200" r="15" fill="#A855F7" />
        <circle cx="510" cy="8560" r="15" fill="#A855F7" />
        <circle cx="350" cy="8920" r="15" fill="#A855F7" />
        <circle cx="450" cy="9280" r="15" fill="#A855F7" />
        <circle cx="380" cy="9640" r="15" fill="#A855F7" />
        <circle cx="500" cy="10000" r="15" fill="#A855F7" />
        <circle cx="340" cy="10360" r="15" fill="#A855F7" />
        <circle cx="460" cy="10720" r="15" fill="#A855F7" />
      </g>
    </svg>
  );
}