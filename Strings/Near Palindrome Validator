//Have the function NearPalindromeValidator(str) return true if the string can become a palindrome after removing at most one character. Otherwise return false.

function NearPalindromeValidator(str) {
  function isPalindrome(s) {
    return s === s.split("").reverse("").join("");
  }

  if (isPalindrome(str)) return true;

  for (let i = 0; i < str.length; i++) {
    let newStr = str.slice(0, i) + str.slice(i + 1);
    if (isPalindrome(newStr)) return true;
  }

  return false;
}

console.log(NearPalindromeValidator("abcba")); // true
console.log(NearPalindromeValidator("abccdba")); // true
console.log(NearPalindromeValidator("abc")); // false
