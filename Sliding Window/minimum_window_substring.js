// Description Given two strings s and t, return the shortest substring of s that contains all characters of t (including duplicates). If no such substring exists, return "". Examples Input:  s = "ADOBECODEBANC", t = "ABC" Output: "BANC" Input:  s = "a", t = "a" Output: "a" Input:  s = "a", t = "b" Output: ""

function minimumWindowSubstring(s, t) {
  let tCount = {};
  let windowCount = {};
  let left = 0;
  let formed = 0;
  let minSub = "";

  for (let i = 0; i < t.length; i++) {
    let tChar = t[i];
    tCount[tChar] = (tCount[tChar] || 0) + 1;
  }

  const required = Object.keys(tCount).length;

  for (let right = 0; right < s.length; right++) {
    let sChar = s[right];
    windowCount[sChar] = (windowCount[sChar] || 0) + 1;

    if (windowCount[sChar] === tCount[sChar]) {
      formed++;
    }

    while (formed === required) {
      minSub = s.slice(left, right + 1);
      let leftChar = s[left];
      windowCount[leftChar]--;
      if (windowCount[leftChar] < tCount[leftChar]) formed--;
      left++;
    }
  }

  return minSub;
}

console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minimumWindowSubstring("a", "a")); // Output: "a"
console.log(minimumWindowSubstring("a", "b")); // Output: ""
