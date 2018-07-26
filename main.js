let formula = [];
const formulaDisplay = document.getElementById("formula");
const numDisplay = document.getElementById("number-display");

function add(x, y) {
	return x+y;
}

function subtract(x, y) {
	return x-y;
}

function divide(x, y) {
	return x/y;
}

function multiply(x, y) {
	return x*y;
}

function power(x, y) {
	return Math.pow(x, y);
}

function root(x) {
  Math.sqrt(x);
}

function modulus(x, y) {
  return x%y;
}

function clear() {
  formulaDisplay.innerHTML = '';
  numDisplay.innerHTML = '';
  formula = [];
}

function plusmn() {
  if(!(numDisplay.innerHTML==='')) {
    let num = parseFloat(numDisplay.innerHTML);
    console.log(numDisplay.innerHTML);
    numDisplay.innerHTML = num * -1;
  }
}

function operate(operator) {
  console.log(operator);
  switch (operator) {
    case '+':
      return add(x, y);
      break;
    case '-':
      return subtract(x, y);
      break;
    case '×':
      return multiply(x, y);
      break;
    case '÷':
      return divide(x, y);
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
      return plusmn();
      break;
    default:
      break;

  }
}

function displayNum(x) {
  const num = numDisplay.innerHTML;
  numDisplay.innerHTML = num + x;
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
