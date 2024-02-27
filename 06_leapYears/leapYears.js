const leapYears = function(testYear) {
    
    //console.log(testYear % 100 == 0);
    //console.log(!(testYear % 100 == 0));
    //console.log(testYear % 400 == 0);
    //console.log(testYear % 4 == 0);
  
    if (testYear % 4 == 0 && !(testYear % 100 == 0)){
        return true;
    }
    else if (testYear % 100 == 0 && testYear % 400 == 0){
        return true;
    }
    else {
        return false;
    }
};
//const yearTested = 700;
//document.getElementById("demo").innerHTML =
//"is " + yearTested + " a leap year? " + leapYears(yearTested);
// Do not edit below this line
module.exports = leapYears;
