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

function addDisplayToScreen(opera) {
  const screen = document.querySelector('.screen');

  const content = document.createElement('span');
  content.textContent = opera;

  const spaceSpan = document.createElement('span');
  spaceSpan.textContent = ' ';
  spaceSpan.style.width = "5px";

  screen.appendChild(content);
  screen.appendChild(spaceSpan);
}

function clearScreen() {
  const spans = document.querySelectorAll('span');

  spans.forEach((span) => {
    span.remove();
  })
}