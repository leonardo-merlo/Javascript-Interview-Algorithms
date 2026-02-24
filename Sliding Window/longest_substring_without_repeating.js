// Longest Substring Without Repeating Characters Description: Given a string s, find the length of the longest substring without repeating characters. Example: Input: s = "abcabcbb" Output: 3 Explanation: The longest substring without repeating characters is "abc" with length 3. Input: s = "bbbbb" Output: 1 Explanation: The longest substring without repeating characters is "b" with length 1.

function LongestSubstringWithoutRepeatingCharacters(s) {
  let longest = 0;
  let left = 0;
  let window = {};

  for (let right = 0; right < s.length; right++) {
    let c = s[right];
    window[c] = (window[c] || 0) + 1;

    while (window[c] > 1) {
      let leftC = s[left];
      window[leftC]--;
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

console.log(LongestSubstringWithoutRepeatingCharacters("abcabcbb")); // 3
console.log(LongestSubstringWithoutRepeatingCharacters("bbbbb")); // 1
console.log(LongestSubstringWithoutRepeatingCharacters("pwwkew")); // 3
