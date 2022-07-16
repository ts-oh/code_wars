/*
 Exclusive "or" (xor) Logical Operator
Overview
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). 
The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

Task
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
 */

// Tests
describe("Your 'xor' function/operator", () => {
  it('should work for the four basic cases described above', () => {
    Test.assertEquals(xor(false, false), false, 'false xor false === false');
    Test.assertEquals(xor(true, false), true, 'true xor false === true');
    Test.assertEquals(xor(false, true), true, 'false xor true === true');
    Test.assertEquals(xor(true, true), false, 'true xor true === false');
    Test.assertNotEquals(
      xor(true, true),
      true,
      "'xor' is NOT identical to 'or'"
    );
  });
});

// Solutions
function xor(a, b) {
  // inputs a or b are either true or false
  // if either a and b are false than it is false
  if (a === true && b === true) {
    return false;
  } else if (a === false && b === false) {
    return false;
  } else {
    return true;
  }
  // else if either a and b are true than it is false
  // else if a or b are either true or false than it is true
  // outputs are either true or false
}

function xor(a, b) {
  return a != b;
}

/*
FIXME: Replace all dots

The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.
*/

// Tests
describe('Example Tests', function () {
  it('test dots', function () {
    Test.assertEquals(
      replaceDots('one.two.three'),
      'one-two-three',
      'Sorry, try again :-('
    );
  });
});

// Solutions
var replaceDots = function (str) {
  return str.split('.').join('-');
};

/*
Hello, Name or World!

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/

// Tests
const assert = require('chai').assert;
describe('Fixed Tests', () => {
  it('should work for fixed inputs', () => {
    let actualJohn = hello('johN');
    assert.isDefined(
      actualJohn,
      'You have to return a string instead of logging it to the console'
    );
    assert.strictEqual(
      actualJohn,
      'Hello, John!',
      "returns 'Hello, John!' when given 'johN'"
    );
    assert.strictEqual(
      hello('johN'),
      'Hello, John!',
      "returns 'Hello, John!' when given 'johN'"
    );
    assert.strictEqual(
      hello('alice'),
      'Hello, Alice!',
      "returns 'Hello, Alice!' when given 'alice'"
    );
    assert.strictEqual(
      hello(),
      'Hello, World!',
      "returns 'Hello, World!' when name is not given"
    );
    assert.strictEqual(
      hello(''),
      'Hello, World!',
      "returns 'Hello, World!' when name is an empty string"
    );
  });
});
describe('Random Tests', () => {
  // Top 100 baby names of 1921 - 2020
  const names = [
    'James',
    'Mary',
    'Robert',
    'Patricia',
    'John',
    'Jennifer',
    'Michael',
    'Linda',
    'William',
    'Elizabeth',
    'David',
    'Barbara',
    'Richard',
    'Susan',
    'Joseph',
    'Jessica',
    'Thomas',
    'Sarah',
    'Charles',
    'Karen',
    'Christopher',
    'Nancy',
    'Daniel',
    'Lisa',
    'Matthew',
    'Betty',
    'Anthony',
    'Margaret',
    'Mark',
    'Sandra',
    'Donald',
    'Ashley',
    'Steven',
    'Kimberly',
    'Paul',
    'Emily',
    'Andrew',
    'Donna',
    'Joshua',
    'Michelle',
    'Kenneth',
    'Dorothy',
    'Kevin',
    'Carol',
    'Brian',
    'Amanda',
    'George',
    'Melissa',
    'Edward',
    'Deborah',
    'Ronald',
    'Stephanie',
    'Timothy',
    'Rebecca',
    'Jason',
    'Sharon',
    'Jeffrey',
    'Laura',
    'Ryan',
    'Cynthia',
    'Jacob',
    'Kathleen',
    'Gary',
    'Amy',
    'Nicholas',
    'Shirley',
    'Eric',
    'Angela',
    'Jonathan',
    'Helen',
    'Stephen',
    'Anna',
    'Larry',
    'Brenda',
    'Justin',
    'Pamela',
    'Scott',
    'Nicole',
    'Brandon',
    'Emma',
    'Benjamin',
    'Samantha',
    'Samuel',
    'Katherine',
    'Gregory',
    'Christine',
    'Frank',
    'Debra',
    'Alexander',
    'Rachel',
    'Raymond',
    'Catherine',
    'Patrick',
    'Carolyn',
    'Jack',
    'Janet',
    'Dennis',
    'Ruth',
    'Jerry',
    'Maria',
    'Tyler',
    'Heather',
    'Aaron',
    'Diane',
    'Jose',
    'Virginia',
    'Adam',
    'Julie',
    'Henry',
    'Joyce',
    'Nathan',
    'Victoria',
    'Douglas',
    'Olivia',
    'Zachary',
    'Kelly',
    'Peter',
    'Christina',
    'Kyle',
    'Lauren',
    'Walter',
    'Joan',
    'Ethan',
    'Evelyn',
    'Jeremy',
    'Judith',
    'Harold',
    'Megan',
    'Keith',
    'Cheryl',
    'Christian',
    'Andrea',
    'Roger',
    'Hannah',
    'Noah',
    'Martha',
    'Gerald',
    'Jacqueline',
    'Carl',
    'Frances',
    'Terry',
    'Gloria',
    'Sean',
    'Ann',
    'Austin',
    'Teresa',
    'Arthur',
    'Kathryn',
    'Lawrence',
    'Sara',
    'Jesse',
    'Janice',
    'Dylan',
    'Jean',
    'Bryan',
    'Alice',
    'Joe',
    'Madison',
    'Jordan',
    'Doris',
    'Billy',
    'Abigail',
    'Bruce',
    'Julia',
    'Albert',
    'Judy',
    'Willie',
    'Grace',
    'Gabriel',
    'Denise',
    'Logan',
    'Amber',
    'Alan',
    'Marilyn',
    'Juan',
    'Beverly',
    'Wayne',
    'Danielle',
    'Roy',
    'Theresa',
    'Ralph',
    'Sophia',
    'Randy',
    'Marie',
    'Eugene',
    'Diana',
    'Vincent',
    'Brittany',
    'Russell',
    'Natalie',
    'Elijah',
    'Isabella',
    'Louis',
    'Charlotte',
    'Bobby',
    'Rose',
    'Philip',
    'Alexis',
    'Johnny',
    'Kayla',
  ];
  it('should work for random inputs', () => {
    for (let run = 0; run < 200; ++run) {
      let rnd = (Math.random() * 20) | 0;
      if (rnd == 0)
        assert.strictEqual(
          hello(),
          'Hello, World!',
          "returns 'Hello, World!' when name is not given"
        );
      else if (rnd == 1)
        assert.strictEqual(
          hello(''),
          'Hello, World!',
          "returns 'Hello, World!' when name is an empty string"
        );
      else {
        const name = names[(Math.random() * names.length) | 0];
        const expected = `Hello, ${name}!`;
        const input = [...name]
          .map((v) => v[`to${Math.random() < 0.5 ? 'Upper' : 'Lower'}Case`]())
          .join('');
        assert.strictEqual(
          hello(input),
          expected,
          `returns '${expected}' when given '${input}'`
        );
      }
    }
  });
});

// Solutions

const hello = (s) =>
  `Hello, ${s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : 'World'}!`;

function hello(name) {
  if (name === '' || name === undefined) {
    return 'Hello, World!';
  } else {
    const firstChar = name[0].toUpperCase();
    const newName = firstChar + name.slice(1).toLowerCase();
    return `Hello, ${newName}!`;
  }
}
