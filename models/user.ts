import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    role: { type: String, enum: ['pending', 'hacker', 'rejected','incomplete'], default: 'incomplete' },
    
    // Password reset fields
    resetToken: { type: String },
    resetTokenExpiry: { type: Date },
    
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;