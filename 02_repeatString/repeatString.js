const repeatString = function(str, num) {
    let strOutput = "";
    if (num < 0) {
        return "ERROR";
    }
    for(let i = 0; i < num; i++) {
        strOutput += str;
    }
    return strOutput;
};

// Do not edit below this line
module.exports = repeatString;
