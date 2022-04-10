/*
Drink about

Description:
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

Solution:
function peopleWithAgeDrink(age) {
  if ( age < 14 ) {
    return "drink toddy";
  } else if ( age < 18 ) {
    return "drink coke";
  } else if ( age < 21 ) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
}

or

const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"
*/

/*
Powers of 2

Description:
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

Solutions:
function powersOfTwo(n){
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

or

function powersOfTwo(n){
  let total = []
  for (let i = 0; i <= n; i++) {
    total.push(2 ** i)
  }
  
  return total
}
*/
