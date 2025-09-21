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
                className="bg-gradient-to-r from-pink-300 to-sky-600 text-white px-8 py-4 mx-2 rounded-lg font-semibold text-[20px] hover:drop-shadow-[0_0_5px_rgba(255,255,255)] hover:ring-1 linear duration-200"
                onClick={() => {scrollToSection(item)}}
              >
                {item}
              </button>
            ))}
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoMdClose size={36} color="white"/> : <GiHamburgerMenu size={36} color="white"/>}
            </button>
          </div>

          {isOpen && (
            <div className="absolute top-8 right-20 z-[9999] flex flex-col items-center md:hidden gap-4 bg-black/50 p-8">
              {navItems.map((item) => (
                <button
                key={item}
                className=" z-[9999] w-full bg-gradient-to-r from-pink-300 to-sky-600 text-white px-8 py-4 mx-2 rounded-lg font-semibold text-[20px] hover:drop-shadow-[0_0_5px_rgba(255,255,255)] hover:ring-1 linear duration-200"
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