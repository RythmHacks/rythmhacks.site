"use client";

import Image from "next/image";
import AlgorithmVisual from "./AlgorithmVisual";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "./Navbar";
// ...existing code...


// Sponsor data
const sponsors = [
  { name: "Certopus", logo: "/certopus.png", url: "https://certopus.com", bgColor: "#FFFFFF", padding: "p-0" },
  { name: "NordProtect", logo: "/Logo-3.png", url: "https://nordprotect.com/", bgColor: "bg-gradient-to-tr from-yellow-400/30 to-red-500/30", padding: "p-4" },
  { name: "NordPass", logo: "/nordpass.png", url: "https://nordpass.com/", bgColor: "bg-gradient-to-br from-blue-500 to-indigo-600", padding: "p-4" },
  { name: "Interview Cake", logo: "/InterviewCake.png", url: "https://www.interviewcake.com", bgColor: "bg-gradient-to-br from-sky-400 to-cyan-500", padding: "p-4" },
  { name: "Incogni", logo: "/incogni.png", url: "https://incogni.com/", bgColor: "#FFFFFF", padding: "p-4" },
  { name: "NordVPN", logo: "/NordVPN.png", url: "https://nordvpn.com/hackathons/", bgColor: "bg-gradient-to-tr from-purple-500/50 to-pink-500/50", padding: "p-2" },
  { name: "Saily", logo: "/saily.png", url: "https://saily.com/", bgColor: "bg-gradient-to-br from-yellow-300 to-orange-400", padding: "p-8" },
  { name: "AoPS", logo: "/AoPS.png", url: "https://artofproblemsolving.com/company", bgColor: "#F0F4F8", padding: "p-8" },
  { name: "XYZ", logo: "/XYZ.png", url: "https://gen.xyz/", bgColor: "#6A0DAD", padding: "p-8" },
  { name: "laa", logo: "LAA.png", url: "https://www.leadingaces.com/", bgColor: "bg-gradient-to-br from-purple-600 to-indigo-700", padding: "p-8" },
  { name: "Cleanshot", logo: "/CleanShot.png", url: "https://cleanshot.com/", bgColor: "bg-gradient-to-br from-blue-500 to-purple-600", padding: "p-4" },
  { name: "Balsamiq", logo: "/balsamiq.png", url: "https://balsamiq.com/", bgColor: "bg-gradient-to-br from-red-500 to-pink-500", padding: "p-4" },
  { name: "BlockChain North", logo: "/blockchain.png", url: "https://blockchainnorth.ca/", bgColor: "bg-gradient-to-tr from-blue-500/60 to-red-500/75", padding: "p-4" },
  { name: "COCALC", logo: "/COCALC.png", url: "https://cocalc.com/", bgColor: "bg-gradient-to-br from-orange-400 to-yellow-500", padding: "p-8" },
  { name: "Interview Buddy", logo: "/interview.png", url: "https://interviewbuddy.net/", bgColor: "bg-gradient-to-br from-purple-600 to-indigo-700", padding: "p-6" },
  { name: "FlatLogic", logo: "/flatlogic.png", url: "https://flatlogic.com/", bgColor: "bg-gradient-to-br from-blue-600 to-purple-700", padding: "p-4" },
  { name: "ClassZoo", logo: "/classzoo.png", url: "https://classzoo.app/", bgColor: "bg-gradient-to-br from-green-500 to-teal-600", padding: "p-4" },
  { name: "nexos.ai", logo: "/nexos.png", url: "https://nexos.ai/", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600", padding: "p-6" },
  { name: "Jukebox", logo: "/jukebox.png", url: "https://www.jukeboxprint.com/", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600", padding: "p-4" },

];

function DropdownItem({ question, answer }: { question: string; answer: string }) {
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

export default function Home() {

  const dropdownItems = [
    {
      question: "What is a hackathon?",
      answer: "RythmHacks is an exciting hackathon where technology meets creativity. Participants build innovative projects while experiencing the rythm of coding."
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

  const profileImg = (url:string, name:string) => {
    return (
      <div className="flex flex-col items-center">
        <img src={url}alt={name} className="w-48 h-48 rounded-full object-cover border-2 border-white "/>
        <p className="mt-2 text-2xl pt-serif-regular text-gray-300">{name}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4 relative overflow-hidden">
      <div className="w-full mx-auto ">
        <Navbar />
      </div>
      {/* Algorithm pattern down the left side */}
      <div className="absolute left-0 top-0 h-full w-48 flex flex-col justify-start items-center opacity-60 pointer-events-none overflow-hidden">
        <div className="-mt-[800px]"><AlgorithmVisual /></div>
      </div>

      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Headphones */}
      <Image
        src="/headphones.png"
        alt="RythmHacks Headphones"
        width={200}
        height={200}
        className="absolute top-8 left-8 z-20 hidden lg:block"
      />

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center z-10">
        <div className="text-center mb-20">
          <h1 className="text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-600 ">
            RythmHacks
          </h1>
          <p className="mt-2 text-gray-400 text-3xl ">Experience the magic of tech</p>
        </div>

        <h2 className="text-5xl font-semibold mt-16 mb-30">Coming soon...</h2>

        <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-full text-2xl font-semibold hover:drop-shadow-[0_0_5px_rgba(255,255,255)] hover:ring-1 linear duration-200">
          APPLY NOW!
        </button>
      </main>

      {/* About Section */}
      <section id="About" className="w-full max-w-6xl mx-auto px-8 py-16 z-10 mt-40">
        <div className="flex items-start gap-8 mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-7xl font-bold">About</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-xl font-semibold text-white leading-relaxed">
              RythmHacks is back for 2025! Join us for 24 hours of the classic hackathon experience: Building projects attending awesome workshops, and sleep-deprived madness.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              With hundreds of dollars in prizes, sponsors of all kinds, and a workshop for everyone,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 font-semibold">
                RythmHacks
              </span>{" "}
              is a place for you to bring your ideas to life!
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-1">
              <div className="bg-black rounded-lg p-4">
                <img 
                  src="/about-team-1.jpg" 
                  alt="RythmHacks participants holding awards"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-1">
              <div className="bg-black rounded-lg p-4">
                <img 
                  src="/about-team-2.jpg" 
                  alt="Participants collaborating at RythmHacks"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="Sponsors" className="w-full py-16 bg-black text-center z-10">
        <h2 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
          Our Sponsors
        </h2>
        <p className="mb-12 max-w-2xl mx-auto text-2xl text-gray-300 leading-relaxed">
          We are incredibly grateful to our amazing sponsors who make RythmHacks 2025 into a reality! 
          Your support empowers the next generation of innovators and creators. 
          <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-blue-400 font-bold">
            Thank you for believing in our community! 
          </span>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-14 justify-items-center mx-5 ">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className={`group cursor-pointer ${
              sponsor.name === "Jukebox" 
                ? "col-span-2 flex items-center justify-center gap-8" 
                : "flex flex-col items-center"
            }`}>
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-[15.5rem] h-[15.5rem] rounded-full shadow-2xl transform transition-transform group-hover:scale-110 relative overflow-hidden flex-shrink-0 ${
                  sponsor.bgColor.startsWith('bg-gradient') ? sponsor.bgColor : ''
                }`}
                style={{ backgroundColor: sponsor.bgColor.startsWith('#') ? sponsor.bgColor : undefined }}
              >
                <div className={`absolute inset-0 flex items-center justify-center ${sponsor.padding}`}>
                  {sponsor.logo && (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="object-contain max-w-full max-h-full pointer-events-none"
                    />
                  )}
                </div>
              </a>
              {sponsor.name === "Jukebox" && (
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-2xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border-2 border-pink-500/50 shadow-xl max-w-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-pink-400 rounded-full animate-pulse"></div>
                      <div className="text-pink-400 font-bold text-lg">BIG SHOUTOUT!</div>
                    </div>
                    <p className="text-white font-semibold mb-2 text-sm">
                      To Jukebox for our {" "}
                      <a 
                        href="https://www.jukeboxprint.com/custom-stickers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-300 hover:to-purple-300 underline decoration-2 decoration-pink-400/50 hover:decoration-pink-300/70 transition-all duration-300 font-bold"
                      >
                        custom stickers
                      </a>{" "}
                      at RythmHacks!
                    </p>
                    <div className="text-gray-400 text-xs italic">
                      Code in style.
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <div id="Team" className=" py-5 px-12 pl-8 pb-10 w-full my-25">
        <div className="flex items-center">
          {/* Square */}
          <svg width="35" height="35" viewBox="0 0 40 40" className="drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]">
            <polygon
              points="6,6 34,6 34,34 6,34"
              fill="transparent"
              stroke="rgb(147 51 234)"
              strokeWidth="4"
            />
          </svg>
            <h1 className="pl-2 text-6xl font-bold text-white">Team</h1>
        </div>
        <div className="justify-center w-full flex">
          <div className="flex flex-col columns-1 w-full items-center">
            <h3 className="mt-3 text-transparent text-4xl bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300 font-bold">
                Co-Leads
            </h3>
            <div className="gap-6 w-full justify-center flex m-5 mb-15" >
              {profileImg("/Team_Photos/nabira.png", "Nabira Rashid")}
              {profileImg("/Team_Photos/irene.png", "Irene Wang")}
            </div>


            <h3 className="mt-3 text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-300 to-rose-400 font-bold">
                Tech Team
            </h3>
            <div className="grid gap-6 w-full mt-5 mb-15 [grid-template-columns:repeat(auto-fit,minmax(12rem,auto))] justify-center" >
              {profileImg("/Team_Photos/hargun.png", "Hargun Badhesha")}
              {profileImg("/Team_Photos/sharon.png", "Sharon Basovich")}
              {profileImg("/Team_Photos/jerry.png", "Jerry Liu")}
              {profileImg("/Team_Photos/jacob.png", "Jacob Blais")}
              {profileImg("/Team_Photos/micheal.png", "Micheal Zang")}
            </div>


            <h3 className="mt-3 text-transparent text-4xl bg-clip-text bg-gradient-to-r from-rose-500 to-purple-300 font-bold">
                Marketing Team
            </h3>
            <div className="grid gap-6 w-full mt-5 mb-15 [grid-template-columns:repeat(auto-fit,minmax(12rem,auto))] justify-center" >
              {profileImg("/Team_Photos/pramod.png", "Pramod Chavali")}
              {profileImg("/Team_Photos/nutana.png", "Nutana Simhadri")}
              {profileImg("/Team_Photos/amy.png", "Amy Peng")}
            </div>

            <h3 className="mt-3 text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold">
                Sponsorships & Logistics Team
            </h3>
            <div className="grid gap-6 w-full mt-5 mb-15 [grid-template-columns:repeat(auto-fit,minmax(12rem,auto))] justify-center" >
              {profileImg("/Team_Photos/maithili.png", "Maithili Rastogi")}
              {profileImg("/Team_Photos/geeth.png", "Geeth Gudavalli")}
              {profileImg("/Team_Photos/james.png", "James Yang")}
              {profileImg("/Team_Photos/alan.png", "Alan Liu")}
              {profileImg("/Team_Photos/saanvi.png", "Saanvi Lal")}
            </div>

          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div id="FAQ" className="self-start py-5 px-10 pb-10">
        <div className="flex items-center">
          <svg width="43" height="39" className="drop-shadow-[0_0_10px_rgba(147,51,234,0.8)] rotate-15">
            <polygon 
              points="15,2 2,26 28,26"
              fill="transparent"
              stroke="rgb(147 51 234)"
              strokeWidth="4"
            />
          </svg>
            <h1 className="text-6xl font-bold text-white">FAQ</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6 grid grid-cols-2 gap-y-10 gap-x-20 pb-20">
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
