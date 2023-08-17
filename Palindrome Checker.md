<h1>Palindrome Checker</h1>
</br>
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.


```
function palindrome(str) {
  let result = str.replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '').toLowerCase(); 
//it remove the both non-applicable and blank space, then make it into all lowercase

  let em = ""
  for (let i = result.length -1; i >= 0; i--) {
    em += result[i]
  }
  if (result == em) {
    return true;
  } else
  return false;
}

palindrome("eye");
```
