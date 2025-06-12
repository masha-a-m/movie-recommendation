const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  watchlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Watchlist' }],
});

module.exports = mongoose.model('User', userSchema);