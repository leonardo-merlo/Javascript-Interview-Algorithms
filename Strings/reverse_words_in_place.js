// Have the function ReverseWordsInPlace(str) return a string where each word is reversed individually, but the word order remains the same. Multiple spaces between words should be preserved. Example Input: "hello world" Output: "olleh dlrow"

function ReverseWordsInPlace(str) {
  let result = "";
  let word = "";

  for (let i = 0; i <= str.length; i++) {
    if (str[i] !== " " && i !== str.length) {
      word += str[i];
    } else {
      result += word.split("").reverse().join("");
      word = "";
      if (i < str.length) {
        result += str[i];
      }
    }
  }
  return result;
}

console.log(ReverseWordsInPlace("hello world")); // Output: "olleh dlrow"
