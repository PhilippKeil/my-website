exports.index = function(req, res) {
  res.send('Hello World');
  console.log('GET req on /');
};

exports.about = function(req, res) {
  res.send('About page');
  console.log('GET req on /about');
};
