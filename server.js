
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 8080;
var configDB = require(__dirname + '/public/scripts/database.js');

//mongoose.connect(configDB.url);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());


//http://vladimirfeskov.com/posts/angularjs-html5-mode-setup-use-and-seo

app.get('/[^\.]+$', function(req, res){
    res.set('Content-Type', 'text/html')
        .sendfile(__dirname + '/public/html/index.html');
});

app.listen(port);
console.log("Port 8080 is listening to Student api service requests");