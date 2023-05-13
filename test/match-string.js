const {describe, it} = require('node:test');
const {strictEqual}  = require('assert');

const {rename} = require('../src/match-string.js');

describe('rename', () => {
  it('should give true', () => {
    strictEqual(rename(), true);
  });
});