var request=require('./node_modules/request');
var cheerio=require('./node_modules/cheerio');
var Crawler = require("./node_modules/crawler");

var c = new Crawler({
   'maxConnetions': 10, // `maxConnections` will be forced to 1

    callback: function(err, result, done){
        if(result){
            var page=result.body;
            var res=page.match(/bechtel/i);
            if(res && res.length >0){
                console.log(result.body);           
            }
        }
        var $ = result.$;
        
        $("a").each(function(index,a){
            console.log(a.href);
            c.queue(a.href)
        });

        done();
    }
});

c.queue('http://construction.com');  