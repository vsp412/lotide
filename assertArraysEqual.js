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

assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual([1, 2, 3], [1, 2, 3]);


