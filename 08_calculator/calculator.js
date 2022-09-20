const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  let result = 0;
	array.forEach(item => result += item);
  return result;
};

const multiply = function(array) {
  let result = 1;
	array.forEach(item => result *= item);
  return result;
};

const power = function(num, power) {
  let result = num;
	if (power == 0) return 1;
    for (let i = 1; i < power; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
    let result = 1;
    if (num == 0) return 1;
  	for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
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
