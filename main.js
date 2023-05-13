const {read, parse} = require('./src/parser.js')

const main = () => {
  const rawFile1 = read('./resource/file1');
  console.log(parse(rawFile1));

  const rawFile2 = read('./resource/file2');
  console.log(parse(rawFile2));
};

main();