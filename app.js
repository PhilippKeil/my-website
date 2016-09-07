var express = require('express');
var app = express();
var path = require('path');

var routes = require(path.join(__dirname, 'routes'));

app.set('port', 8080)

app.get('/', routes.index);
app.get('/about', routes.about);

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!');
});
