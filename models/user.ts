import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    verificationExpires: { type: Date },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    
    role: { type: String, enum: ['pending', 'hacker', 'rejected'], default: 'incomplete' },

}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;