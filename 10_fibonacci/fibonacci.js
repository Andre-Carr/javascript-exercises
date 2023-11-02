const fibonacci = function(sequence) {
    const seqNum = parseInt(sequence);
    if(seqNum < 0 ) return "OOPS";
    if(seqNum === 0) return 0;
    if(seqNum === 1 || seqNum === 2) return 1;
    return fibonacci(seqNum- 1) + fibonacci(seqNum - 2);
};

// Do not edit below this line
module.exports = fibonacci;
