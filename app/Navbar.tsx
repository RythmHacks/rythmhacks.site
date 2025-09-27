import React from 'react'
import { useState } from 'react';
import { useRouter, usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ['About', 'Sponsors', 'Team', 'FAQ', 'Schedule'];

    const router = useRouter();
    const pathname = usePathname();

    const scrollToSection = (id:string) => {
      setIsOpen(false);

      if (pathname !== "/") {
        // Not on homepage → navigate to homepage with hash
        router.push("/");
      } 
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
      
  return (
    <div>
        <header className="w-full flex justify-end mb-30 z-9999 ">
        <nav className="space-x-2">
          <div className="hidden md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 hover:border-blue-500 text-white px-6 py-3 mx-1 rounded-xl font-medium text-lg hover:bg-gray-700/70 transition-all duration-300 hover:scale-105"
                onClick={() => {scrollToSection(item)}}
              >
                {item}
              </button>
            ))}
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 p-2 rounded-xl hover:bg-gray-700/70 transition-all duration-300"
            >
              {isOpen ? <IoMdClose size={28} color="white"/> : <GiHamburgerMenu size={28} color="white"/>}
            </button>
          </div>

          {isOpen && (
            <div className="absolute top-16 right-4 z-[9999] flex flex-col items-center md:hidden gap-3 bg-gray-900/95 backdrop-blur-md p-6 rounded-2xl border border-gray-700 shadow-2xl">
              {navItems.map((item) => (
                <button
                key={item}
                className="z-[9999] w-full bg-gray-800/80 hover:bg-gray-700/80 text-white px-6 py-3 rounded-xl font-medium text-lg border border-gray-600 hover:border-blue-500 transition-all duration-300"
                onClick={() => {scrollToSection(item)}}
              > {item} </button>
              ))}
            </div>
          )}
        </nav>
      </header>
    </div>
  )
}

export default Navbar