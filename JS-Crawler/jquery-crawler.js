var request = require('request');
var cheerio = require('cheerio');

// var searchTerm = 'screen+scraping';

// var url = 'http://www.bing.com/search?q=' + searchTerm;

var url = 'http://tourism.rajasthan.gov.in/';

request(url, function (err, resp, body) {
    $ = cheerio.load(body);
    links = $('a'); //jquery get all hyperlinks
    $(links).each(function (i, link) {d

        console.log($(link).attr('href') + ',');

    });
});