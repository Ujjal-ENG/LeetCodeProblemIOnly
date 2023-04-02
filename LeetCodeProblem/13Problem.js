var romanToInt = function (s) {
  let sum = 0;
  let obj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // while (s) {
  //   for (let key in obj) {
  //     if (s.startsWith(key)) {
  //       sum += obj[key];
  //       s = s.slice(key.length);
  //       console.log("Changes of the S value: ", s,key);
  //     }
  //   }
  // }

  while (s) {
    for (let key in obj) {
      if (s.startsWith(key)) {
        sum += obj[key];
        s = s.slice(key.length);
        console.log("Changes of the S value: ", s,key);
      }
    }
  }
  return sum;
};

console.log(romanToInt("MCMXCIV"));
