var isAnagram = function (s, t) {
  // const firstSort = s.split("").sort().join("");
  // const secondSort = t.split("").sort().join("");
  // return firstSort === secondSort

  if (s.length !== t.length) {
    return false;
  } else {
    const sCount = {};
    const tCount = {};
    const N = s.length;
    for (let i = 0; i < N; i++) {
      if (!sCount[s[i]]) sCount[s[i]] = 0;
      if (!tCount[s[i]]) tCount[s[i]] = 0;
      sCount[s[i]]++;
      tCount[s[i]]++;
    }
    for (let ch in sCount) {
      if(sCount[ch] !== tCount[ch])return false
    }
    return true
  }
};

const res = isAnagram("rat", "car");
console.log(res);
