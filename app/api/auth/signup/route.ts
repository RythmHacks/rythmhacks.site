"use server"

import { connect } from "@/config/db"
import User from "@/models/user"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function POST (request: NextRequest) {
    try {
        await connect()
        const reqBody = await request.json()
        const { firstName, lastName, email, password } = reqBody

        const user = await User.findOne({email: email})
        if(user) return NextResponse.json({error: "Email is already used."}, {status: 400})

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User ({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword
        })
        console.log("New user object:", newUser);
        await newUser.save()
        console.log("User created")
        

        return NextResponse.json({message:"User created successfully"}, {status:200})


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
}