function isPalindrome(word) {
  const arrayOfLetters = word.split('');
  const reverseLetters = arrayOfLetters.reverse()
  const reverseString  = reverseLetters.join('')

  if (word == reverseString){

    return true

  } else {
    return false
  }

}


/* 
  Add your pseudocode here
  called the function
  declared the function
  used a if else statement
*/

/*
  Add written explanation of your solution here
  i used const to prevent the value from being redefined
  then went on to use the if else statement 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log('Expecting: true')
  console.log('=>', isPalindrome('abba'));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log('Expecting: true')
  console.log('=>', isPalindrome('a'));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('Expecting: false')
  console.log('=>', isPalindrome('ab'));


}

module.exports = isPalindrome;
