import Image from "next/image";
import AlgorithmVisual from "./AlgorithmVisual";

const navItems = ["About", "Sponsors", "Team", "FAQ", "Schedule"];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4 relative overflow-hidden">
      {/* Algorithm pattern down the left side */}
      <div className="absolute left-0 top-0 h-full w-48 flex flex-col justify-start items-center opacity-60 pointer-events-none overflow-hidden">
        <div className="-mt-[800px]">
          <AlgorithmVisual />
        </div>
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
        <AlgorithmVisual />
      </div>

      {/* Background blobs (optional) */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Navigation */}
      <header className="w-full flex justify-center mb-4 z-10 mt-8">
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

      {/* Headphone Logo */}
      <Image
        src="/headphones.png"
        alt="RythmHacks Headphones"
        width={200}
        height={200}
        className="absolute top-1/2 left-8 transform -translate-y-1/2 -translate-y-96 z-20"
      />

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center z-10">
        <div className="text-center">
          <h1 className="text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-600">
            RythmHacks
          </h1>
          <p className="text-lg mt-2 text-gray-400">Experience the magic of tech</p>
        </div>

        <h2 className="text-4xl font-semibold mt-4 mb-8">Coming soon...</h2>

        <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold">
          APPLY NOW!
        </button>
      </main>

      {/* About Section */}
      <section className="w-full max-w-6xl mx-auto px-8 py-16 z-10 mt-96">
        <div className="flex items-start gap-8 mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl font-bold">About</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div>
              <p className="text-xl font-semibold text-white leading-relaxed">
                RythmHacks is back for 2025! Join us for 36 hours of the classic hackathon experience: Building projects attending awesome workshops, and sleep-deprived madness.
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                With hundreds of dollars in prizes, sponsors of all kinds, and a workshop for everyone,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 font-semibold">
                  RythmHacks
                </span>{" "}
                is a place for you to bring your ideas to life!
              </p>
            </div>
          </div>

          {/* Right column - Images */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-1">
              <div className="bg-black rounded-lg p-4">
                <img 
                  src="/about-image-1.jpg" 
                  alt="RythmHacks participants holding awards"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-1">
              <div className="bg-black rounded-lg p-4">
                <img 
                  src="/about-image-2.jpg" 
                  alt="Participants collaborating at RythmHacks"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}