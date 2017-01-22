/* eslint no-console: 0 */

const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use('/public', express.static('public'));

app.get("/", function response(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('Listening on port %s.', port);
});
