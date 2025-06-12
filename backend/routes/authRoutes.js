const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');
const movieController = require('../controllers/movieController');

// Protected route
router.get('/', verifyToken, movieController.getAllMovies);

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;