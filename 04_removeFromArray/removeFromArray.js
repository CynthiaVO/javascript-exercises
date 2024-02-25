const removeFromArray = function(arrayToTest, ...args) {
    args.forEach(arg => {
    
        if (arrayToTest.includes(arg)){
           //console.log(arg + " is in the array");
           
           myIndex = arrayToTest.indexOf(arg);
           //console.log("the index of " + arg + " is " + myIndex);
           //console.log("arrayToTest before splicing: "+ arrayToTest);
           
           arrayToTest = arrayToTest.toSpliced(myIndex,1 );
           //console.log("after splicing: " + arrayToTest);
       } 
   })
   return arrayToTest;
};
removeFromArray([1,2,3,4],3,4);

// Do not edit below this line
module.exports = removeFromArray;
