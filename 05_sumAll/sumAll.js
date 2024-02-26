const sumAll = function(firstArg,lastArg) {
   //test if positive,isNan and if number type
   if (firstArg>0
    && lastArg>0
    && !isNaN(firstArg)
    && !isNaN(lastArg)
    && typeof firstArg == typeof 1
    && typeof lastArg == typeof 1){
    
    //which is larger and assign appropriately
    lowNum = Math.min(firstArg,lastArg);
    hiNum = Math.max(firstArg,lastArg);
    let resultSum = 0;
    for(let i = 0;(lowNum + i) <= hiNum; i++){
        resultSum += lowNum + i; 
    }
    return resultSum;
   }
   else {
    return 'ERROR';
   }

};
//Do not edit below this line
module.exports = sumAll;
