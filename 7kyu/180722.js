/*
Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

//Tests
const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Fixed tests', () => {
  it('Testing basic input', () => {
    assert.strictEqual(
      highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'),
      '542 -214'
    );
  });
  it('Testing common string sort mistake', () => {
    assert.strictEqual(
      highAndLow('10 2 -1 -20'),
      '10 -20',
      'Sorting a collection of strings is different from softing a collection of numbers'
    );
  });
  it('Testing positive and negative', () => {
    assert.strictEqual(highAndLow('1 -1'), '1 -1');
  });
  it('Testing positive and positive', () => {
    assert.strictEqual(highAndLow('1 1'), '1 1');
  });
  it('Testing negative and negative', () => {
    assert.strictEqual(highAndLow('-1 -1'), '-1 -1');
  });
  it('Testing positive, negative and zero', () => {
    assert.strictEqual(highAndLow('1 -1 0'), '1 -1');
  });
  it('Testing positive, positive and zero', () => {
    assert.strictEqual(highAndLow('1 1 0'), '1 0');
  });
  it('Testing negative, negative and zero', () => {
    assert.strictEqual(highAndLow('-1 -1 0'), '0 -1');
  });
  it('Testing single', () => {
    assert.strictEqual(highAndLow('42'), '42 42');
  });
});

describe('Random tests', function () {
  let t = 100,
    rnd = Math.random;

  it('Testing for 100 random tests', () => {
    while (t--) {
      let min = ~~(rnd() * 1e4) - 5e3,
        max = min + 3e3 + ~~(rnd() * 100),
        rr = [],
        exp = max + ' ' + min;
      for (let i = 1; i < 20; i++) rr.push(min + ~~(rnd() * 3e3));

      rr = rr.slice(10).concat([min, max]).concat(rr.slice(0, 10));
      rr = rr
        .sort(function () {
          return rnd() < 0.5 ? 1 : -1;
        })
        .join(' ');

      assert.strictEqual(
        highAndLow(rr),
        exp,
        `Testing for str = ${JSON.stringify(rr)}`
      );
    }
  });
});

//Solutions
function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

function highAndLow(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers) {
  const strArr = numbers.split(' ');
  const numArr = strArr.map((n) => parseInt(n));
  const highest = Math.max(...numArr);
  const lowest = Math.min(...numArr);
  return `${highest} ${lowest}`;
}

/*
Get the Middle Character
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

//Tests
describe('GetMiddle', function () {
  it('Tests', function () {
    Test.assertEquals(getMiddle('test'), 'es');
    Test.assertEquals(getMiddle('testing'), 't');
    Test.assertEquals(getMiddle('middle'), 'dd');
    Test.assertEquals(getMiddle('A'), 'A');
  });
});

describe('50 Random tests', function () {
  //----------------
  function randint(a, b) {
    //return Math.floor(Math.random() * (b - a + 1) + a);
    return Math.floor(Math.random() * (b - a) + a); //b shouldn't be equal to 52
  }
  function GetMiddleT(s) {
    let middle = Math.floor(s.length / 2);
    if (s.length % 2 == 0) return s[middle - 1] + s[middle];
    else return s[middle];
  }
  //----------------
  for (let i = 0; i < 50; i++) {
    let alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let rando = randint(1, 1000);
    let randStr = '';
    for (let j = 0; j < rando; j++) {
      let x = randint(0, alph.length);
      randStr += alph[x];
    }
    it('Random Testing', function () {
      Test.assertEquals(getMiddle(randStr), GetMiddleT(randStr));
    });
  }
});

//Solutions
function getMiddle(s) {
  var middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

function getMiddle(string) {
  var middleIndex = string.length / 2;
  if (string.length % 2 == 0) {
    return string.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return string.charAt(middleIndex);
  }
}
