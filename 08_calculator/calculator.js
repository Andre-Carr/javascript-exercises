const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(nums) {
	return nums.reduce((sum, num) => sum + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, num) => product * num, 1); 
};

const power = function(numOne, numTwo) {
	return numOne ** numTwo;
};

const factorial = function(num) {
    if(num <= 1) return 1;
    return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
