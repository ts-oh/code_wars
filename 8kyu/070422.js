/*
N-th Power

Description:
This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

Tests:
  it("Testing for fixed tests", () => {
    assert.strictEqual(index([1, 2, 3, 4],2),9);
    assert.strictEqual(index([1, 3, 10, 100],3),1000000);
    assert.strictEqual(index([1, 2],3),-1);
    assert.strictEqual(index([1,1,1,1,1,1,1,1,1,1], 9),1);
    assert.strictEqual(index([1,1,1,1,1,1,1,1,1,2], 9),512);
    assert.strictEqual(index([29,82,45,10], 3),1000);
    assert.strictEqual(index([6,31], 3),-1);
    assert.strictEqual(index([75,68,35,61,9,36,89,0,30], 10),-1);

Solutions:

const index = (array, n) => (array.length > n ? Math.pow(array[n], n) : -1);

function index(array, n) {
  return array[n] ** n || -1;
}

function index(array, n) {
  let sq = -1;
  array.forEach((num, i) => {
    if (i === n) {
      sq = num ** n;
    }
  });
  return sq;
}
*/

/*
Grasshopper - If/else syntax debug

Description:
If/else syntax debug
While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives one parameter health which will always be a whole number between -10 and 10.

Tests:
 it('should return the proper values', () => {
    Test.assertEquals(checkAlive(5), true)
    Test.assertEquals(checkAlive(0), false)
  })
  it('random tests', () => {
    const solution = (health) => health > 0
    for (let i = 0; i < 50; i++) {
      let rand = Math.floor(Math.random() * 20 - 10)
      console.log(rand)
      Test.assertEquals(checkAlive(rand), solution(rand))
    }

Solutions:
function checkAlive(health) {
  return health > 0;
}

Or

function checkAlive(health) {
  if (health <= 0) {
    return false;
  } 
  else {
    return true;
  }
}

*/

/*
Stringy Strings
Description:
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

stringy(5) => '10101'


Solutions:

function stringy(size) {
  string = "1";
  for (var i = 0; i < size - 1; i++) {
    if(i % 2 == 0)
      string += "0";
    else
      string += "1";
  }
  return string;
}
*/
