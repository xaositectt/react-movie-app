const express = require('express');
const Dashboard = require('../models/dashboard');

const dashboard = new Dashboard();
const router = express.Router();

router.get('/dashboard', (req, res) => {
  const response = dashboard.getTitles();
  response.then((data) => {
    // if (dashboard.length === 0) {
    //   res.send({
    //     state: 'search failed, video not in database',
    //   });
    // } else {
    //   res.send(data);
    // }
    console.log(data);
  }).catch((err) => {
    res.send({
      error: 'error',
    });
  });
});

module.exports = router;