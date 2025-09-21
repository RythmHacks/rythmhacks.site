"use client";

import React from "react"
import Image from "next/image"

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center p-4 mt-30">
            {/* Headphones */}
            <Image
            src="/headphones.png"
            alt="RythmHacks Headphones"
            width={200}
            height={200}
            className="absolute top-8 left-8 z-20 hidden lg:block"
            />
    
            {/* Hero Section */}
            <main className="flex flex-col items-center justify-center z-10">
            <div className="text-center mb-20">
                <h1 className="text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-600 ">
                RythmHacks
                </h1>
                <p className="mt-2 text-gray-400 text-3xl ">Experience the magic of tech</p>

                <h3 className="text-6xl font-bold m-20 text-white drop-shadow-[0_0_20px_rgb(255,255,255)]" > HACKER DASHBOARD </h3>
            </div>
    
            </main>
        </div>
        )

}
