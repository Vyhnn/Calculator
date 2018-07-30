const formulaDisplay = document.getElementById("formula");
const numDisplay = document.getElementById("number-display");
const operatorsList = ['+', '-', '×', '÷', '='];
let formula = [];
let result = 0;
let currentNum = '';

function add(x, y) {
	return parseFloat(x)+parseFloat(y);
}

function subtract(x, y) {
	return parseFloat(x)-parseFloat(y);
}

function divide(x, y) {
	return parseFloat(x)/parseFloat(y);
}

function multiply(x, y) {
	return parseFloat(x)*parseFloat(y);
}

function power(x, y) {
	return Math.pow(parseFloat(x), parseFloat(y));
}

function root(x) {
  Math.sqrt(parseFloat(x));
}

function modulus(x, y) {
  return parseFloat(x)%parseFloat(y);
}

function clear() {
  formulaDisplay.innerHTML = '';
  numDisplay.innerHTML = '';
  formula = [];
	currentNum = '';
	result = '';
}

function plusmn() {
  currentNum = parseFloat(currentNum)* -1;
}

function update() {
	numDisplay.innerHTML = currentNum;
	formulaDisplay.innerHTML = formula.join(' ');
}

function cal() {
	const operator = formula[formula.length-3];
	console.log(operator);

	switch (operator) {
		case '+':
			result = add(result, currentNum);
			break;
		case '-':
			result = subtract(result, currentNum);
			break;
		case '×':
			result = multiply(result, currentNum);
			break;
		case '÷':
			if(currentNum!=0) {
				result = divide(result, currentNum);
			}
			else {
				alert("You can't divide by 0!!")
				formula.pop();
				formula.pop();
			}
			break;
		}
		console.log(result)
}

function operate(operator) {
	if(currentNum!=''||!operatorsList.includes(operator)) {
	  switch (operator) {
	    case '+':
				formula.push(currentNum);
				formula.push('+');
				if(formula.length>2) {cal();}
				else {result = currentNum;}
				currentNum = '';
				update();
				numDisplay.innerHTML = result;
	      break;
	    case '-':
				formula.push(currentNum);
				formula.push('-');
				if(formula.length>2) {cal();}
				else {result = currentNum;}
				currentNum = '';
				update();
				numDisplay.innerHTML = result;
	      break;
	    case '×':
				formula.push(currentNum);
				formula.push('×');
				if(formula.length>2) {cal();}
				else {result = currentNum;}
				currentNum = '';
				update();
				numDisplay.innerHTML = result;
	      break;
	    case '÷':
				formula.push(currentNum);
				formula.push('÷');
				if(formula.length>2) {cal();}
				else {result = currentNum;}
				currentNum = '';
				update();
				numDisplay.innerHTML = result;
	      break;
	    case '√':
	      return root(x);
	      break;
	    case '%':
	      return modulus(x, y);
	      break;
	    case '^':
	      return power(x, y);
	      break;
	    case 'CE':
	      return clear();
	      break;
	    case '±':
	      plusmn();
				update();
	      break;
			case '=':
				formula.push(currentNum);
				formula.push('');
				cal();
				currentNum = '';
				formula = [];
				update();
				numDisplay.innerHTML = result;
				result = '';

	    default:
	      break;

	  }
	}
}

function displayNum(x) {
	currentNum += x;
  numDisplay.innerHTML = currentNum;
}
//apply onclick listeners
const nums = document.getElementsByClassName("num-btn");

[].forEach.call(nums, (e) => {
  e.addEventListener("click", function() {displayNum(e.textContent)});
});

const operators = document.getElementsByClassName("operate-btn");

[].forEach.call(operators, (e) => {
  e.addEventListener("click", function() {operate(e.textContent)});
});
