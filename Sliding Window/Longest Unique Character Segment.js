// Have the function LongestUniqueCharacterSegment(str) return the length of the longest substring with all unique characters. Example Input: "pwwkew" Output: 3

function LongestUniqueCharacterSegment(str) {
  let longestLen = 0;
  let left = 0;
  let window = {};

  for (let right = 0; right < str.length; right++) {
    let c = str[right];
    window[c] = (window[c] || 0) + 1;

    while (window[c] > 1) {
      let leftC = str[left];
      window[leftC]--;
      left++;
    }

    let width = right - left + 1;
    longestLen = Math.max(longestLen, width);
  }
  return longestLen;
}

console.log(LongestUniqueCharacterSegment("pwwkew")); // Output: 3
console.log(LongestUniqueCharacterSegment("abcabcbb")); // Output: 3
console.log(LongestUniqueCharacterSegment("bbbbb")); // Output: 1
