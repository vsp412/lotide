const eqArrays = function(a,b){
  if (a.length === b.length) {
    let c = 0;
    for(let i = 0; i < a.length; i++) {
      if (a[ i ] !== b[ i ]){
       c = c + 1; 
       break;
      }
    }
    if(c > 0) {
      return false;
    } else {
      return true;
    }
    
  } else {
    return false;
  }
}


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


const letterPositions = function(s) {
  
  let p = {};
  for(let i = 0; i < s.length; i++) {
    if(s[i] !== ' ') {
      if(p[s[i]]) {
        p[s[i]].push(i)
      } else {
        let n = [];
        n.push(i)
        p[s[i]] = n
      }
    }  
  }
  return p;
}

const s = 'lighthouse in the house';

const result1 = letterPositions(s); 



console.log(result1);

assertArraysEqual(result1["l"], [0]);
assertArraysEqual(result1["e"], [9, 16, 22]);

module.exports = letterPositions;