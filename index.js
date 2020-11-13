const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index', {myVAr: 'woohoo'});
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/blog', function(req, res) {
    res.render('blog-generic.ejs');
});

app.get('/blog/:date', function(req, res) {
    res.render('blog', { date: req.params.date });
});

app.listen(8000, () => {
    console.log('server started!');
});