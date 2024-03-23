const express = require('express');
const app = express();

const routes = require('./router');
app.use('/', routes);

app.listen(3000, function() {
  console.log('Server listening on port 3000.');
});
