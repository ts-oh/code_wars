/*
Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

// Tests
const { assert } = require("chai")

function test(n, expected) {
  let actual = solution(n)
  it(`Expected ${expected}, got ${actual}`, () => {  
  assert.strictEqual(actual, expected)
    })
}

describe("basic tests", function(){
  test(10,23)
  test(20,78)
  test(200,9168)
})

describe("smallest cases", function() {
  test(-1,0)
  test(0,0)
  test(1,0)
  test(2,0)
  test(3,0)
  test(4,3)
  test(5,3)
  test(6,8)
})

describe("random cases", function() {
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function _solution(number){
    let sum = 0;
    
    for(let i = 1; i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }
  
  for(let i = 0; i < 100; i++) {
    let rand = randint(0, 10**randint(1, 5)) - 100
    test(rand, _solution(rand));
  }
})

// Solution

function solution(number){
  let sum = 0
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0) sum += i
    else if (i % 5 === 0) sum += i
  }
  return sum
}

//End

Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


// Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Count characters", function(){

    // Taken from StackOverflow topic: http://stackoverflow.com/questions/1068834/object-comparison-in-javascript
    
    function objectEqual( x, y ) {
      if ( x === y ) return true;
        // if both x and y are null or undefined and exactly the same
    
      if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) return false;
        // if they are not strictly equal, they both need to be Objects
    
      if ( x.constructor !== y.constructor ) return false;
        // they must have the exact same prototype chain, the closest we can do is
        // test there constructor.
    
      for ( let p in x ) {
        if ( ! x.hasOwnProperty( p ) ) continue;
          // other properties were tested using x.constructor === y.constructor
    
        if ( ! y.hasOwnProperty( p ) ) return false;
          // allows to compare x[ p ] and y[ p ] when set to undefined
    
        if ( x[ p ] === y[ p ] ) continue;
          // if they have the same strict value or identity then they are equal
    
        if ( typeof( x[ p ] ) !== "object" ) return false;
          // Numbers, Strings, Functions, Booleans must be strictly equal
    
        if ( ! Object.equals( x[ p ],  y[ p ] ) ) return false;
          // Objects and Arrays must be tested recursively
      }
    
      for ( p in y ) {
        if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) ) return false;
          // allows x[ p ] to be set to undefined
      }
      return true;
    }
    
    it ("should give empty object literal if string is empty", function(){
      //Test.assertEquals(true, objectEqual(count(""), {}));
      assert.deepEqual(count(""), {});
    });
    
    it ("should get as a result two A characters", function () {
      //Test.assertEquals(true, objectEqual(count("aa"), { a: 2 })); 
      assert.deepEqual(count("aa"), { a: 2 }); 
    });
    
    it ("should get as a result of two a characters and two b characters", function () {
      //Test.assertEquals(true, objectEqual(count("aabb"), { a: 2, b: 2 })); 
      assert.deepEqual(count("aabb"), { a: 2, b: 2 }); 
    });
    
    it ("should get as a result of two a characters and two b characters, showing that the result order does not matter", function () {
      //Test.assertEquals(true, objectEqual(count("aabb"), { b: 2, a: 2 })); 
      assert.deepEqual(count("aabb"), { b: 2, a: 2 }); 
    });
    
    it("should check for adding varying number of characters, random number of a's and b's", function () {
      
      let word = "", a = 0, b = 0;
      
      for (; a < Math.random() * 100; a++) {
        word += "a";
      }

      for (; b < Math.random() * 100; b++) {
        word += "b";
      }
    
      //Test.assertEquals(true, objectEqual(count(word), { "a": a, "b": b })); 
      assert.deepEqual(count(word), { "a": a, "b": b });
    });
});

// Solution

function count (string) {
  let arrStr = string.split("")
  console.log(arrStr)

  let counting = arrStr.reduce((s, c) => {
    s[c] = s[c] ? s[c] + 1 : 1 
    return s
    }, {})
  return counting
}
*/
