function isPalindrome(word) {
  // Write your algorithm here
  let palindromeTest = false
  for (i=0; i<word.length; i++){
    if (word[i]===word[word.length-(i+1)]){
      palindromeTest = true;
    }else{
      return false
    }
  }
  return palindromeTest
}

/* 
  Add your pseudocode here
  Store test-pass for each letter in a variable
  For each letter position in order
    Check if letter is the same as corresponding letter from end
      if same--> test variable is true
      if false function ends returning false
  If all letters were the same, test variable is returned true
*/

/*
  Add written explanation of your solution here
  Initially tried to use word[-(i+1)] to compare letters counted from the end
  but apparently negative indices don't work in JS? I think they can be used in some
  situations, but maybe that was something that worked in Python that I just carried
  over... So I had to use the word length and subtract one each time.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome('hannah'));

  console.log('Expecting: false');
  console.log("=>", isPalindrome('baobab'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

isPalindrome('racecar')