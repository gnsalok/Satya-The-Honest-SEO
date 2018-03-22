var Crawler = require("js-crawler");
var fs=require('fs');

//Crawling the links from the website
    
    var crawler=new Crawler().configure({ depth: 2})
   
    crawler.crawl(
      {
        url: "http://tourism.rajasthan.gov.in",success: function(page) {
        //writing data into file  "c":{"d":1,"e":[1,2]}   
          fs.appendFile("tourismUrls.text", JSON.stringify(page.url,null,null), function (err)  {
            // fs.appendFile("url.txt",", ",function(err){
            //   if(err){
            //     throw err;  
            //   }
            // })
          // if (err) 
          //   {
          //       console.log(err);
          //   } 
            // else 
            // {
            //     console.log(`Data Added successfully`);
            // }
        },',');
        //   console.log(page.url);
        },
        failure: function(page) {
          console.log(page.status);
        },
        finished: function(crawledUrls) {
          console.log(crawledUrls);
         }
      });
      