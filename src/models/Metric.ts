import mongoose from 'mongoose';

const metricSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  type: { type: String, enum: ['distance', 'temperature'], required: true },
  value: { type: Number, required: true },
  unit: { type: String, required: true },
  date: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model('Metric', metricSchema);