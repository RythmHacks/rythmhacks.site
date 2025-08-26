import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Schedule", href: "#schedule" },
];

const sponsors = [
  { name: "Certopus", logo: "/sponsors/certopus.png", url: "https://certopus.com" },
  { name: "NordProtect", logo: "/sponsors/Logo-3.png", url: "#" },
  { name: "NordPass", logo: "/sponsors/nordpass.png", url: "https://nordpass.com" },
  { name: "Interview Cake", logo: "/sponsors/InterviewCake.png", url: "https://www.interviewcake.com" },
  { name: "NordVPN", logo: "/sponsors/NordVPN.png", url: "https://nordvpn.com" },
  { name: "Saily", logo: "/sponsors/saily.png", url: "#" },
  { name: "XYZ", logo: "/sponsors/XYZ.png", url: "#" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Headphone Image */}
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
              key={item.label}
              href={item.href}
              className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Main content */}
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

      {/* ⭐ Sponsors Section */}
      <section id="sponsors" className="w-full py-16 bg-black text-center">
        <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
          Our Sponsors
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          A huge thank you to all our sponsors for supporting RhythmHacks 2025!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center transform transition-transform hover:scale-105"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={150}
                className="object-contain"
              />
              <p className="mt-2">{sponsor.name}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
