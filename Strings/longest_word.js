// Longest Word
// Dada uma string, retorne a palavra mais longa. Se houver mais de uma palavra com o mesmo comprimento, retorne a primeira. A string pode conter caracteres especiais, mas eles não devem ser considerados parte das palavras.

function longestWord(str) {
  let words = str.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");

  let maior = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maior.length) {
      maior = words[i];
    }
  }

  return maior;
}

console.log(longestWord("fun&!! time")); //time
console.log(longestWord("I love dogs")); //love
