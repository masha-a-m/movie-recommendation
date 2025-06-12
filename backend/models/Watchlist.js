const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Watchlist', watchlistSchema);