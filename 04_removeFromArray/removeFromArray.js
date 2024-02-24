const removeFromArray = function(arrayToTest,arg) {
    //step through array items one at a time
    //match the given argument to be removed
    if (arrayToTest.includes(arg)){
        //find the index
        myIndex = arrayToTest.findIndex(myFunction);
        function myFunction(value,index,array){
            return value === arg;
        }
        //remove the matching item from the array
        const resultArray = arrayToTest.toSpliced(myIndex,1 );
        return resultArray;
    } 
    else {
        return arrayToTest;
    }
    
    
    //return the altered array
};
removeFromArray([1,2,3,4],3);

// Do not edit below this line
module.exports = removeFromArray;
