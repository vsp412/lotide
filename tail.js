// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  const a = actual.join('');
  const e = expected.join('');
  if (a === e) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

function tail(p) {
  if(p === []) {
    return undefined;
  }
  else if (p.length === 1) {
    return p;
  }
  else{
    return p.slice(1);
  }
}
// TEST CODE
assertEqual(tail([5,6,7]), [6,7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([5]), [5]);
assertEqual(tail([]), [6,7]);