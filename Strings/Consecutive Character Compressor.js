// Have the function ConsecutiveCharacterCompressor(str) take the string parameter and return a compressed version of the string by replacing consecutive repeating characters with the character followed by the count. If the compressed string is not shorter than the original, return the original string. Example Input: "aaabbc" Output: "a3b2c1" Input: "abc" Output: "abc"

function ConsecutiveCharacterCompressor(str) {
  let count = 1;
  let compressed = "";
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      compressed += str[i - 1] + count;
      count = 1;
    }
  }
  if (compressed.length < str.length) return compressed;
  return str;
}

console.log(ConsecutiveCharacterCompressor("aabbbcccc")); // Output: "a2b3c4"
console.log(ConsecutiveCharacterCompressor("abc")); // Output: "abc"
console.log(ConsecutiveCharacterCompressor("aaabbc")); // Output: "aaabbc"
