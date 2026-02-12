//Have the function StableZeroMigration(arr) move all zeros to the end of the array while preserving the relative order of non-zero elements. Must be done in place. while preserving the relative order of non-zero elements. Must be done in place. Example -> Input: [4,0,5,0,3,0,1] Output: [4,5,3,1,0,0,0]

function StableZeroMigration(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
      i--;
    }
  }
  return arr;
}

console.log(StableZeroMigration([4, 0, 5, 0, 3, 0, 1])); // Output: [4,5,3,1,0,0,0]
console.log(StableZeroMigration([0, 1, 0, 3, 12])); // Output: [1,3,12,0,0]

function BestStableZeroMigration(arr) {
  let insertPos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++;
    }
  }

  while (insertPos < arr.length) {
    arr[insertPos] = 0;
    insertPos++;
  }

  return arr;
}
