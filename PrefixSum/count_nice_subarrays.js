// Given an array of integers nums and an integer k, return the number of subarrays that contain exactly k odd numbers. Input:  nums = [1, 1, 2, 1, 1], k = 3  →  Output: 2 Input:  nums = [2, 4, 6],       k = 1  →  Output: 0

function numberOfSubarrays(nums, k) {
  let count = { 0: 1 };
  let odd = 0;
  let result = 0;

  for (let num of nums) {
    if (num % 2 === 1) odd++;

    if (count[odd - k] !== undefined) {
      result += count[odd - k];
    }

    count[odd] = (count[odd] || 0) + 1;
  }

  return result;
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3)); // Output: 2
console.log(numberOfSubarrays([2, 4, 6], 1)); // Output: 0
console.log(numberOfSubarrays([1, 2, 3, 4, 5], 2)); // Output: 4
