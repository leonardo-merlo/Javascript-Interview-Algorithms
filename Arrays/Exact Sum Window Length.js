// Have the function ExactSumWindowLength(arr, k) return the length of the longest contiguous subarray whose sum equals k. If none exists, return 0.

function ExactSumWindowLength(arr, k) {
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let z = i; z < arr.length; z++) {
      sum += arr[z];
      if (sum === k) {
        let length = z - i + 1;
        if (length > maxLength) maxLength = length;
      }
    }
  }

  return maxLength;
}

console.log(ExactSumWindowLength([1, 2, 1, 3], 3)); // 2
console.log(ExactSumWindowLength([1, 2, 1, 3], 4)); // 3
console.log(ExactSumWindowLength([1, 2, 1, 3], 5)); // 0

// Suggestion by AI
function slidingWindow(arr, k) {
  let left = 0; // 🟢 janela começa aqui
  let right = 0; // 🟢 outra opção: right = arr.length - 1 dependendo do problema
  let windowSum = 0; // soma ou estado da janela
  let result = 0; // resultado que você quer guardar

  while (right < arr.length) {
    // percorre até o fim
    // 1️⃣ adiciona o novo elemento à janela
    windowSum += arr[right];

    // 2️⃣ ajusta janela se precisar (ex: soma > k)
    while (windowSum > k) {
      // depende do problema
      windowSum -= arr[left]; // remove elemento da esquerda
      left++; // move esquerda pra frente
    }

    // 3️⃣ verifica condição de resultado
    if (windowSum === k) {
      result = Math.max(result, right - left + 1);
    }

    // 4️⃣ expande a janela
    right++;
  }

  return result;
}

console.log(slidingWindow([1, 2, 1, 3], 3)); // 2
console.log(slidingWindow([1, 2, 1, 3], 4)); // 3
console.log(slidingWindow([1, 2, 1, 3], 5)); // 0
