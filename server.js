const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = app.listen(3000);

const dashboard = require('./backend/models/dashboard');
const search = require('./backend/models/search')

app.use(bodyParser.json());
app.use('/assets/', express.static('assets'));

app.use('/', dashboard);
app.use('/', search);

app.get([
  '/'
], (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(port, () => {
  console.log(`Node app is running on port 3000`);
});

module.exports = app;