const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
  flightNumber: { type: Number, required: true },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    requuired: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  customers: [String],
  upcoming: { type: Boolean, required: true },
  success: { type: Boolean, required: true },
});

module.exports = mongoose.model('Launch', launchesSchema);
