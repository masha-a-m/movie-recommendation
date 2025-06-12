const Movie = require('../models/Movie');

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const recommendMovies = async (req, res) => {
  try {
    // Get favorite genres from the user object attached by the auth middleware
    const favoriteGenres = req.user.favoriteGenres || ['Action', 'Drama']; // Default genres
    
    const recommendedMovies = await Movie.find({ 
      genres: { $in: favoriteGenres }
    }).limit(10);

    res.json(recommendedMovies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllMovies, getMovieById, recommendMovies };