var file = process.argv[2];
var fs = require('fs');

try {
  var buffer = fs.readFileSync(file);
  var contents = buffer.toString();
  var contentsCaps = contents.toUpperCase();
  console.log(contentsCaps);
} catch (error) {
  console.log('no such file or directory, open', file);
}
