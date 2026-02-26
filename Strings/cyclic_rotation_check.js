// Have the function CyclicRotationCheck(str1, str2) return true if str2 is a rotation of str1. Otherwise return false. Strings are case sensitive and may contain spaces. Example Input: "waterbottle", "erbottlewat" Output: true

function CyclicRotationCheck(str1, str2) {
  if ((str1 + str1).includes(str2)) return true;
  return false;
}

console.log(CyclicRotationCheck("waterbottle", "erbottlewat")); // true
console.log(CyclicRotationCheck("hello world", "worldhello ")); // true
console.log(CyclicRotationCheck("hello world", "WorldHello ")); // false
console.log(CyclicRotationCheck("hello world", "o worldhell")); // true
