"use server"

import { connect } from "@/config/db"
import { NextResponse } from "next/server"

export async function GET () {
    try {
        await connect()

        const response = NextResponse.json({
            message:"Logged out successfully",
        })
        response.cookies.set("token", "", { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 0 })
        
        return response


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
}