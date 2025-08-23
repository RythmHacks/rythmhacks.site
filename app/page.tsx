import Image from 'next/image';

const navItems = ['About', 'Sponsors', 'Team', 'FAQ', 'Schedule'];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4 relative overflow-hidden">
      {/* Background elements (unchanged) */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Headphone Image - moved to outside the <main> tag to allow for absolute positioning */}
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
            <button
              key={item}
              className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center z-10">
        <div className="text-center relative">
          <h1
            className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
          >
            RythmHacks
          </h1>
          <p className="text-lg mt-2 text-gray-400">
            Experience the magic of tech
          </p>
        </div>

        <h2 className="text-4xl font-semibold mt-16 mb-8">
          Coming soon...
        </h2>

        <button
          className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold"
        >
          APPLY NOW!
        </button>
      </main>
    </div>
  );
}