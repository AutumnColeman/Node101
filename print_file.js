var file = process.argv[2];
var fs = require('fs');
//sync version
// try {
//   var buffer = fs.readFileSync(file);
//   var contents = buffer.toString();
//   var contentsCaps = contents.toUpperCase();
//   console.log(contentsCaps);
// } catch (error) {
//   console.log('no such file or directory, open', file);
// }

//async version

fs.readFile(file, function(err, buffer) {
  if (err) {
    console.log('no such file or directory, open', file);
    return;
  }
  var buffer = fs.readFileSync(file);
  var contents = buffer.toString();
  var contentsCaps = contents.toUpperCase();
  console.log(contentsCaps);
});
