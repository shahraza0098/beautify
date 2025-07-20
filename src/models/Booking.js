import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // from auth system
  salon: { type: mongoose.Schema.Types.ObjectId, ref: 'Salon', required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  barber: { type: mongoose.Schema.Types.ObjectId, ref: 'Barber', required: true },
  date: { type: String, required: true }, // e.g., "2025-07-20"
  time: { type: String, required: true }, // e.g., "14:00"
  status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
