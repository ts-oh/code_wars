/*
Find numbers which are divisible by given number

Description:
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

// Solution
function divisibleBy(numbers, divisor){
  let arr = [];
  
  numbers.forEach(num => {
    if(num%divisor === 0){
      arr.push(num);
    }
  });
  
  return arr;
}

// Another way 
function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0)
}
*/

/*
Difference of Volumes of Cuboids

Description:
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

// Solution
function findDifference(a, b) {
  let aVol = a.reduce((acc, curr) => acc * curr)
  console.log(aVol)
  
  let bVol = b.reduce((acc, curr) => acc * curr)
  console.log(bVol)
  
  
  return aVol > bVol ? aVol - bVol : bVol - aVol

// Another Solution 
  function find_difference(a, b) {
  return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}

}
*/

/*
Correct the mistakes of the character recognition software

Description:
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

// Another Solution
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

// Or

function correct(string) {
  let arr = string.split('')
  
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '0') {
      arr[i] = 'O'
  } else if (arr[i] === '5') {
    arr[i] = 'S'
  } else if (arr[i] === '1') {
    arr[i] = 'I'
    }
  }
  
  let joinedArr = arr.join('')
  
  return joinedArr
}

function correct(string)
{
  let arr = string.split('')
  let mapped = arr.map(l => { 
  if( l === '0') { 
    l = 'O'
    } else if (l === '1') {
    l ='I'
    } else if(l === '5') {
    l = 'S'    
    }
    return l
  })
 
  return mapped.join('')
}
          
*/

/* 
Is it even?

Description:
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.

// Solution

function testEven(n) {
  return n % 2 === 0 ? true : false;
}

*/
