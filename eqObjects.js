// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(o1, o2) {
   
    console.log(o1, o2)
    if(Object.keys(o1).length === Object.keys(o2).length) {
      
      for(em in o1) {
        if(o2[em]) {
          if(Array.isArray(o1[em]) && Array.isArray(o2[em])) {
            if(!eqArrays(o1[em], o2[em])) {
              return false;
            }
          } else {
            if(o1[em] !== o2[em]) {
              return false;
            }
          }
           
        } else {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }

};

const ab = { ['a']: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

module.exports=eqObjects;


