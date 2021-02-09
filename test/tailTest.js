const tail = require ('../tail');
const eqArrays = require ('../eqArrays');


// TEST CODE
const ass = require ('chai');
const e = ass.assert;
describe ("#checkTail", () => {

  it ("return [6,7] if passed [5,6,7]", () => {
    e.isTrue(eqArrays(tail([5,6,7]), [6,7]));
  });

  it ("return [\"Lighthouse\", \"Labs\"] if passed [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    e.isTrue(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));
  })

  it ("return [6] if passed [6]", () => {
    e.isTrue(eqArrays(tail([6]), [6]));
  })

  it ("return [61] if passed [61]", () => {
    e.isFalse(eqArrays(tail([61]), [60]));
  })

  it ("return [] if passed []", () => {
    e.isTrue(eqArrays(tail([]), []));
  })

  it ("return [2,3] if passed [1,2,3]", () => {
    e.isTrue(eqArrays(tail([1,2,3]), [2,3]));
  });
});


