// Have the function BalancedBracketValidator(str) take the string parameter and return true if every opening bracket has a correct closing bracket in the correct order. Otherwise return false. The string will only contain lowercase letters and the characters ()[]{}. An empty string should return true.Example: Input: "([]){}" Output: true | Input: "([)]" Output: false

function BalancedBracketValidator(str) {
  let stack = [];
  let brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let c of str) {
    if (brackets[c]) {
      stack.push(c);
    } else if (c === ")" || c === "]" || c === "}") {
      if (stack.length === 0) return false;
      let lastBracket = stack.pop();
      if (brackets[lastBracket] !== c) return false;
    }
  }
  return stack.length === 0;
}

console.log(BalancedBracketValidator("([]){}")); //true
console.log(BalancedBracketValidator("([)]")); //false
console.log(BalancedBracketValidator("")); //true
