var lengthOfLastWord = function (nums) {
  let take = nums.trim();
  let newTake = take.split(" ");
  return newTake[newTake.length - 1].length;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
