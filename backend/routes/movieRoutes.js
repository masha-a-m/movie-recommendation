const express = require('express');
const { getAllMovies, getMovieById, recommendMovies } = require('../controllers/movieController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.get('/recommendations', auth, recommendMovies);

module.exports = router;