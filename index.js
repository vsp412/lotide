const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const countLetters = require ('./countLetters');
const countOnly = require ('./countOnly');
const eqObjects = require ('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require("./flatten");
const letterPositions = require('./letterPositions');
const takeUntil = require ('./takeUntil');
const without = require ('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  countLetters: countLetters,
  countOnly: countOnly,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without
};
