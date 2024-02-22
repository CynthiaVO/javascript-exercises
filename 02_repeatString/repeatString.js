const repeatString = function(textString, repeats) {
    let resultString = '';
    if (repeats >= 0){
        for (let i = 0; i < repeats; i++){
            resultString += textString;
        }
        return resultString;
    }
    else {
        return 'ERROR';
    }
        
};
repeatString("hey",3);

// Do not edit below this line
module.exports = repeatString;
