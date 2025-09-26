"use server"

import { NextResponse, NextRequest } from "next/server";
import User from "@/models/user";
import { connect } from "@/config/db";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
    try {
        await connect();

        const reqBody = await request.json();
        const { token, password } = reqBody;

        console.log("=== RESET PASSWORD API DEBUG ===");
        console.log("Token received:", token);
        console.log("Token type:", typeof token);
        console.log("Token length:", token?.length);
        console.log("Password length:", password?.length);

        if (!token || !password) {
            console.log("Missing token or password");
            return NextResponse.json({ error: "Token and password are required" }, { status: 400 });
        }

        if (password.length < 6) {
            console.log("Password too short");
            return NextResponse.json({ error: "Password must be at least 6 characters long" }, { status: 400 });
        }

        // Find user with valid reset token
        console.log("Searching for user with token:", token);
        const user = await User.findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() }
        });

        console.log("Database query completed");
        console.log("User found:", user ? "Yes" : "No");
        
        if (user) {
            console.log("User ID:", user._id);
            console.log("Stored token:", user.resetToken);
            console.log("Token match:", user.resetToken === token);
            console.log("Token expiry:", user.resetTokenExpiry);
            console.log("Current time:", Date.now());
            console.log("Is token expired:", user.resetTokenExpiry <= Date.now());
        } else {
            // Let's also check if there's a user with this token but expired
            const expiredUser = await User.findOne({ resetToken: token });
            if (expiredUser) {
                console.log("Found user with expired token");
                console.log("Expired token expiry:", expiredUser.resetTokenExpiry);
                console.log("Current time:", Date.now());
            } else {
                console.log("No user found with this token at all");
                // Let's check what tokens exist
                const allUsers = await User.find({ resetToken: { $exists: true } });
                console.log("Users with reset tokens:", allUsers.map(u => ({ id: u._id, token: u.resetToken, expiry: u.resetTokenExpiry })));
            }
        }

        if (!user) {
            return NextResponse.json({ error: "Invalid or expired reset token" }, { status: 400 });
        }

        // Hash the new password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Update user password and clear reset token
        await User.findByIdAndUpdate(user._id, {
            password: hashedPassword,
            resetToken: undefined,
            resetTokenExpiry: undefined
        });

        return NextResponse.json({ 
            message: "Password reset successfully" 
        }, { status: 200 });

    } catch (error) {
        console.error("Reset password error:", error);
        return NextResponse.json({ error: "Error resetting password" }, { status: 500 });
    }
}