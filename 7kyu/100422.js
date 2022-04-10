/*
Vowel Count
Description:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

Solutions:

function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

or;

function getCount(str) {
  let vowelsCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      vowelsCount++;
    } else if (str[i] === "e") {
      vowelsCount++;
    } else if (str[i] === "i") {
      vowelsCount++;
    } else if (str[i] === "o") {
      vowelsCount++;
    } else if (str[i] === "u") {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

*/
