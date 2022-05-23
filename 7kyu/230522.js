// String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  return str.slice(0 - ending.length) === ending;
}

// or

function solution(str, ending) {
  var l = ending.length;
  var str = str.slice(-l);
  return str.match(ending) ? true : false;
}

// or
function solution(str, ending) {
  return str.endsWith(ending);
}
