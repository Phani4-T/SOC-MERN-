const fs = require('fs');

const data = 'Mongo, Express, Angular, Node';

fs.writeFile('EXAMPLEMONGO.txt', data, function(err) {
  if (err) throw err;
  console.log('Data written to file');
});