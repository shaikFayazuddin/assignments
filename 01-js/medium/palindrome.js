/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let nstr = str.toLowerCase().replace(/\s/g, "").replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''); 
  let j = nstr.length-1
  for(let i =0;i<nstr.length/2;i++){
    if(nstr[i] != nstr[j]){
      return false
    }
    j--
  }
  return true;
}

module.exports = isPalindrome;
