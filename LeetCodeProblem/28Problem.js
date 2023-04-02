var strStr = function (haystack, needle) {
  if (!needle) return 0;
  let newStr = haystack.split(needle);
  return newStr.length > 1 ? newStr[0].length : -1;
};
console.log(strStr("saadbutsad", "sad"));
