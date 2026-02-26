// Given an array nums, return the pivot index — the index where the sum of all elements to the left equals the sum of all elements to the right. If no such index exists, return -1. If there are multiple, return the leftmost. Input:  nums = [1, 7, 3, 6, 5, 6]  →  Output: 3 Input:  nums = [1, 2, 3]            →  Output: -1 Input:  nums = [2, 1, -1]           →  Output: 0

function pivotIndex(nums) {
  let total = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightSum = total - leftSum - nums[i];

    if (leftSum === rightSum) return i;

    leftSum += nums[i];
  }
  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // Output: 3
console.log(pivotIndex([1, 2, 3])); // Output: -1
console.log(pivotIndex([2, 1, -1])); // Output: 0
console.log(pivotIndex([1, -1, 0])); // Output: 2
