var checkTree = function (root) {
  let newRoot = root[0];
  let sum = 0;
  let rightNode;
  leftNode = 0;
  for (let i = 1; i < root.length; i++) {
    if (newRoot < root[i]) {
      newRoot = root[i];
    }
    if (leftNode < newRoot) {
      leftNode = root[i];
    } 
  }
  console.log(rightNode);
  if (sum == newRoot) {
    console.log("true");
  } else {
    console.log("false");
  }
};

checkTree([10, 4, 6]);
