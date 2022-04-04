/*
All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1

// Tests
Test.assertEquals(strCount('Hello', 'o'), 1);
Test.assertEquals(strCount('Hello', 'l'), 2);
Test.assertEquals(strCount('', 'z'), 0);

// Solutions
function strCount(str, letter){  
  let arr = str.split('')
  let count = 0
  
  arr.forEach(e => {
    if(e === letter) {
      count += 1
    } else {
      return 0
    }
  })
  return count
}

function strCount(str, letter){  
  
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter)
      count++;
  }
  
  return count;
  
}

function strCount(str, letter){  
  return str.split(letter).length-1
}
*/

/*
Regular Ball Super Ball

Description:
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

// Tests

it("should have a ballType of 'regular' if no arguments are given", function() {
  Test.assertEquals(new Ball().ballType, "regular");
});
it("should have a ballType of 'super' if 'super' is given as an argument", function() {
  Test.assertEquals(new Ball('super').ballType, "super");

  // Solutions

  var Ball = function(ballType) {
    this.ballType = ballType || 'regular';
  };

  class Ball {
    constructor(ballType = "regular") {
      this.ballType = ballType;
    }
  }

  var Ball = function(ballType) {
    if (!ballType){
      this.ballType = 'regular';
    }
    else {
      this.ballType= 'super';
    }
  };
*/

/*
Grasshopper - Terminal game move function

Terminal game move function
In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example: move(3, 6) should equal 15

// Tests
 Test.assertEquals(move(0,4), 8)
    Test.assertEquals(move(3, 6), 15)
    Test.assertEquals(move(2, 5), 12)


// Solutions

function move (position, roll) {
  return position + roll * 2
}

const move = (position, roll) => position + roll * 2
*/
