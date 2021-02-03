const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(s) {
  let i = {};
  for(c of s) {
    if(i[c]) {
      i[c]=i[c] + 1;
    } else {
      i[c] = 1
    }
  }
  return i;

}

const s = 'countletters';

const result1 = countLetters(s); 



console.log(result1);

assertEqual(result1["c"], 1);
assertEqual(result1["t"], 3);