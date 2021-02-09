const middle = require ('../middle');
const assertArraysEqual = require ('../assertArraysEqual');
const assert = require('chai').assert;
const eqArrays = require ('../eqArrays');

describe("#middle", () => {
  it("should return [3,4] when [1,2,3,4,5,6] is passed", () => {
     assert.isTrue(eqArrays(middle([1,2,3,4,5,6]),[3,4]), true);
  });
  it("should return [2] when [1,2,3] is passed", () => {
    assert.strictEqual(middle([1,2,3]),2);
 });
});
