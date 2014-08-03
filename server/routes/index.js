var express = require('express');
var router = express.Router();
var fs = require('fs');

var dataPath = '../data/json/';

/* GET home page. */
router.get('/movies', function(req, res) {
    var delay = req.param('delay') || 10;

    fs.readFile((dataPath + 'movies.json'), function(err, data) {
        if (err) {throw err;}
        setTimeout(function() {
            res.json(JSON.parse(data));
        }, delay);
    });
});

module.exports = router;
