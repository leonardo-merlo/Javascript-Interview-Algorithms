// Have the function MinimumIndexDistance(arr, x, y) return the smallest distance between any occurrence of value x and value y in the array. If either number does not exist in the array, return -1. Example Input: arr = [3,5,2,5,2,3,2], x = 3, y = 2 Output: 1

function MinimumIndexDistance(arr, x, y) {
  let lastX = -1;
  let lastY = -1;
  let minDist = Infinity;
  // rodar loop dentro do array
  for (let i = 0; i < arr.length; i++) {
    // se for x ou y, salva esse index
    // compara com o ultimo index salvo
    // se a distância for a menor salva essa distância
    if (arr[i] === x) {
      lastX = i;
      if (lastY != -1) {
        minDist = Math.min(minDist, Math.abs(lastX - lastY));
      }
    }
    if (arr[i] === y) {
      lastY = i;
      if (lastX != -1) {
        minDist = Math.min(minDist, Math.abs(lastX - lastY));
      }
    }
  }

  if (minDist === Infinity) return -1;
  return minDist;
}

console.log(MinimumIndexDistance([3, 5, 2, 5, 2, 3, 2], 3, 2)); // 1]
console.log(MinimumIndexDistance([1, 2, 3, 4, 5], 1, 5)); // 4
console.log(MinimumIndexDistance([1, 2, 3, 4, 5], 1, 6)); // -1
