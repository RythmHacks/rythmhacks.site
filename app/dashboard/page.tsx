"use client";

import React, {useState, useEffect} from "react"
import Form from "./Form"
import Image from "next/image"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"
import axios from "axios";

export default function Dashboard() {
    const router = useRouter();
    const [userData, setUserData] = useState(
        {firstName: "", lastName: "", email: "", role: ""}
    );
    const logout = async () => {
        try {
            await axios.get('/api/auth/logout');
            toast.success("Logged out successfully");
            router.push("/")
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        try {
            const res = await axios.get('/api/dashboard');
            setUserData(res.data.user);
        } catch (error) {
            console.log("Error fetching user details");
        }
    }

    useEffect(() => {
        getUserDetails();
      }, []);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center p-4 mt-30">
            {/* Headphones */}
            <Toaster />
            <Image
            src="/headphones.png"
            alt="RythmHacks Headphones"
            width={200}
            height={200}
            className="absolute top-8 left-8 z-20 hidden lg:block"
            />

            <button className="absolute top-8 right-8 z-20 bg-blue-500 hover:bg-blue-700 hover:scale-110 linear duration-200 text-white font-bold py-2 px-4 rounded"
            onClick={logout}>
                Logout
            </button>
    
            {/* Hero Section */}
            <main className="flex flex-col items-center justify-center z-10">
            <div className="text-center mb-5">
                <h1 className="text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-600 ">
                RythmHacks
                </h1>
                <p className="mt-2 text-gray-400 text-3xl ">Welcome {userData.firstName} {userData.lastName}</p> 

                <h3 className="text-6xl font-bold m-20 text-white drop-shadow-[0_0_20px_rgb(255,255,255)]" > HACKER DASHBOARD </h3>
            </div>
            </main>
            <div className="w-4/5 flex flex-col items-center justify-center">
                <Form email = {userData.email}/>
            </div>
        </div>
        )

}