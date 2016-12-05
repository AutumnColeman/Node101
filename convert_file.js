var fs = require('fs');

var input = process.argv[2];
var output = process.argv[3];

//Sync Version
// try {
//   var buffer = fs.readFileSync(input);
//   var contents = buffer.toString();
//   var contentsCaps = contents.toUpperCase();
//   fs.writeFileSync('output.txt', contentsCaps);
//   console.log('Success!');
// } catch (error) {
//   console.log('Error:', error.message);
// }


//Async version
fs.readFile(input, function(err, buffer) {
  if (err) {
    console.log('Cannot read the file:', err.message);
    return;
  } else {
    var buffer = fs.readFileSync(input);
    var contents = buffer.toString();
    var contentsCaps = contents.toUpperCase();
    fs.writeFile(output, contentsCaps, function(err) {
      if (err) {
        console.error('Cannot write the file:', err.message);
      } else {
        console.log('Success!');
      }
    });
  }
});
