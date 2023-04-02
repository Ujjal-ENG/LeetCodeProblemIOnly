var simplifyPath = function (path) {
  path = path.split("/");
  let newArray = [];
  for (let i of path) {
    if (i == "." || i == "") continue;
    else if (i == "..") newArray.pop();
    else newArray.push(i);
  }

  return "/" + newArray.join("/");
};

console.log(simplifyPath("/home//foo/"));
