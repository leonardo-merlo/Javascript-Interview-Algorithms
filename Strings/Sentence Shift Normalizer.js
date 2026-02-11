// Dado uma string, retorne a string com as palavras em ordem reversa, mas mantendo a ordem das letras dentro de cada palavra. Por exemplo, "Hello, how are you?" deve retornar "you? are how Hello".

function SentencesShiftNormalizer1(str) {
  return str.trim().split(/\s+/).reverse().join(" ");
}

function SentenceShiftNormalizer2(str) {
  let words = [];
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else if (word.length > 0) {
      words.push(word);
      word = "";
    }
  }

  if (word.length > 0) words.push(word);

  return words.reverse().join(" ");
}

console.log(SentencesShiftNormalizer1("   Hello,   how are you?  ")); // "you? are how Hello"
console.log(SentencesShiftNormalizer1("This is a test.")); // "test. a is This"
