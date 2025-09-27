"use server";

import { NextResponse, NextRequest } from "next/server";
import User from "@/models/user";
import Application from "@/models/application";
import { connect } from "@/config/db";
import { getData } from "@/helpers/getData";

export async function POST(request: NextRequest) {
  try {
    await connect();

    const reqBody = await request.json();
    const {
      email,
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
      portfolioWebsite,
    } = reqBody;
    
    // Get user ID from token instead of email lookup
    const userId = await getData(request);
    console.log("User ID from token:", userId, "email from form:", email);
    
    if (!userId) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }
    
    const updatedUser = await User.findByIdAndUpdate(userId, { role: "pending" });
    console.log("Updated user:", updatedUser);

    const newApplication = new Application({
      user: userId,
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
      portfolioWebsite,
    });

    await newApplication.save();
    console.log("Application saved");
    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: "Error submitting form" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    await connect();
    console.log("rawr ");
    
    // Get user ID from token instead of email lookup
    const userId = await getData(request);
    console.log("User ID from token:", userId);
    
    if (!userId) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }
    
    await User.findByIdAndUpdate(userId, { role: "incomplete" });

    const app = await Application.findOne({ user: userId });
    await Application.findByIdAndDelete(app?._id);
    console.log(app);

    return NextResponse.json(
      { message: "Form deleted successfully", data: app },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("PATCH error:", error);
    return NextResponse.json({ error: "Error deleting form" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    await connect();

    const userId = await getData(req);
    const user = await User.findById(userId).select("-password");

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Error fetching user data";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
