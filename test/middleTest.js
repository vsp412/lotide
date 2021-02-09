const middle = require ('../middle');
const assertArraysEqual = require ('../assertArraysEqual');

const main = [1, 2, 3, 4, 5, 6];
assertArraysEqual(middle(main),[ 1,2,3, 4]);