// Have the function LongestReplacementSegment(str, k) return the length of the longest substring that can be formed by replacing at most k characters so that all characters in the substring become the same. The string contains only uppercase English letters. Example Input: "AABABBA", k = 1 Output: 4

function LongestReplacementSegment(str, k) {
  let left = 0;
  let maxFreq = 0;
  let counts = {};
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    let char = str[right];
    counts[char] = (counts[char] || 0) + 1;
    maxFreq = Math.max(maxFreq, counts[char]);

    let windowSize = right - left + 1;

    while (windowSize - maxFreq > k) {
      counts[str[left]]--;
      left++;
      windowSize = right - left + 1;
    }
    maxLength = Math.max(maxLength, windowSize);
  }
  return maxLength;
}

console.log(LongestReplacementSegment("AABABBA", 1)); // Output: 4
console.log(LongestReplacementSegment("ABAB", 2)); // Output: 4
console.log(LongestReplacementSegment("AABABBA", 2)); // Output: 5
