"use server"

import { NextResponse, NextRequest } from "next/server";
import User from "@/models/user";
import { connect } from "@/config/db";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        await connect();

        const reqBody = await request.json();
        const { email } = reqBody;

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            // Don't reveal if user exists for security
            return NextResponse.json({ message: "If an account with that email exists, a reset link has been sent." }, { status: 200 });
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetTokenExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now

        console.log("Generated token:", resetToken);
        console.log("Token expiry:", resetTokenExpiry);

        // Update user with reset token
        await User.findByIdAndUpdate(user._id, {
            resetToken,
            resetTokenExpiry
        });

        console.log("Token saved for user:", user.email);

        // Create reset URL
        const baseUrl = process.env.NODE_ENV === 'production' 
            ? process.env.DOMAIN 
            : `http://localhost:${process.env.PORT || 3000}`;
        const resetUrl = `${baseUrl}/reset-password?token=${resetToken}`;

        // Configure nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: false,
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PASSWORD
            }
        });

        // Email content
        const mailOptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: email,
            subject: "RythmHacks Password Reset",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Password Reset Request</h2>
                    <p>Hi ${user.firstName},</p>
                    <p>We received a request to reset your password for your RythmHacks account.</p>
                    <p>Click the link below to reset your password:</p>
                    <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 6px; margin: 16px 0;">
                        Reset Password
                    </a>
                    <p>This link will expire in 15 minutes.</p>
                    <p>If you didn't request a password reset, please ignore this email.</p>
                    <p>Best regards,<br>The RythmHacks Team</p>
                </div>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ 
            message: "If an account with that email exists, a reset link has been sent." 
        }, { status: 200 });

    } catch (error) {
        console.error("Forgot password error:", error);
        return NextResponse.json({ error: "Error processing request" }, { status: 500 });
    }
}