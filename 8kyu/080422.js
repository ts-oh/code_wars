/*
Filter out the Geese

Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
  return non-matches
    return an array containing all of the strings in the input array except those that match strings in geese
    Use a combination of Array.prototype.filter and Array.prototype.inclues
    
    Steps
    1. filter creates new array
    2. elements that pass test are implemented
    3. includes determins whether an array includes a certain value 
      3.a) returns a true or false (we want the false values to be returned) 
    4. Non-Geese elements are returned
 
Solutions: 

function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];

  let filterGeese = birds.filter((word) => !geese.includes(word));

  return filterGeese;
}
*/

/* 
How many lightsabers do you own?

Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18

Solution:

function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}
*/
