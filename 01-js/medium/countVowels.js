/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let testString = str.toLowerCase().replace(/\s/g, "");
    let vowelCount = 0;
    let vowels = ['a','e','i','o','u']
    for(i=0;i<testString.length;i++){
      for(k=0;k<vowels.length;k++){
        if(testString[i] === vowels[k]){
          vowelCount++
        }
      }
    }
    return vowelCount
}

module.exports = countVowels;