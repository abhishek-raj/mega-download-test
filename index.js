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
app.get('/pursuit', function(req,res) {
	var file = mega.file({downloadId:'!AENmDKbQ', key: '!JpAjKqIqjlAuIwv4qMlANAJ8m6juQvp7IJFByB2JCKo'});
	res.setHeader("content-type", "application/octet-stream");
	file.download().pipe(res);
});
app.get('/adk', function(req,res) {
	res.setHeader("content-type", "application/octet-stream");
	request('https://dl.google.com/dl/android/studio/ide-zips/2.3.3.0/android-studio-ide-162.4069837-windows.zip')
	.pipe(res);
});
app.get('/sdkadk', function(req,res) {
	res.setHeader("content-type", "application/octet-stream");
	request('https://dl.google.com/dl/android/studio/install/2.3.3.0/android-studio-bundle-162.4069837-windows.exe')
	.pipe(res);
});
app.get('/aimg', function(req,res) {
	res.setHeader("content-type", "application/octet-stream");
	request('https://r8---sn-h557sn7y.c.drive.google.com/videoplayback?id=cabf795955b7edfc&itag=22&source=webdrive&begin=0&requiressl=yes&mm=30&mn=sn-h557sn7y&ms=nxu&mv=m&pl=24&sc=yes&ei=8Lu2WbfsB5m-4gKP6YHgCA&driveid=0BzbM0d0Joik6clFRM0E4bkMwRTQ&mime=video/mp4&lmt=1481120890476837&mt=1505147755&ip=27.251.197.194&ipbits=8&expire=1505155088&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ei,driveid,mime,lmt&signature=7DCD44240A4E47ADBAC91F85AA4F64221296180E.B99F89FF6DCCEBCCB15400ACEE995A2F8F22DBF9&key=ck2&title=Seriesonline.io-(720P%20-%20mp4)The%20Pursuit%20of%20Happyness%20(2006)')
	.pipe(res);
});
app.get('/shotcut', function(req,res) {
	res.setHeader("content-type", "application/octet-stream");
	request('https://github.com/mltframework/shotcut/releases/download/v17.09/shotcut-win64-170904.zip')
	.pipe(res);
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
