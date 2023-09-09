const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b == 0) return "Cannot divide by zero!";
  return a / b;
};

const sum = function (arr) {
  return arr.reduce((sum, current) => sum + current, 0);
};

// const multiply = function (arr) {
//   return arr.reduce((product, current) => product * current);
// };

const power = function (a, b) {
  return a ** b;
};

let num1;

let num2;

let operator;

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "×":
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
    default:
      return "Invalid operator!";
  }
}

function addOperatorToScreen(operator) {
  const screen = document.querySelector('.screen');

  const span = document.createElement('span');
  span.textContent = operator;
  span.style.marginLeft = '5px';
  span.style.marginRight = '5px';

  screen.appendChild(span);
   // Reset the current span when an operator is added
   currentSpan = null;
}

function chooseOperator(selectedOperator) {
  operator = selectedOperator;
}

const screen = document.querySelector('.screen');
let currentSpan = null; // Initialize currentSpan as null to start

function addNumberToScreen(num) {

  if (!currentSpan) {
    // Create a new span for the first digit
    currentSpan = document.createElement('span');
    screen.appendChild(currentSpan);
  }
  currentSpan.textContent += num; // Append subsequent digits
}


// function selectNumber(selectedNumber) {
//   if (num1 == undefined) {
//     num1 = selectedNumber;
//     } else {
//       num2 = selectedNumber;
//     } 
// }

function clearScreen() {
  const spans = document.querySelectorAll('span');

  spans.forEach((span) => {
    span.remove();
  })
}