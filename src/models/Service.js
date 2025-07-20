import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  salon: { type: mongoose.Schema.Types.ObjectId, ref: 'Salon', required: true },
  name: { type: String, required: true },
  description: String,
  duration: Number, // in minutes
  price: Number,
}, { timestamps: true });

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);
