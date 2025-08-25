import Image from "next/image";
import AlgorithmVisual from "./AlgorithmVisual";

const navItems = ["About", "Sponsors", "Team", "FAQ", "Schedule"];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4 relative overflow-hidden">
      {/* Algorithm pattern down the left side */}
      <div className="absolute left-0 top-0 h-full w-48 flex flex-col justify-start items-center opacity-60 pointer-events-none">
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
      </div>

      {/* Background blobs (optional) */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Headphone Logo */}
      <Image
        src="/headphones.png"
        alt="RythmHacks Headphones"
        width={200}
        height={200}
        className="absolute top-8 left-8 z-20"
      />

      {/* Navigation */}
      <header className="w-full flex justify-center mb-16 z-10 mt-8">
        <nav className="flex space-x-2">
          {navItems.map((item) => (
            <button
              key={item}
              className="bg-gradient-to-r from-pink-400 to-sky-600 text-white px-8 py-4 rounded-lg font-semibold text-xl"
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center z-10">
        <div className="text-center relative">
          <h1 className="text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-600">
            RythmHacks
          </h1>
          <p className="text-lg mt-2 text-gray-400">Experience the magic of tech</p>
        </div>

        <h2 className="text-4xl font-semibold mt-16 mb-8">Coming soon...</h2>

        <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold">
          APPLY NOW!
        </button>
      </main>
    </div>
  );
}
