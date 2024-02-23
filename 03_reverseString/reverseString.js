function reverseString(inputS) {
    const inputString = inputS;
    let reverseS = "";
    //put the string into an array
    stringArray = inputString.split("");
    stringArray.reverse();
    for (let x in stringArray){
        reverseS += stringArray[x];
    }
    return reverseS;
  
};
reverseString("h3llo There 007!")

// Do not edit below this line
module.exports = reverseString;
