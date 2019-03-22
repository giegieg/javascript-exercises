function add (x,y) {
 return x+ y;
}

function subtract (x,y) {
return x-y;
}

function sum (arr) {
	total=0;
	for (let elem of arr) {
		total += elem;
	}
	return total;
}

function multiply (arr) {
	product = 1;
	for (let elem of arr) {
		product *= elem;
	}
	return product;
}

function power(x,y) {
	return(Math.pow(x,y));
}

function factorial(a) {
	answer = 1;
	for (i=a; i>0; i--) {
		answer *= i;
	}
	return answer;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}