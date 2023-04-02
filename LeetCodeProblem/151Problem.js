var reverseWords = function (s) {
  let newS = s.trim(1).split(" ");
  let newArr = [];
  for (let i of newS) {
    if (i !== "") {
      newArr.push(i);
    }
  }
  return newArr.reverse().join(" ");
};
console.log(reverseWords(" the    sky is blue "));
