var express = require('express'),
    sys = require('sys'),
    path = require('path');
var app = express();

app.use(express.logger());
app.use(express.static( path.join(__dirname, '../www') ));
app.use(express.bodyParser());

var config = require('./data/config');
var contactsJson = require('./data/contacts-01');
var sessionsJson = require('./data/sessions');

app.get('/sessions', function (request, response) {
    console.log('GET /session');
    response.send(sessionsJson);
});

app.get('/manifest.appcache', function (request, response) {
    console.log('---------------- GET /appcache');
    response.setHeader('Content-Type', 'text/cache-manifest');
    response.send(sessionsJson);
});

app.listen(8000);
console.log('Express is listening on port 8000');

