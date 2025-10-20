import { NextRequest, NextResponse } from "next/server";
import Application from "@/models/application";
import User from "@/models/user";
import { connect } from "@/config/db";

export async function GET() {
  try {
    await connect();

    // Populate the 'user' field, only returning name and email
    const apps = await Application.find()
    const userIds = apps.map(app => app.user)
    const users = await Promise.all(userIds.map(id => User.findById(id)));
    const appsWithUsers = apps.map(app => {
        const user = users.find(u => u._id.toString() === app.user.toString());
        return { ...app.toObject(), user };
      })
    console.log("Number of applications:", apps.length);

    return NextResponse.json({appsWithUsers}, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json()
        const { status, id } = reqBody
        console.log(status,id)

        await User.findByIdAndUpdate(id, {role:status})

        return NextResponse.json({message: "Clear!"}, {status: 200})

  } catch (error) {
    console.error(error);
    return NextResponse.json({error: "Internal Server Error"}, {status: 500})
  }
}