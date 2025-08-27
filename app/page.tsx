"use client";

import Image from "next/image";
import AlgorithmVisual from "./AlgorithmVisual";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const navItems = ["About", "Sponsors", "Team", "FAQ", "Schedule"];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownItems = [
    {
      question: "What is a hackathon?",
      answer: "RythmHacks is an exciting hackathon where technology meets creativity. Participants build innovative projects while experiencing the rhythm of coding."
    },
    {
      question: "Do I need a team?",
      answer: "You can totally go solo! If you prefer to work by yourself, you can totally work by yourself. If you'd also like a team, RythmHacks is open to helping you find one!"
    },
    {
      question: "Who can attend?",
      answer: "All skill levels are welcome! Whether you're a beginner or an experienced developer, there's a place for you at RythmHacks."
    },
    {
      question: "Will food be provided?",
      answer: "Of course! Thanks to the generous support of our sponsors, we are able to provide breakfast, lunch, and dinner along with some snacks to keep you fueled up during the hack!"
    },
    {
      question: "What if I can’t code?",
      answer: "Don't worry! RythmHacks welcomes everyone and gives hackers the chance to showcase their unique skills! You will find workshops, mentors, and a welcoming community ready to help.  RythmHacks is the perfect place to learn, grow, and bring your ideas to life!"
    },
    {
      question: "Can I stay overnight?",
      answer: "Absolutely! You're welcome to stay overnight for the duration of the hack! Just don't forget to bring your necessities if you plan to get a good night's sleep!"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center items-top p-4 relative overflow-hidden">
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

      {/* FAQ Section */}
      <div className="self-start py-5 px-10 pb-10">
        <div className="flex items-center gap-2">
          <svg width="30" height="28" className="drop-shadow-[0_0_10px_rgba(147,51,234,0.8)] rotate-15">
            <polygon 
              points="15,2 2,26 28,26"
              fill="transparent"
              stroke="rgb(147 51 234)"
              strokeWidth="4"
            />
          </svg>
            <h1 className="text-5xl font-bold text-white">FAQ</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6 grid grid-cols-2 gap-y-10 gap-x-20">
        {dropdownItems.map((item, index) => (
          <DropdownItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </div>

      
    </div>
  );
}

function DropdownItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Speech bubble button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 rounded-3xl bg-gradient-to-b from-purple-500 to-pink-400 text-white text-left shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative group border-2 border-purple-400 cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold pr-4">{question}</span>
          <ChevronDown 
            className={`w-6 h-6 transition-transform duration-300 flex-shrink-0 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </button>

      {/* Dropdown content with animation */}
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="mt-4 p-6 rounded-2xl bg-gray-800 text-gray-300 shadow-inner">
          <p className="leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
