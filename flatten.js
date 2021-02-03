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


const flatten  = function(ems) {
   
    let d = []
    for(em of ems) {
        if(!Array.isArray(em)) { 
          d.push(em);
        } else {    
          d =  d.concat(flatten(em));
        }
    }      
    return d;

}


const main= [1, 2, [3, [7,3,[0,4,3,5,6],2], 4], 5, [6]];
console.log(flatten(main)); 
assertArraysEqual(main, [1, 2, [3, [7,3,[0,4,3,5,6],2], 4], 5, [6]]);