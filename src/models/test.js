import mongoose from "mongoose";


const TestSchema = new mongoose.Schema({
    name: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Test || mongoose.model("Test", TestSchema);