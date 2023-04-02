var closeStrings = function (word1, word2) {
  let c1 = word1.length;
  let c2 = word2.length;
  console.log(c1, c2);
  let s1 = word1.split("").sort().join("");
  let s2 = word2.split("").sort().join("");
  let count = 0;
  if (c1 === c2) {
    for (let i = 0; i < c1; i++) {
      for (let j = 0; j < c2; j++) {
        if (s1[i] === s2[j]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  return false;
};
console.log(closeStrings("cabbba", "aabbss"));
