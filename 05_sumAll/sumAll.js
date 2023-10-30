const sumAll = function(intOne, intTwo) {
    if(typeof(intOne) !== 'number' || typeof(intTwo) !== 'number') return "ERROR";
    if(intOne < 0 || intTwo < 0) return "ERROR";
    const min = (intOne < intTwo) ? intOne : intTwo;
    const max = (intOne > intTwo) ? intOne : intTwo;
    let sum = 0;
    for(let addend = min; addend <= max; addend++) {
        sum += addend;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
