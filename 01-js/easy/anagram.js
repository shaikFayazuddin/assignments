/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let newStr1 = str1.replace(/\s/g, "").toLowerCase().split("").sort().join("")
    console.log(newStr1)
    let newStr2 = str2.replace(/\s/g, "").toLowerCase().split("").sort().join("")
    if(newStr1 === newStr2){
      return true
    }else{
      return false
    }
}
console.log(isAnagram('Debit Card', 'Bad Credit'))
module.exports = isAnagram;
