var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  if (s === t) {
    return true;
  }
  const ht1 = {};
  const ht2 = {};
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    const tLetter = t[i];

    if (!ht2[tLetter]) {
      ht2[tLetter] = letter;
    }
    if (!ht1[letter]) {
      ht1[letter] = tLetter;
    }
    if (ht1[letter] !== tLetter || ht2[tLetter] !== letter) {
      return false;
    }
  }
  return true;
};
console.log(isIsomorphic("paper", "title"));
