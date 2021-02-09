const eqArrays = require ('./eqArrays');
const assertArraysEqual = require ('./assertArraysEqual');





const middle = function(array) {
  //...
  
  if(array.length % 2 === 0) {
    return array.slice((array.length / 2) - 1, (array.length / 2) + 1);
  } else {
    return array[Math.floor(array.length / 2)];
  } 
}

module.exports = middle;