const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const r1 = map(['low'], word => word[0])
const r2 = map([], word => word[0])

console.log(results1);

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

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(r1, ['l']);
assertArraysEqual(r2, []);