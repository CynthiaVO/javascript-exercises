const convertToCelsius = function(x) {
  x  = (x - 32) * 5/9;
  if (x==0){
    
    return parseFloat(x.toFixed(0));
  }
  else {
    return parseFloat(x.toFixed(1));
  }
  
};

const convertToFahrenheit = function(x) {
  x = (x * 9/5 + 32);
  return parseFloat(x.toFixed(1));
};
//document.getElementById("demo").innerHTML = convertToCelsius(100);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
