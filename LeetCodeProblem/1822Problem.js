var arraySign = function (nums) {
  let pro = 1;
  for (let i = 0; i < nums.length; i++) {
    pro *= nums[i];
  }
  console.log(pro);
  if (pro > 1) {
    return 1;
  } else if (pro === 0) {
    return 0;
  } else {
    return -1;
  }
};

const res = arraySign();
console.log(res);
