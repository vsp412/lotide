// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE


const findKey= function(data, callback) {
  
     for (let i in data) {
        if (callback(data[i])) {
          return i;
        }
     }
  
     return "not found";
}

const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const data2 = {
  
};

const data3 = {
  "Blue Hill": {  },
  "Akaleri":   { },
  "noma":      {  },
  "elBulli":   {  },
  "Ora":       {  },
  "Akelarre":  {}
};
assertEqual(findKey(data1, x => x.stars === 2), "noma");
assertEqual(findKey(data2, x => x.stars === 2), "not found");
assertEqual(findKey(data3, x => x.stars === 2), "not found");



