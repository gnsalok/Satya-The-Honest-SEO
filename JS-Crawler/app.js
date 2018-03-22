var Crawler = require("crawler");
var fs = require("fs");

var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            var items = [];
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            // console.log($("title").text());

            result = $('meta[name=keywords]').attr("content");
            //     items.push(result);
            // }
            console.log(result);

            fs.writeFile("title.json", JSON.stringify(items, null, 4), function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Data Added successfully`);
                }

            });
        }
        done();
    }
});

// Queue just one URL, with default callback
 c.queue('http://tourism.rajasthan.gov.in/');

// Queue a list of URLs
// c.queue(['http://www.google.com/', 'http://www.yahoo.com', 'http://www.imsnoida.in/']);

// Queue URLs with custom callbacks & parameters
// c.queue([{
//     uri: 'http://parishackers.org/',
//     jQuery: false,

//     // The global callback won't be called
//     callback: function (error, res, done) {
//         if(error){
//             console.log(error);
//         }else{
//             console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);



// Queue some HTML code directly without grabbing (mostly for tests)
// c.queue([{
//     html: '<p>This is a <strong>test</strong></p>'
// }]);