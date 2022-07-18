/*
Name Shuffler

Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

// Tests
if (typeof nameShuffler != 'function') {
  if (typeof nameSuffler === 'function') nameShuffler = nameSuffler;
  if (typeof nameShuffle === 'function') nameShuffler = nameShuffle;
  if (typeof nameSuffle === 'function') nameShuffler = nameSuffle;
}
describe('Basic tests', function () {
  Test.assertEquals(nameShuffler('john McClane'), 'McClane john');
  Test.assertEquals(nameShuffler('Mary jeggins'), 'jeggins Mary');
  Test.assertEquals(nameShuffler('tom jerry'), 'jerry tom');
  Test.assertEquals(nameShuffler('Mary Jane'), 'Jane Mary');
  Test.assertEquals(nameShuffler('John Doe'), 'Doe John');
  Test.assertEquals(nameShuffler("William O'Brien"), "O'Brien William");
  Test.assertEquals(
    nameShuffler('George Huffingquane-McGafferty'),
    'Huffingquane-McGafferty George'
  );
});

describe('Basic tests', function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function sol_shuffler(str) {
    return str.replace(/([A-Za-z'-]+)(\s)([A-Za-z'-]+)/, '$3$2$1');
  }
  first_names = [
    'Augustus',
    'Tobias',
    'Vernon',
    'Ryan',
    'Bob',
    'Kareem',
    'Miguel',
    'Cyril',
    'Chris',
    'Simon',
    'Tim',
  ];
  last_names = [
    'Hill',
    'Beecher',
    'Schillinger',
    "O'Reily",
    'Rebadow',
    'Said',
    'Alvarez',
    "O'Reily",
    'Keller',
    'Adebisi',
    'McManus',
  ];

  for (let _ = 0; _ < 40; _++) {
    s = [
      first_names[randint(0, first_names.length - 1)],
      last_names[randint(0, last_names.length - 1)],
    ].join(' ');
    it('Testing for ' + s, function () {
      Test.assertEquals(
        nameShuffler(s),
        sol_shuffler(s),
        'It should work for random inputs too'
      );
    });
  }
});

// Solutions
function nameSuffle(str) {
  return str.split(' ').reverse().join(' ');
}

function nameShuffler(str) {
  const arrSplit = str.split(' ');
  const reverseArr = arrSplit.reverse();
  return reverseArr.join(' ');
}

/*
Filling an Array (part1)
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
*/

//Tests
describe('#arr creates a new array with the numbers 0 to N-1', () => {
  it('should return an array', (_) => Test.expect(arr() instanceof Array));
  it('should return a blank array when called with no argument', (_) =>
    Test.assertSimilar(arr(), []));
  it('should return 0 to 9 when called with 10', (_) =>
    Test.assertSimilar(arr(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  it('should return 0 to N-1 where N is a random number', () => {
    const _arr = (N) => [
      ...(function* () {
        let i = 0;
        while (i < N) yield i++;
      })(),
    ];
    let N = Math.round(Math.random() * 10) + 5;
    Test.assertSimilar(arr(N), _arr(N));
  });
});

//Solutions
function arr(n) {
  var newArr = [];
  for (var i = 0; i < n; i++) {
    newArr.push(i);
  }
  return newArr;
}
