var express = require('express');
var app = express();
var mega = require('mega')
var request = require('request');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/got', function(req,res) {
	var file = mega.file('https://mega.nz/#!lQVx1LgA!qfCKrtCeIbHk3MVk9y7BmQHdHzM7mgws7aey3KBQ3vM');
	res.setHeader("content-type", "application/octet-stream");
	file.download().pipe(res);
});
app.get('/adk', function(req,res) {
	res.setHeader("content-type", "application/octet-stream");
	request('https://dl.google.com/dl/android/studio/ide-zips/2.3.3.0/android-studio-ide-162.4069837-windows.zip')
	.pipe(res);
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
