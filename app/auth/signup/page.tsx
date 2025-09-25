"use client";

import React, {useState} from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "@/app/Navbar";

export default function Signup() {
    const router = useRouter()
    const [confPass, setConfPass] = useState("")
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })


    const onSignUp = async () => {
        try {
            const res = await axios.post("/api/auth/signup", user)
            toast.success("Signup Successful", res.data)
            router.push("/auth/login")
        } catch (error: any) {
            toast.error(error.message)
        }
    }

    const conditions = (e: React.FormEvent) => {
        e.preventDefault()
        // Checks if fields are filled in
        if (user.firstName.length<=0 || user.lastName.length<=0 || user.email.length<=0 || user.password.length<=0 || confPass.length<=0) {
            toast.error("Please fill out all fields.")
            user.password = ""
            setConfPass("")
            return 
        }
        
        //Checks if passwords match
        if (user.password != confPass) {
            toast.error("Passwords do not match.")
            user.password = ""
            setConfPass("")
            return 
        }

        // Checks if email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(user.email)) {
            toast.error("Please enter a valid email address.")
            user.password = ""
            setConfPass("")
            return 
        }

        toast.success("Account Created!")
        onSignUp()
    }

    return (

        <div className="min-h-screen overflow-auto scrollbar-hide bg-gradient-b-p-p">
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
                <h1 className="text-6xl text-white font-bold">Sign Up</h1>
                <form className="relative items-center justify-center mt-10 space-y-4 w-1/2 lg:w-2/5" onSubmit={conditions}>

                    <div className="relative flex flex-col w-full lg:flex-row">
                        <input value={user.firstName} onChange={(e) => setUser({...user, firstName:e.target.value})} 
                            className="w-full p-3 pb-0 mb-4 h-16 border-2 border-white rounded-2xl lg:w-1/2 lg:mr-2 lg:mb-0 bg-[rgba(255,255,255,0.2)] text-gray-300" placeholder="First Name" ></input>
                        <label className="absolute top-1 left-3.5 text-white font-semibold text-sm" >First Name</label>

                        <input value={user.lastName} onChange={(e) => setUser({...user, lastName:e.target.value})} 
                            className="w-full p-3 pb-0 h-16 border-2 border-white rounded-2xl lg:w-1/2 lg:ml-2 bg-[rgba(255,255,255,0.2)] text-gray-300" placeholder="Last Name"></input>
                        <label className="absolute top-21 left-3.5 lg:top-1 lg:left-6/11 text-white font-semibold text-sm" >Last Name</label>
                    </div>

                    <input value={user.email} onChange={(e) => setUser({...user, email:e.target.value})}
                        className=" w-full p-3 pb-0 h-16 border-2 border-white rounded-2xl bg-[rgba(255,255,255,0.2)] text-gray-300" placeholder="Email"></input>
                    <label className="absolute top-41 left-3.5 lg:top-21 lg:left-3.5  text-white font-semibold text-sm" >Email</label>

                    <div className="relative flex flex-col w-full lg:flex-row">
                        <input type="password" value={user.password} onChange={(e) => setUser({...user, password:e.target.value})}
                            className="w-full p-3 pb-0 mb-4 h-16 border-2 border-white rounded-2xl lg:w-1/2 lg:mr-2 lg:mb-0 bg-[rgba(255,255,255,0.2)] text-gray-300" placeholder="Password"></input>
                        <label className="absolute top-1 left-3.5 text-white font-semibold text-sm" >Password</label>

                        <input type="password" value={confPass} onChange={(e) => setConfPass(e.target.value)} 
                            className="w-full p-3 pb-0 h-16 border-2 border-white rounded-2xl lg:w-1/2 lg:ml-2 bg-[rgba(255,255,255,0.2)] text-gray-300" placeholder="Confirm Password"></input>
                        <label className="absolute top-21 left-3.5 lg:top-1 lg:left-6/11 text-white font-semibold text-sm" >Confirm Password</label>

                    </div>

                    <button type="submit" className="bg-blue-500 font-bold text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ">Sign Up</button>
                </form>

                <Link className="text-xl text-white" href="/auth/login">Have an existing account? <span className="text-blue-500">Login</span></Link>

            </div>
    
        </div>
        )

}