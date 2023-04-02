var defangIPaddr = function (address) {
  // for (let i = 0; i < address.length; i++) {
  //   if (address[i] == ".") {
  //     console.log((address[i] = "[.]"+" "));
  //   } else {
  //     console.log(address[i]+" ");
  //   }
  // }
  console.log(address.split(".").join("[.]"));
};

defangIPaddr("1.1.1.1");
