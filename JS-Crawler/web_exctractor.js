
var WAE = require('web-auto-extractor').default
 
var parsed = WAE().parse('http://schema.org/Product');

console.log(parsed);
