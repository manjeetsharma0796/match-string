const fs  = require('fs')

const read = function(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
};

const parse = function(raw) {
  return raw.trim().split('\n');
};

const display = function(texts) {
  return texts.join('\n');
}

exports.read = read;
exports.parse = parse;
exports.display = display;