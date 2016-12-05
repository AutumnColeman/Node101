var fs = require('fs');

var buffer = fs.readFileSync('file1.txt');
var contents = buffer.toString();
var contentsCaps = contents.toUpperCase();
console.log(contentsCaps);
