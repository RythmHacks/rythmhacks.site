import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    school: { type: String, required: true },
    graduationYear: { type: Number, required: true },
    dietRestrictions: { type: String },
    tshirtSize: { type: String, enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], required: true },
    hackathonsAttended: { type: Number, required: true },
    hearAboutUs: { type: String, enum:["Instagram", "Friends", "School", "Discord", "Other"], required: true },
    Q1: { type: String, required: true },
    Q2: { type: String, required: true },
    Q3: { type: String, required: true },
    Github: { type: String },
    LinkedIn: { type: String },
    portfolioWebsite: { type: String }
})

const Application = mongoose.models.Application || mongoose.model("Application", applicationSchema);

export default Application;