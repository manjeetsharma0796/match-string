const {describe, it} = require('node:test');
const {strictEqual}  = require('assert');

const {extractLetter, extractDigitsFromStart} = require('../src/match-string.js');

describe('extractLetter', () => {
  it('should extract letter from a text', () => {
    strictEqual(extractLetter('48hello46'), 'hello');
  });
});

describe('extractDigitsFromStart', () => {
  it('should give consecutive digits from begin of text', () => {
    strictEqual(extractDigitsFromStart('121helo'), '121');
  })
})