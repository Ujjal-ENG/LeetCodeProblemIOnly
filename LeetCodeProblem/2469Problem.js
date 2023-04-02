var convertTemperature = function (celsius) {
  let c = (celsius + 273.15).toFixed(5)
  let f = ((celsius * 1.80) + 32.00).toFixed(5)
  const res = [c, f]
  return res
  
};

convertTemperature(36.50)