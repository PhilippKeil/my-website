var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.png')));

app.set('port', 8080)
app.set('views', path.join(__dirname, 'views'))

// ROUTING

//root
app.get('/', function(req, res) {
  res.sendFile(path.join(app.get('views'), 'index.html'));
  console.log('New GET req to /');
});

//about
app.get('/about', function(req, res) {
  res.send('About Page');
  console.log('GET request to /about')
});

//404
app.get('*', function(req, res) {
  res.send('LUL WHERE YOU AT BRAH?');
  console.log('GET req to 404')
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!');
});
