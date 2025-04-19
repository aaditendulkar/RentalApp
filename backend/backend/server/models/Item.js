const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  condition: String,
  rentalPrice: Number,
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Item', itemSchema);
