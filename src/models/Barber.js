import mongoose from 'mongoose';

const BarberSchema = new mongoose.Schema({
  salon: { type: mongoose.Schema.Types.ObjectId, ref: 'Salon', required: true },
  name: { type: String, required: true },
  experience: String,
  avatar: String,
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }], // skills
}, { timestamps: true });

export default mongoose.models.Barber || mongoose.model('Barber', BarberSchema);
