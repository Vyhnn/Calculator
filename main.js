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

function modulus(x, y) {
  return parseFloat(x)%parseFloat(y);
}

function clear() {
  formula = [];
	currentNum = '';
	result = '';
}

function plusmn() {
  currentNum = parseFloat(currentNum)* -1;
}

function update() {
	if(result!=''){
		numDisplay.innerHTML = parseFloat(parseFloat(result).toPrecision(10));
	}
	else {numDisplay.innerHTML = ''}
	formulaDisplay.innerHTML = formula.join(' ');
}

function cal() {
	const operator = formula[formula.length-3];

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
	      break;
	    case '-':
				formula.push(currentNum);
				formula.push('-');
				if(formula.length>2) {cal();}
				else {result = currentNum;}
				currentNum = '';
				update();
	      break;
	    case '×':
				formula.push(currentNum);
				formula.push('×');
				if(formula.length>2) {cal();}
				else {result = currentNum;}
				currentNum = '';
				update();
	      break;
	    case '÷':
				formula.push(currentNum);
				formula.push('÷');
				if(formula.length>2) {cal();}
				else {result = currentNum;}
				currentNum = '';
				update();
	      break;
			case 'C':
	      clear();
				update();
	      break;
	    case 'CE':
	      currentNum = '';
				numDisplay.innerHTML = ''
	      break;
	    case '±':
	      plusmn();
				numDisplay.innerHTML = currentNum;
	      break;
			case '=':
				formula.push(currentNum);
				formula.push('');
				cal();
				currentNum = '';
				formula = [];
				update();
				result = '';

	    default:
	      break;

	  }
	}
}

function displayNum(x) {
	if(x=='DEL') {
		currentNum = currentNum.slice(0, -1);
		numDisplay.innerHTML = currentNum;
	}
	else if(x!='.'||!currentNum.includes('.')){
		currentNum += x;
	  numDisplay.innerHTML = currentNum;
	}

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
