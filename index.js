const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello, SEI World');
});

app.get('/about', function(req, res) {
    res.send('This is the about page');
});

app.get('/blog', function(req, res) {
    res.send('Welcome to my blog');
});

app.listen(3000);