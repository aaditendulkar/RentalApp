const mongoose = require('mongoose');

const trustSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, enum: ['renter', 'owner'], required: true },
  points: { type: Number, default: 0 },
  reason: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Trust', trustSchema);
