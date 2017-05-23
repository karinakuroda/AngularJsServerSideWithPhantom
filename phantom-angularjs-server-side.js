// // Simple Javascript example

// console.log('Loading a web page');
// var fs = require('fs');
// var page = require('webpage').create();
// var url = 'http://localhost:8000/#!/view1';
// page.onError = function(msg, trace) {
  // //prevent js errors from showing in page.content
  // return;
// };


 // page.onLoadFinished = function() {
      // console.log("page load finished");
      // page.render('export.png');
      // fs.write('1.html', page.content, 'w');
      // phantom.exit();
    // };


// page.open(url, function (status) {
  // console.log(page.content); //page source
  // console.log('loaded');
  // phantom.exit();
// });
var fs = require('fs');
var page = require('webpage').create();
page.open('http://localhost:8000/#!/view1', function (status) {
    var delay, checker = (function() {
        var html = page.evaluate(function () {
            var status = document.getElementById('status');
            if(status.getAttribute('load-status') == 'ready') {
                return document.getElementsByTagName('html')[0].outerHTML;
            }
        });
        if(html) {
            clearTimeout(delay);
			fs.write('output/teste.html', page.content, 'w');
			console.log(page.content); 
            page.render('output/teste-phantom.png');
            phantom.exit();
        }
    });
    delay = setInterval(checker, 100);
});