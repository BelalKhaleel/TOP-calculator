const log = (...args) => {
  return console.log(...args);
}

let previousNumber = '';
let nextNumber = '';
let operator = '';

const screen = document.querySelector('.screen');

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', populateDisplay);

const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  const mod = (a, b) => a % b;
  return { add, sub, mul, div, mod };
})();

function operate(previousNumber, nextNumber, operator) {
  switch(operator) {
    case '+':
      return calculator.add(previousNumber, nextNumber);
    case '-':
      return calculator.sub(previousNumber, nextNumber);
    case 'x':
      return calculator.mul(previousNumber, nextNumber);
    case '÷':
      return calculator.div(previousNumber, nextNumber);
    case '%':
      return calculator.div(previousNumber, nextNumber);
  }
}

let currentNumber = '';

function populateDisplay(e) {
  let buttonClass = e.target.classList;
  if (
    buttonClass.contains('operand') 
    || 
    buttonClass.contains('decimal')
  ) {
    currentNumber += e.target.value;
    screen.textContent = currentNumber;
  }
  if (buttonClass.contains('operator')) {
    previousNumber = Number(currentNumber);
    currentNumber = '';
    operator = e.target.value;
  }
  if (buttonClass.contains('equal')) {
    nextNumber = Number(currentNumber);
    currentNumber = '';
    
    screen.textContent = operate(previousNumber, nextNumber, operator);
  }
  if (buttonClass.contains('clear')) {
    previousNumber = '';
    nextNumber = '';
    screen.textContent = '';
  }
  // if (buttonClass.contains('backspace')) {
  //   if (!screen.textContent) {
  //     log(screen.textContent);
  //     screen.textContent.split('').pop().join('');
  //   }
  // }
}