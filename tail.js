// FUNCTION IMPLEMENTATION
const assertEqual = require ('./assertEqual');
const assertArraysEqual = require ('./assertArraysEqual');

function tail(p) {
  if(p === []) {
    return undefined;
  }
  else if (p.length === 1) {
    return p;
  }
  else{
    return p.slice(1);
  }
}

module.exports = tail;