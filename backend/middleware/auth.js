const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: decoded.id,
      // Add any other user properties you want to make available
      favoriteGenres: ['Action', 'Comedy'] // Temporary - in real app this would come from DB
    };
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token is not valid' });
  }
};

module.exports = auth;