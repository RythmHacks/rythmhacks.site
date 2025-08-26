import Image from 'next/image';

// Navigation items (unchanged)
const navItems = ['About', 'Sponsors', 'Team', 'FAQ', 'Schedule'];

// Sponsor data
const sponsors = [
  {
    name: "Certopus",
    logo: "/sponsors/certopus.png",
    url: "https://certopus.com",
    bgColor: "#FFFFFF", 
  },
  {
    name: "NordProtect",
    logo: "/sponsors/Logo-3.png",
    url: "https://nordprotect.com/",
    bgColor: "bg-gradient-to-tr from-yellow-400/30 to-red-500/30",
  },
  {
    name: "NordPass",
    logo: "/sponsors/nordpass.png",
    url: "https://nordpass.com",
    bgColor: "#4668D6",
  },
  {
    name: "Interview Cake",
    logo: "/sponsors/InterviewCake.png",
    url: "https://www.interviewcake.com",
    bgColor: "#5AB8D8",
  },
  {
    name: "NordVPN",
    logo: "/sponsors/NordVPN.png",
    url: "https://nordvpn.com",
    bgColor: "bg-gradient-to-tr from-purple-500/50 to-pink-500/50",
  },
  {
    name: "Saily",
    logo: "/sponsors/saily.png",
    url: "https://saily.com/site/",
    bgColor: "#FFD166",
  },
  {
    name: "AoPS",
    logo: "/sponsors/AoPS.png",
    url: "https://artofproblemsolving.com/company",
    bgColor: "#F0F4F8",
  },
  {
    name: "XYZ",
    logo: "/sponsors/XYZ.png",
    url: "https://gen.xyz/",
    bgColor: "#6A0DAD",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Headphones */}
      <Image
        src="/headphones.png"
        alt="RythmHacks Headphones"
        width={300}
        height={300}
        className="absolute top-8 left-8 z-20"
      />
      
      {/* Navigation */}
      <header className="w-full flex justify-end mb-16 z-10">
        <nav className="flex space-x-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center z-10">
        <div className="text-center relative">
          <h1 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
            RythmHacks
          </h1>
          <p className="text-lg mt-2 text-gray-400">
            Experience the magic of tech
          </p>
        </div>

        <h2 className="text-4xl font-semibold mt-16 mb-8">
          Coming soon...
        </h2>

        <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold">
          APPLY NOW!
        </button>
      </main>

      {/* Sponsors Section */}
      <section id="sponsors" className="w-full py-16 bg-black text-center z-10">
        <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
          Our Sponsors
        </h2>
        <p className="mb-12 max-w-2xl mx-auto text-2xl text-gray-300 leading-relaxed">
          We are incredibly grateful to our amazing sponsors who make RhythmHacks 2025 into a reality! 
          Your support empowers the next generation of innovators and creators. 
          <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-400 font-bold">
            Thank you for believing in our community! 
          </span>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-14 justify-items-center">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex flex-col items-center group cursor-pointer"
            >
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-[15.5rem] h-[15.5rem] rounded-full shadow-2xl transform transition-transform group-hover:scale-110 relative overflow-hidden ${
                  sponsor.bgColor.startsWith('bg-gradient') ? sponsor.bgColor : ''
                }`}
                style={{ backgroundColor: sponsor.bgColor.startsWith('#') ? sponsor.bgColor : undefined }}
              >
                <div className={`absolute inset-0 flex items-center justify-center ${
                  ['Certopus', 'NordVPN'].includes(sponsor.name)
                    ? 'p-2'
                    : ['NordPass', 'Interview Cake', 'NordProtect'].includes(sponsor.name) 
                      ? 'p-4' 
                      : 'p-8'
                }`}>
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="object-contain max-w-full max-h-full pointer-events-none"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}