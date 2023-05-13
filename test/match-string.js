const {describe, it} = require('node:test');
const {strictEqual, deepStrictEqual}  = require('assert');

const {extractLetter, extractDigitsFromStart, match} = require('../src/match-string.js');

describe('extractLetter', () => {
  it('should extract letter from a text', () => {
    strictEqual(extractLetter('48hello46'), 'hello');
  });
});

describe('extractDigitsFromStart', () => {
  it('should give consecutive digits from begin of text', () => {
    strictEqual(extractDigitsFromStart('121helo'), '121');
  });
});

describe('match', () => {
  it('should match two texts if prefix letters matches with suffix of other text', () => {
    const text1 = ['123til'];
    const text2 = ['til902'];

    const actual = match(text1, text2);
    const expected = ['123til902'];

    deepStrictEqual(actual, expected);
  });
});