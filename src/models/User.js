// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // Firebase UID
  email: { type: String, required: true },
  role: { type: String, enum: ['customer', 'salonOwner'], default: 'customer' },
  name: String,
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
