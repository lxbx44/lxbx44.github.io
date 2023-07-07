const express = require('express')
const router = express.Router();
// 'Get' pages
app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.get('/projects', function (req, res) {
    res.render('projects.ejs');
});

app.get('/search', function (req, res) {
    res.render('search.ejs');
});

app.get('/search_info', function (req, res) {
    res.render('search_info.ejs');
});



module.exports = router;
