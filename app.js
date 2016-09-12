var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');

app.set('port', 8080)

// first log the request, because middleware will stop calling next()
// if it has served the request fully.
app.use('*', function(req, res, next) {
  console.log(req.method + ' on ' + req.originalUrl);
  next();
});
// favicon middleware
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.png')));
// static file middleware for css, js, images and so on
// serves it to the baseURL. Means that the file /public/css/foo.css will be
// accessible from /css/foo.css.
app.use(express.static(path.join(__dirname, 'public')));
// static file middleware for html files. File structure inside views/ is the
// same as the URL after the TLD.
app.use(express.static(path.join(__dirname, 'views')));
// wildcard route for react-router, because in index.html -> bundle.js is the
// code for routing. Because the files can't be served by express.static, this
// is neccessary.
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'views', 'index.html'))
})
// let the server listen to the port defined at the beginning. It is configured
// to be behind an NGINX reverse proxy going out at port 80. Express shouldn't
// be exposed to the internet.
app.listen(app.get('port'), function () {
  console.log('Express listening on port ' + app.get('port'));
});
