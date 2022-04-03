/*
Sort and Star

You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

// Tests

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
    assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
  });
});

// Solutions

function twoSort(s) {
  var last = s.sort()[0];
  var a = last[0];
  for(var i = 1; i < last.length; i++) {
    a += "***" + last[i];
  }
  return a;
}

function twoSort(s) {
return s.sort()[0].split('').join('***')
}
*/

/*
Grasshopper - Check for factor

This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.

// Solutions

function checkForFactor (base, factor) {
  if(base % factor === 0) {
    return true
  }else
    return false
  }
}

function checkForFactor (base, factor) {
  return base % factor === 0 ? true : false

}

// Tests

describe('check for factor', function () {
  it('should return true', function () {
    Test.assertEquals(checkForFactor(10,2), true)
    Test.assertEquals(checkForFactor(63,7), true)
    Test.assertEquals(checkForFactor(2450,5), true)
    Test.assertEquals(checkForFactor(24612,3), true)
  })
  it('should return false', function () {
    Test.assertEquals(checkForFactor(9,2), false)
    Test.assertEquals(checkForFactor(653,7), false)
    Test.assertEquals(checkForFactor(2453,5), false)
    Test.assertEquals(checkForFactor(24617,3), false)
  })
  it('random tests', function () {
    const solution = (b, n) => b % n === 0
    for (let i = 0; i < 100; i++) {
      let base = Math.floor(Math.random()*10000);
      let factor = Math.floor(Math.random()*20) + 1;
      Test.assertEquals(checkForFactor(base, factor), solution(base, factor))
    }
  })
})
*/

/*
I Love you, a little, alot, passionately ...not at all

BAD DESCRIPTION!!!

Description:
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0

// Tests 
describe("howMuchILoveYou",function() {
  it("Basic tests",function() { 
    assert.strictEqual(howMuchILoveYou(7),"I love you")
    assert.strictEqual(howMuchILoveYou(3),"a lot")
    assert.strictEqual(howMuchILoveYou(6),"not at all")
    assert.strictEqual(howMuchILoveYou(2),"a little")
    assert.strictEqual(howMuchILoveYou(5),"madly")
  });
})

// Solutions
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
}
*/
