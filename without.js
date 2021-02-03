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


const without = function(x,y){

  let v = [];
  for(let i = 0; i < x.length; i++) {
    let c = 0;
    for(let j = 0; j < y.length; j++) {
      if(x[i] !== y[j]) {
        c = c + 1;
      }
    }
    if(c === y.length){
      v.push(x[i])
    }
  }
  console.log(v)
  
}





const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
