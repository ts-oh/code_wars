/*
What's the real floor
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

More information here

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3

// Solutions
function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

or;

function getRealFloor(n) {
  if (n === 1) {
    return 0;
  } else if (n > 13) {
    return n - 2;
  } else if (n <= 0) {
    return n;
  } else {
    return n - 1;
  }
}
*/

/*
Write a function that checks if a given string (case insensitive) is a palindrome.

// Tests

describe("Fixed tests", function () {
  it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
  it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
  it("Testing for 'Abba'", () =>
    assert.strictEqual(isPalindrome("Abba"), true));
  it("Testing for 'hello'", () =>
    assert.strictEqual(isPalindrome("hello"), false));
  it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
  it("Testing for 'Madam'", () =>
    assert.strictEqual(isPalindrome("Madam"), true));
  it("Testing for 'AbBa'", () =>
    assert.strictEqual(isPalindrome("AbBa"), true));
  it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
});

// Solutions
function isPalindrome(x) {
  let arr = x.split("");
  let revArr = x.split("").reverse();
  console.log(revArr);
  if (arr.join("").toLowerCase() === revArr.join("").toLowerCase()) {
    return true;
  }
  return false;
}

or

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

*/

/*
What is between?
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

// Tests
describe("Basic tests", () => {
  it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
  it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
  it("between(-10, 10)", () => assert.deepStrictEqual(between(-10, 10), sol(-10, 10)));
  it("between(5, 100)", () => assert.deepStrictEqual(between(5, 100), sol(5, 100)));
});

// Solutions
function between(a, b) {
  // your code here
  arr = [];
  for (i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
*/
