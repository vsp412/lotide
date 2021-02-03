const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(s, a) {
  
 
  for(let w in s) {
    if(s[w] === a) {
      return w;
    }
  }
  return undefined;

}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const result1 = countLetters(s); 



// console.log(result1);

// assertEqual(result1["c"], 1);
// assertEqual(result1["t"], 3);