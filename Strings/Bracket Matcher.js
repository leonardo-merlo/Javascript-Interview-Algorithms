// Bracket Matcher
// Have the function BracketMatcher(str) take the str parameter being passed and return true if the brackets are correctly matched and each one is accounted for. Otherwise return false. For example: if str is "(hello (world))", then the output should be true, but if str is "((hello (world))" the the output should be false because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return true.

function BracketMatcher(str) {
  let matchCounter = 0;

  for (let c of str) {
    if (c === ")" && matchOunter === 0) {
      return false;
    } else if (c === "(") {
      matchCounter++;
    } else if (c === ")") {
      matchCounter--;
    }

    if (c === "(") matchCounter++;
    if (c === ")") matchCounter--;
    if (matchCounter < 0) return false;

    return matchCounter === 0 ? true : false;
  }
}

console.log(BracketMatcher("()()()")); //true
console.log(BracketMatcher("(()())((()))")); //true
console.log(BracketMatcher(")(")); //false
