// Max Capacity Between Walls You are given an array representing vertical wall heights. Find two indices that together can contain the maximum amount of water. Return the max area. Example Input: [3,1,2,4,5] Output: 12

function MaxCapacityBetweenWalls(arr) {
  let left = 0;
  let right = arr.length - 1;
  let maxArea = 0;

  for (i = 0; i < arr.length; i++) {
    const height = Math.min(arr[left], arr[right]);
    const width = right - left;
    const area = height * width;

    maxArea = Math.max(maxArea, area);

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(MaxCapacityBetweenWalls([3, 1, 2, 4, 5])); // Output: 12
console.log(MaxCapacityBetweenWalls([1, 1, 1, 1, 1])); // Output: 4
console.log(MaxCapacityBetweenWalls([5, 4, 3, 2, 1])); // Output: 6
