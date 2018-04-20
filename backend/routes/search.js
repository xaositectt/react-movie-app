const express = require('express');
const Movie = require('../models/search');

const movie = new Movie();
const router = express.Router();

router.get('/searchMovies/:title', (req, res) => {
  const movieTitle = req.params.title;
  const response = movie.searchTitle(movieTitle);
  response.then((data) => {
    if (movie.length === 0) {
      res.send({
        state: 'search failed, video not in database',
      });
    } else {
      res.send(data);
    }
  }).catch((err) => {
    res.send({
      error: 'error',
    });
  });
});


module.exports = router;