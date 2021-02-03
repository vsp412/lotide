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


const middle = function(array) {
  //...
  
  if(array.length % 2 === 0) {
    return array.slice((array.length / 2) - 1, (array.length / 2) + 1);
  } else {
    return array[Math.floor(array.length / 2)];
  } 
}

const main = [1, 2, 3, 4, 5, 6];
console.log(middle(main)); 

assertArraysEqual(main,[1, 2, 3, 4]);