const Movie = require('../models/Movie');
const User = require('../models/User');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch movies', error });
  }
};

exports.searchMovies = async (req, res) => {
  const { title, genre, year } = req.query;

  try {
    let query = {};
    if (title) query.title = { $regex: title, $options: 'i' };
    if (genre) query.genre = genre;
    if (year) query.year = year;

    const movies = await Movie.find(query);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Search failed', error });
  }
};

exports.getMovieById = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch movie', error });
  }
};

exports.addFavorite = async (req, res) => {
  const { movieId } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Add movie to favorites
    user.favorites.push(movieId);
    await user.save();

    res.json({ message: 'Movie added to favorites', movieId });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add favorite', error });
  }
};