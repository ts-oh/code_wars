/*
Will there be enough space?

The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

// Tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function(){
  it("Testing for fixed tests", () => {
    assert.strictEqual(enough(10, 5, 5), 0);
    assert.strictEqual(enough(100, 60, 50), 10);
    assert.strictEqual(enough(20, 5, 5), 0);
  });
});

// Solution
function enough(cap, on, wait) {

  if(cap > (on + wait)) {
    return 0
  } else {
    return (on + wait) - cap
    }
}
*/

/*
The Feast of Many Beasts

All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// Tests
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(feast("great blue heron", "garlic naan"), true)
Test.assertEquals(feast("chickadee", "chocolate cake"), true)
Test.assertEquals(feast("brown bear", "bear claw"), false)
  });
});

// Solutions
function feast(beast, dish) {
return beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1] ? true : false
}
  
*/
