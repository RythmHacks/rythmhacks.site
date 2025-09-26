"use client";

import React, {useState} from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "@/app/Navbar";

export default function Login() {
    const router = useRouter()
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const onLogin = async (e:React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await axios.post("/api/auth/login", user)
            toast.success("Login Successful", res.data)
            router.push("/dashboard")
        } catch (error: any) {
            toast.error("Login error", error.message)
        }
    }

    return (
        <div className="min-h-screen overflow-auto scrollbar-hide bg-gradient-b-p-p p-4">
            {/* Headphones */}
            <Toaster/>
            <Image
            src="/headphones.png"
            alt="RythmHacks Headphones"
            width={100}
            height={100}
            className="absolute top-8 left-8 z-20"
            />
            <Navbar />

            <div className="flex flex-col items-center justify-center my-25 w-full">
                <h1 className="text-6xl text-white font-bold">Login</h1>
                <form className="relative items-center justify-center mt-10 space-y-4 w-1/2 lg:w-2/5" onSubmit={onLogin}>

                    <input value={user.email} onChange={(e) => setUser({...user, email:e.target.value})}
                        className=" w-full p-3 pb-0 h-16 border-2 border-white rounded-2xl bg-[rgba(255,255,255,0.2)] text-gray-300" placeholder="Email"></input>
                    <label className="absolute top-1 left-3.5 text-white font-semibold text-sm" >Email</label>

                    <input type="password" value={user.password} onChange={(e) => setUser({...user, password:e.target.value})}
                        className="w-full p-3 pb-0 mb-4 h-16 border-2 border-white rounded-2xl bg-[rgba(255,255,255,0.2)] text-gray-300" placeholder="Password"></input>                   
                    <label className="absolute top-21 left-3.5 text-white font-semibold text-sm" >Password</label>

                    <button type="submit" className="bg-blue-500  text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Login</button>
                </form>

                <div className="text-center mt-4">
                    <Link className="text-blue-400 hover:text-blue-300 underline" href="/forgot-password">
                        Forgot Password?
                    </Link>
                </div>

                <Link className="text-xl text-white p-5" href="/auth/signup">Create an account? <span className="text-blue-500">Sign Up</span></Link>

            </div>
    
        </div>
    )

}