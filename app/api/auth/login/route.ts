"use server"

import { connect } from "@/config/db"
import User from "@/models/user"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST (request: NextRequest) {
    try {
        await connect()
        const reqBody = await request.json()
        const { email, password } = reqBody

        const user = await User.findOne({email: email})
        if(!user) return NextResponse.json({error: "User doesn't exist"}, {status: 404})

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return NextResponse.json({error: "Invalid credentials"}, {status: 400})
            
        const token = {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        }

        const jwtToken = jwt.sign(token, process.env.TOKEN_SECRET!, {expiresIn: '7d'})

        const response = NextResponse.json({
            message:"Logged in successfully",
        })
        response.cookies.set("token", jwtToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 7 * 24 * 60 * 60 })
        
        return response


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
}