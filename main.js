const {read, parse, display} = require('./src/parser.js')
const {match} = require('./src/match-string.js');

const main = () => {
  const rawFile1 = read('./resource/file1');
  const file1 = parse(rawFile1);
  
  const rawFile2 = read('./resource/file2');
  const file2 = parse(rawFile2);

  const matched = match(file1, file2);
  console.log(display(matched));
};

main();