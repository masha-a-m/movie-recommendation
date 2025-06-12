const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  genres: { type: [String], required: true },
  releaseYear: { type: Number, required: true },
  director: { type: String, required: true },
  actors: { type: [String], required: true },
  averageRating: { type: Number, default: 0 },
  posterUrl: { type: String },
  trailerUrl: { type: String }
});

module.exports = mongoose.model('Movie', movieSchema);