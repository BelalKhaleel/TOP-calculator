const log = (...args) => {
  return console.log(...args);
}

let firstNumber = '';
let secondNumber = '';
let operator = '';

const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  const mod = (a, b) => a % b;
  return { add, sub, mul, div, mod };
})();

function operate(firstNumber, secondNumber, operator) {
  switch(operator) {
    case '+':
      calculator.add(firstNumber, secondNumber);
      break;
    case '-':
      calculator.sub(firstNumber, secondNumber);
      break;
    case 'x':
      calculator.mul(firstNumber, secondNumber);
      break;
    case '÷':
      calculator.div(firstNumber, secondNumber);
      break;
    case '%':
      calculator.div(firstNumber, secondNumber);
      break;
  }
}

const calcScreen = document.querySelector('.screen');

