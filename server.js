
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logfmt = require("logfmt");
//var port = 8080;
var port = Number(process.env.PORT || 5000);
var configDB = require(__dirname + '/public/scripts/database.js');

//mongoose.connect(configDB.url);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
app.use(logfmt.requestLogger());
app.use(require('prerender-node').set('prerenderToken', 'YOUR-TOKEN-HERE'));

//http://vladimirfeskov.com/posts/angularjs-html5-mode-setup-use-and-seo
//http://scotch.io/quick-tips/js/angular/pretty-urls-in-angularjs-removing-the-hashtag
//http://scotch.io/tutorials/javascript/angularjs-seo-with-prerender-io
//https://github.com/steeve/angular-seo

app.get('*', function(req, res){
    res.set('Content-Type', 'text/html')
        .sendfile(__dirname + '/public/html/index.html');
});

app.listen(port);
console.log("Port" + port + "is listening to Student api service requests");