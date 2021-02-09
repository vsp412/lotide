const head = require ('../head');
const assertEqual = require ('../assertEqual');
const { assert } = require('chai');
// TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

describe("#headcheck",function () {

   it("should return 5 if [5,6,7] is passed",  () => {
        
        assert.strictEqual(head([5, 6, 7]),5);
   });

   it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 'Hello' for ['Hello', \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello'); 
  });


});