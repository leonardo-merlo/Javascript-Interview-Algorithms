// Have the function MissingPositiveLocator(arr) return the smallest positive integer that does not appear in the array. Constraints: Must run in O(n). Must use constant extra space.Example: Input: [7,8,9,11,12] Output: 1.

function MissingPositiveLocator(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
      let correctIndex = arr[i] - 1;
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] !== i + 1) return i + 1;
  }

  return n + 1;
}

console.log(MissingPositiveLocator([7, 8, 9, 11, 12])); // Output: 1
console.log(MissingPositiveLocator([1, 2, 0])); // Output: 3
console.log(MissingPositiveLocator([3, 4, -1, 1])); // Output: 2
