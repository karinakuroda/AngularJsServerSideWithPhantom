


var express = require('express')
var app = express()

var child_process = require('child_process');


app.get('/', function (req, res) {
	child_process.exec('powershell -ExecutionPolicy Bypass .\\RunPhantom.ps1', function(error, stdout, stderr){ 
		console.log(error);
		console.log(stdout);
		res.send(stdout);
	});
})

app.get('/returnHtmlWithAngularJsCompiled', function (req, res) {
	child_process.exec('powershell -ExecutionPolicy Bypass .\\RunPhantom.ps1', function(error, stdout, stderr){ 
		console.log(error);
		console.log(stderr);
		res.send(stdout);
	});
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})



