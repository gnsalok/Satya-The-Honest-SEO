
// var params = getUrlVars('http://www.rajasthan.gov.in/Pages/default.aspx');
// console.log(params);

// function getUrlVars(url) {
//     var hash;
//     var myJson = {};
//     var hashes = url.slice(url.indexOf('10') + 1).split('.');
//     for (var i = 0; i < hashes.length; i++) {
//         hash = hashes[i].split('=');
//         myJson[hash[0]] = hash[1];
//     }
//     return myJson;
// }

//Getting the URL dynamically
// var url = $(location).attr('href');

//Setting the URL statically
var url = 'http://www.gov.com/segment1/example.html';

// Getting the file name i.e last segment of URL (i.e. example.html)
var fn = url.split('/').reverse()[0].split('.html')[0];

// Getting the extension (i.e. html)
var ext = url.split('/').reverse()[0].split('.').reverse()[0];
var strUrl;
 for(var i=0; i<url.length; i++){
     if(url.charAt(i)==='/' || url.charAt(i) ==='.' || url.charAt(i)==='.'||url.charAt(i)===':' ){
         strUrl = strUrl +' ';
         continue;
     }
    strUrl =strUrl+url.charAt(i);
 }
 console.log(strUrl);

//storing data into json formate


// Getting the second last segment of URL (i.e. segment1)
var lm = url.split('/').reverse()[1];

console.log(lm + ' '+ fn);
