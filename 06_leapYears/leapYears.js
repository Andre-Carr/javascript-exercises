const leapYears = function(year) {
    let isLeapYear = false;
    if (!(year % 4) && (year % 100)) {
        isLeapYear = true;
    } else if (!(year % 400)) {
        isLeapYear = true;
    }
    return isLeapYear;   
};

// Do not edit below this line
module.exports = leapYears;
