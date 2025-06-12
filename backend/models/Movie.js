const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  popularity: { type: Number, default: 0 },
  description: { type: String },
});

module.exports = mongoose.model('Movie', movieSchema);