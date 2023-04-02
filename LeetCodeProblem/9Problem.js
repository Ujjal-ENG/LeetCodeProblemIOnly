var isPalindrome = function (x) {
  let str = x + "";
  var splitString = str.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray === str;
};
console.log(isPalindrome(-121));
