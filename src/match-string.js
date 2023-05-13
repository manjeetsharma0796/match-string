const fs  = require('fs')

const read = function(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
};

const rename = function() {
  return true;
};

console.log(read('./resource/file2'));
exports.rename = rename;