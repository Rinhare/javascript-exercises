const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function([...values]) {
  if (values.length !== 0) {
	  const sum = values.reduce((a, b) => {
      return a + b;
    }, 0);

    return sum;
  }
  return 0;
};


const multiply = function([...arr]) {
const sum = arr.reduce((a, b) => {
  return a * b;
 }, 1);
 return sum; 
};

const power = function(a ,b) {
	return a ** b;
};

const factorial = function(sum) {
	const arr = [];

  if (sum == 0 || sum == 1) {
    return 1;
  }

  for (i = 1; i <= sum; i++) {
    arr.push(i)
  };

  return arr.reduce((a, b) => {
      return a * b; }, 1)
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
