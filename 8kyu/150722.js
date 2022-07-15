/*
Capitalization and Mutability

Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
*/

import { tsMethodSignature } from '@babel/types';

//Tests
describe('Tests', () => {
  it('test', () => {
    Test.assertSimilar(capitalizeWord('word'), 'Word');
    Test.assertSimilar(capitalizeWord('i'), 'I');
    Test.assertSimilar(capitalizeWord('glasswear'), 'Glasswear');
  });
});

//Solutions
function capitalizeWord(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function capitalizeWord(word) {
  var str = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    str += word[i];
  }
  return str;
}

function capitalizeWord(word) {
  word = word.split('');
  word[0] = word[0].toUpperCase();
  return word.join('');
}

/*
Reverse List Order
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]
*/

// Tests
describe('reverseList', function () {
  it('should reverse some sample arrays', function () {
    Test.assertSimilar(reverseList([1, 2, 3, 4]), [4, 3, 2, 1]);
    Test.assertSimilar(reverseList([3, 1, 5, 4]), [4, 5, 1, 3]);
  });
});

// Solutions
function reverseList(list) {
  return list.reverse();
}

function reverseList(list) {
  // slice() here creates a shallow copy of the array to not mutate the input.
  return list.slice().reverse();
}

function reverseList(list) {
  let array = [];
  for (let i = list.length - 1; i >= 0; i--) {
    array.push(list[i]);
  }
  return array;
}

/*
Plural
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.
*/

// Tests
describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(plural(0), true, 'Plural for 0');
    Test.assertEquals(plural(0.5), true, 'Plural for 0.5');
    Test.assertEquals(plural(1), false, 'Plural for 1');
    Test.assertEquals(plural(100), true, 'Plural for 100');
    Test.assertEquals(plural(Infinity), true, 'Plural for Infinity');
  });
});

// Solutions
function plural(n) {
  return n === 1 ? false : true;
}

function plural(n) {
  return n !== 1;
}

function plural(n) {
  if (n >= 0) {
    if (n == 1) {
      return false;
    } else {
      return true;
    }
  }
}
