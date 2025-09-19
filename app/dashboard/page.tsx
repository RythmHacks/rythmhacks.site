"use client";

import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import Image from "next/image"

export default function Dashboard() {
  const [timeRemaining, setTimeRemaining] = useState('XX:XX:XX:XX:XX');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const eventDate = new Date('2025-12-31T23:59:59');
      const diff = eventDate.getTime() - now.getTime();
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeRemaining(`${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 800 600">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20L20 80M80 20L80 80M20 50L80 50" stroke="#8b5cf6" strokeWidth="1" fill="none" opacity="0.3"/>
              <circle cx="20" cy="20" r="2" fill="#8b5cf6" opacity="0.4"/>
              <circle cx="80" cy="80" r="2" fill="#8b5cf6" opacity="0.4"/>
              <circle cx="50" cy="50" r="1" fill="#8b5cf6" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
          
          <path d="M0 100L200 100L200 200L400 200" stroke="#8b5cf6" strokeWidth="1" fill="none" opacity="0.2"/>
          <path d="M600 50L800 50L800 150L600 150Z" stroke="#8b5cf6" strokeWidth="1" fill="none" opacity="0.1"/>
          <path d="M100 300L300 300L300 500L500 500" stroke="#8b5cf6" strokeWidth="1" fill="none" opacity="0.15"/>
          
          <circle cx="200" cy="100" r="3" fill="#8b5cf6" opacity="0.3"/>
          <circle cx="400" cy="200" r="3" fill="#8b5cf6" opacity="0.3"/>
          <circle cx="300" cy="300" r="2" fill="#8b5cf6" opacity="0.3"/>
        </svg>
      </div>

      <div className="relative z-10 p-4 max-w-sm mx-auto md:max-w-2xl lg:max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-6 md:mb-8">
          <Image
            src="/headphones.png"
            alt="RythmHacks"
            width={48}   // or 64/200 depending on the size you want
            height={48}
            className="w-8 h-8 md:w-10 md:h-10 mr-3"
          />
          <div>
            <h1 className="text-lg md:text-xl font-bold" style={{textShadow: '0 0 20px rgba(244,114,182,0.8), 0 0 40px rgba(244,114,182,0.6)'}}>
              <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">RythmHacks</span>
            </h1>
            <p className="text-xs text-gray-400 italic">Experience the magic of tech</p>
          </div>
        </div>

        {/* Your Dashboard Section */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
            <h2 className="text-sm md:text-base font-medium text-white">Your Dashboard</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Application Status Card */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 border border-pink-400/50" 
                 style={{boxShadow: '0 0 40px rgba(244,114,182,0.6), 0 0 80px rgba(244,114,182,0.3), 0 0 120px rgba(244,114,182,0.1)'}}>
              <h3 className="text-white text-sm font-medium mb-3">Application Status:</h3>
              <div className="text-sm text-gray-300 leading-relaxed mb-4">
                <div>You haven't</div>
                <div>started your</div>
                <div>application yet!</div>
              </div>
              <div className="text-sm text-gray-300 mb-4 italic">Click here to begin!</div>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-4 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                APPLY NOW!
              </button>
            </div>

            {/* RythmHacks Timer Card */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 border border-purple-400/50 text-center" 
                 style={{boxShadow: '0 0 40px rgba(168,85,247,0.6), 0 0 80px rgba(168,85,247,0.3), 0 0 120px rgba(168,85,247,0.1)'}}>
              <h3 className="text-lg md:text-xl font-bold mb-1" style={{textShadow: '0 0 20px rgba(244,114,182,0.8), 0 0 40px rgba(244,114,182,0.6)'}}>
                <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">RythmHacks</span>
              </h3>
              <div className="text-sm text-white mb-3">2025</div>
              <img src="/headphones.png" alt="RythmHacks" className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <div className="text-xs md:text-sm font-mono text-gray-300 mb-1 tracking-wider">
                {timeRemaining}
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-wide">
                REMAINING
              </div>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
            <h2 className="text-sm md:text-base font-medium text-white">Event Details</h2>
          </div>

          {/* Event Details Card */}
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 border border-purple-400/50 text-center" 
               style={{boxShadow: '0 0 40px rgba(168,85,247,0.6), 0 0 80px rgba(168,85,247,0.3), 0 0 120px rgba(168,85,247,0.1)'}}>
            <MapPin className="w-8 h-8 md:w-10 md:h-10 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-medium text-white mb-2">location and map</h3>
            <p className="text-sm text-gray-400">embed and stuff</p>
          </div>
        </div>
      </div>
    </div>
  );
}
