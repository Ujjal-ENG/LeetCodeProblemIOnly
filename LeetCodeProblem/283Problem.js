var moveZeroes = function (array) {
  // let zeroItem = [];
  // let otherNum = [];
  // let NewArr = array.filter((item) => {
  //   if (item > 0) {
  //     otherNum.push(item);
  //   }
  //   if (item === 0) {
  //     zeroItem.push(item);
  //   }
  // });
  // let newItem = [];
  // newItem = "[" + otherNum + "," + zeroItem + "]";
  // console.log(NewArr)
  // return newItem;

  let idx = 0;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num !== 0) {
      array[idx] = num;
      idx++;
    }
  }
  for (let i = idx; i < array.length; i++) {
    array[i] = 0;
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
