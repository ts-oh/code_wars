/*
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.
For example:
5, 10, 2  -->  17


Solution
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals


Test Case
describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(goals(0,0,0), 0)
  Test.assertEquals(goals(43, 10, 5), 58)
    });
  });

*******************************************************************************

Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Solution
function doubleChar(str) {
  let [...splitStr] = str.split('')  
  let strArr = []
  splitStr.forEach((char) => strArr.push(char.repeat(2)))
  return strArr.join('')  
}

Test Case
describe("doubleChar", function() {
  it("works for some examples", function() {
    Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    Test.assertEquals(doubleChar("1337"), "11333377");
    Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    Test.assertEquals(doubleChar("123456"), "112233445566");
    Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
  });
});

*/
