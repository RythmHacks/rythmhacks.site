import { getData } from "@/helpers/getData";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/user";
import { connect } from "@/config/db";

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

