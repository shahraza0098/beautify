import mongoose from 'mongoose';

const SalonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  address: String,
  city: String,
  image: String,
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  barbers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Barber' }],
  ownerId: { type: String }, // for admin identification (can map to auth user id)
}, { timestamps: true });

export default mongoose.models.Salon || mongoose.model('Salon', SalonSchema);
