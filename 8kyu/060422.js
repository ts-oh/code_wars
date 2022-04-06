/*
Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock


// Tests 
it("test", () => {
  Test.assertEquals(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
  Test.assertEquals(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
  Test.assertEquals(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
  Test.assertEquals(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')
    });

  // Solutions
  function sayHello(name) {
    return `Hello, ${name}` 
  }
*/

/*
Squash the bugs

Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.

// Tests
it("Testing for fixed tests", () => {
    assert.strictEqual(findLongest("The quick white fox jumped around the massive dog"), 7);
    assert.strictEqual(findLongest("Take me to tinseltown with you"), 10); 
    assert.strictEqual(findLongest("Sausage chops"), 7); 
    assert.strictEqual(findLongest("Wind your body and wiggle your belly"), 6); 
    assert.strictEqual(findLongest("Lets all go on holiday"), 7); 

// Solutions
function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
      }
    }
    return longest
}
*/
