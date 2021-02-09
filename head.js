// FUNCTION IMPLEMENTATION
const assertEqual = require ('./assertEqual');

function head(p) {
  if(p === []) {
    return undefined;
  }
  else {
    return p[0];
  }
}

module.exports = head;