// Given an array of integers nums and an integer k, return the length of the longest contiguous subarray that contains at most k distinct values. Examples Input:  nums = [1, 2, 1, 2, 3], k = 2 Output: 4 // [1, 2, 1, 2] has 2 distinct values and length 4 Input:  nums = [1, 2, 1, 3, 4], k = 2 Output: 3 // [1, 2, 1] or [1, 3] — longest with ≤ 2 distinct is length 3

function longestSubArrayWithKDistincts(nums, k) {
  let longest = 0;
  let numCounter = {};
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    let num = nums[right];
    numCounter[num] = (numCounter[num] || 0) + 1;

    while (Object.keys(numCounter).length > k) {
      let leftNum = nums[left];
      numCounter[leftNum]--;
      if (numCounter[leftNum] === 0) {
        delete numCounter[leftNum];
      }
      left++;
    }
    longest = Math.max(longest, right - left + 1);
  }

  return longest === 0 ? 0 : longest;
}

console.log(longestSubArrayWithKDistincts([1, 2, 1, 2, 3], 2)); // Output: 4
console.log(longestSubArrayWithKDistincts([1, 2, 1, 3, 4], 2)); // Output: 3
console.log(longestSubArrayWithKDistincts([1, 2, 3, 4, 5], 1)); // Output: 1
