"use server"

import { NextResponse, NextRequest } from "next/server";
import User from "@/models/user";
import Application from "@/models/application";
import { connect } from "@/config/db";
import { getData } from "@/helpers/getData";


export async function POST(request: NextRequest) {
    try {
        await connect()

        const reqBody = await request.json();
        const { email, firstName, lastName, phone, school, graduationYear, dietRestrictions, hackathonsAttended, hearAboutUs, Q1, Q2, Q3, Github, LinkedIn, portfolioWebsite, resume } = reqBody;
        const user = await User.findOne({ email }).select("_id")
        const id = user?._id;
        console.log("User ID:", id, "email", email);
        const updatedUser = await User.findByIdAndUpdate(id, { role: "pending" });
        console.log(updatedUser)

        const newApplication = new Application({
            user: id,
            firstName,
            lastName,
            phone,
            school,
            graduationYear,
            dietRestrictions,
            hackathonsAttended,
            hearAboutUs,
            Q1,
            Q2,
            Q3,
            Github,
            LinkedIn,
            portfolioWebsite
        });

        await newApplication.save();
        console.log("Application saved")
        return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({error: "Error submitting form"}, {status: 500});
    }
}

export async function PATCH (request: NextRequest) {
    try {
        await connect()
        console.log("rawr ")
        const reqBody = await request.json()
        const { email } = reqBody;
        const user = await User.findOne({ email:email })
        const userId = user?.id
        
        const app = await Application.findOne({ user: userId })
        await Application.findByIdAndDelete(app?._id)
        console.log(app)

        return  NextResponse.json({ message: "Form deleted successfully", data: app }, { status: 200 }  );
    } catch (error) {
    return NextResponse.json({error: "Error deleting form"}, {status: 500});
    }
}

export async function GET(req: NextRequest) {
    try {
        await connect()

        const userId = await getData(req);
        const user = await User.findById(userId).select("-password");
        
        return NextResponse.json({ user }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
