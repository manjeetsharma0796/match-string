const extractLetter = function(text) {
  const [word] = text.match(/([^\d])+/g);
  return word;
};

const extractDigitsFromStart = function(text) {
  const [number] = text.match(/^\d+/g);
  return number;
};

const match = function (texts1, texts2) {
  const matched = [];

  for (const text1 of texts1) {
    const toMatch = extractLetter(text1);

    for (const text2 of texts2) {
      if (text2.includes(toMatch.valueOf())) {
        matched.push(extractDigitsFromStart(text1) + text2);
      }
    }
  }

  return matched;
};

exports.extractLetter = extractLetter;
exports.extractDigitsFromStart = extractDigitsFromStart;
exports.match = match;